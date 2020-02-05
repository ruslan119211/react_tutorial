import React from 'react';
import * as axios from 'axios';
import userPhotoDefault from '../../../assets/img/user-image.png';

class Users extends React.Component{

    // className={this.props.currentPage  === p && active }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
            // id: 1,
            // followed: false,
            // photoUrl: 'https://image.businessinsider.com/565dc87b84307663008b6652?width=1001&format=jpeg',
            // fullName: 'Ivan',
            // location: {city: 'Mykolaiv', country: 'Ukraine'},
            // status: 'Iam free'
    }

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount =  Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++){
            pages.push(i);
        }



        return <div className='users-content'>

            <div className='pagination'>
                {pages.map( p => {
                   return <span onClick={ ()=>{ this.onPageChanged(p);} } key={p.id} className={this.props.currentPage  === p && 'page_selected'}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div className='users-item'>
                        <div className='left-block'>
                            <div className='users-iamge'>
                                <img src={u.photos.small != null ? u.photos.small : userPhotoDefault} alt={u.name+"_photo"}/>
                            </div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                        <div className='right-block'>
                            <p className='name-users'>{u.name}</p>
                            <p className='status-users'>{u.status}</p>
                            <p className='location-users'>{"u.location.country"},<br/>{"u.location.city"}</p>
                        </div>
                    </div>
                </div>)
            }
            <div className='pagination'>
                {pages.map( p => {
                    return <span onClick={()=>{ this.onPageChanged(p);}} key={p.id} className={this.props.currentPage  === p && 'page_selected' }>{p}</span>
                })}
            </div>
        </div>
    }
}

export default Users;