import React from 'react';

import {addNewPostActionCreator, onPostChangeActionCreate} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();
                let addPosts = () => {
                    store.dispatch(addNewPostActionCreator());
                };

                let onPostChange = (text) => {
                    let action = onPostChangeActionCreate(text);
                    store.dispatch(action);
                };
                return <MyPosts addPosts={addPosts}
                                updateNewPostText={onPostChange}
                                message={state.profilePage.post}
                                textAreaValue={state.profilePage.newText}/>
            }
        }
    </StoreContext.Consumer>
    );
};

export default MyPostsContainer;