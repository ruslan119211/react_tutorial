import React from 'react';
import userPhotoDefault from '../../../assets/img/user-image.png';

let Users = (props) => {
    let pagesCount =  Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++){
        pages.push(i);
    }

    return <div className='users-content'>
        <div className='pagination'>
            {pages.map(p => {
                return <span onClick={() => {
                   props.onPageChanged(p);
                }} key={p.id} className={props.currentPage === p && 'page_selected'}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div className='users-item'>
                    <div className='left-block'>
                        <div className='users-iamge'>
                            <img src={u.photos.small != null ? u.photos.small : userPhotoDefault}
                                 alt={u.name + "_photo"}/>
                        </div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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
            {pages.map(p => {
                return <span onClick={() => {
                    props.onPageChanged(p);
                }} key={p.id} className={props.currentPage === p && 'page_selected'}>{p}</span>
            })}
        </div>
    </div>
}

export default Users;