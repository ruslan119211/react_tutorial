import React from 'react';
import FriendItem from "./itemFriend/FriendsItem";

const Friends = (props) => {
    let friends = props.friend.map(f => <FriendItem name={f.name} id={f.id} image={f.image}/>);

    return (
        <div className='friendContent'>
            <ul>
                {friends}
            </ul>
        </div>
    );
}

export default Friends;