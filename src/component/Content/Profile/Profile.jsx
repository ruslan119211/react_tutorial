import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MypostsContainer";


const Profile = (props) => {


    return (
        <div className="profile">
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;