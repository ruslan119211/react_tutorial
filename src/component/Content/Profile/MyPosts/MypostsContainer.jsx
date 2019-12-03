import React from 'react';

import {addNewPostActionCreator, onPostChangeActionCreate} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        message: state.profilePage.post,
        textAreaValue: state.profilePage.newText,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = onPostChangeActionCreate(text);
            dispatch(action);
        },
        addPosts: () => {
            dispatch(addNewPostActionCreator());
        },

    }
};


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;