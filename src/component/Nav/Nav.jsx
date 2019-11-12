import React from 'react';
import {NavLink} from "react-router-dom";
import FriendItem from "../Content/Friend/itemFriend/FriendsItem";


const Nav = (props) =>{

    let friends = props.friend.slice(0, 3).map(f => <FriendItem name={f.name} id={f.id} image={f.image} />);

    return(
        <div className="nav">
            <nav>
                <ul>
                    <li className="item">
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li className="item">
                        <NavLink to="/messages">Messages</NavLink>
                    </li>
                    <li className="item">
                        <NavLink to="/news">News</NavLink>
                    </li>
                    <li className="item">
                        <NavLink to="/music">Music</NavLink>
                    </li>
                    <li className="item">
                        <NavLink to="/setting">Setting</NavLink>
                    </li>
                    <li className="item">
                        <NavLink to="/friends">Friends</NavLink>
                    </li>
                </ul>
                <div className="friendsBlock">
                    {friends}
                </div>
            </nav>
        </div>
    );
}

export default Nav;