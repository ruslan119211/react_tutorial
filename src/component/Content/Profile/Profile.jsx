import React from 'react';
import Myposts from './MyPosts/Myposts';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";


const Profile = (props) => {


    return (
        <div className="profile">
            <ProfileInfo/>
            <Myposts message={props.profile} dispatch={props.dispatch} textAreaValue={props.textAreaValue}/>
        </div>
    );
}

export default Profile;