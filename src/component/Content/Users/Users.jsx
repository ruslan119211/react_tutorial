import React from 'react';
import * as axios from 'axios';
import userPhotoDefault from '../../../assets/img/user-image.png';

const Users = (props) => {
    let getUsers = () => {


        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                props.setUsers(response.data.items)
            });
    //             id: 1,
            //             followed: false,
            //             photoUrl: 'https://image.businessinsider.com/565dc87b84307663008b6652?width=1001&format=jpeg',
            //             fullName: 'Ivan',
            //             location: {city: 'Mykolaiv', country: 'Ukraine'},
            //             status: 'Iam free'
        }
    }
    return <div className='users-content'>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <div className='users-item'>
                    <div className='left-block'>
                        <div className='users-iamge'>
                            <img src={u.photos.small != null ? u.photos.small : userPhotoDefault} alt={u.name}/>
                        </div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
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
    </div>
};

export default Users;