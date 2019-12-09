import React from 'react';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    followed: false,
                    photoUrl: 'https://image.businessinsider.com/565dc87b84307663008b6652?width=1001&format=jpeg',
                    fullName: 'Ivan',
                    location: {city: 'Mykolaiv', country: 'Ukraine'},
                    status: 'Iam free'
                },
                {
                    id: 2,
                    followed: true,
                    photoUrl: 'https://image.businessinsider.com/565dc87b84307663008b6652?width=1001&format=jpeg',
                    fullName: 'Kolya',
                    location: {city: 'Mykolaiv', country: 'Ukraine'},
                    status: 'Iam free1'
                },
                {
                    id: 3,
                    followed: true,
                    photoUrl: 'https://image.businessinsider.com/565dc87b84307663008b6652?width=1001&format=jpeg',
                    fullName: 'Vasya',
                    location: {city: 'Mykolaiv', country: 'Ukraine'},
                    status: 'Iam free'
                },
                {
                    id: 4,
                    followed: false,
                    photoUrl: 'https://image.businessinsider.com/565dc87b84307663008b6652?width=1001&format=jpeg',
                    fullName: 'Petro',
                    location: {city: 'Mykolaiv', country: 'Ukraine'},
                    status: 'Iam free'
                },
                {
                    id: 5,
                    followed: false,
                    photoUrl: 'https://image.businessinsider.com/565dc87b84307663008b6652?width=1001&format=jpeg',
                    fullName: 'Maksim',
                    location: {city: 'Mykolaiv', country: 'Ukraine'},
                    status: 'Iam free'
                },
                {
                    id: 6,
                    followed: true,
                    photoUrl: 'https://image.businessinsider.com/565dc87b84307663008b6652?width=1001&format=jpeg',
                    fullName: 'Mike',
                    location: {city: 'Ukraine', country: 'Mykolaiv'},
                    status: 'Iam free'
                },
                {
                    id: 7,
                    followed: false,
                    photoUrl: 'https://image.businessinsider.com/565dc87b84307663008b6652?width=1001&format=jpeg',
                    fullName: 'Roman',
                    location: {city: 'Mykolaiv', country: 'Ukraine'},
                    status: 'Iam free'
                },
                {
                    id: 8,
                    followed: false,
                    photoUrl: 'https://image.businessinsider.com/565dc87b84307663008b6652?width=1001&format=jpeg',
                    fullName: 'Max',
                    location: {city: 'Mykolaiv', country: 'Ukraine'},
                    status: 'Iam free too'
                },
            ]
        )
    }
    return <div className='users-content'>
        {
            props.users.map(u => <div key={u.id}>
                <div className='users-item'>
                    <div className='left-block'>
                        <div className='users-iamge'>
                            <img src={u.photoUrl} alt={u.fullName}/>
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
                        <span className='name-users'>{u.fullName}</span>
                        <span className='status-users'>{u.status}</span>
                        <span className='location-users'>{u.location.country},<br/>{u.location.city}</span>
                    </div>
                </div>
            </div>)
        }
    </div>
};

export default Users;