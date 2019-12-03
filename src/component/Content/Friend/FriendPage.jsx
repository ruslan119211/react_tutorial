import React from 'react';
import FriendItem from "./itemFriend/FriendsItem";



const Friends = (props) => {


    let state = props.friendsItem;
    let friends = state.friends.map(f => <FriendItem name={f.name} key={f.id} id={f.id} image={f.image}/>);

    return (
        <div className='friendContent'>
            <ul>
                {friends}
            </ul>
        </div>
    );
}

export default Friends;