import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MypostsContainer";


const Profile = (props) => {


    return (
        <div className="profile">
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
                              message={props.profile}
                              dispatch={props.dispatch}
                              textAreaValue={props.textAreaValue}/>
        </div>
    );
}

export default Profile;