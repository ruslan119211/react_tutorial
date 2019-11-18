import React from 'react';

import {addNewPostActionCreator, onPostChangeActionCreate} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPosts = () => {
        props.store.dispatch(addNewPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = onPostChangeActionCreate(text);
        props.store.dispatch(action);
    };

    return (<MyPosts addPosts={addPosts}
                     updateNewPostText={onPostChange}
                     message={state.profilePage.post}
                     textAreaValue={state.profilePage.newText}
    />);
};

export default MyPostsContainer;