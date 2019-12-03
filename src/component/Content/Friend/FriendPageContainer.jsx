import React from 'react';
import {connect} from "react-redux";
import Friends from "./FriendPage";




let mapStateToProps =(state)=> {
    return{
        friendsItem: state.friendsItem,
    }
};

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;