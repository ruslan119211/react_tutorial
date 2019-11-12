import React from 'react';
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {

    let path = "/messages/" + props.id;
    let imageUser =  props.image;

    return (
        <li className="dialogs__block__item">
            <NavLink to={path}><img src={imageUser} className="imageUserDialog"/>{props.name}</NavLink>
        </li>
    );
}

export default DialogItems;