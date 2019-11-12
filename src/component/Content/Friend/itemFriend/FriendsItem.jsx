import React from 'react';
import {NavLink} from "react-router-dom";



const FriendItem = (props) => {

    let path = "/friend/" + props.name;
    let imageUser =  props.image;


    return (
        <li className="friend_item">
            <NavLink to={path}>
                <img src={imageUser} className="imageUserDialog"/>
                <p>{props.name}</p>
            </NavLink>
        </li>
    );
}

export default FriendItem;