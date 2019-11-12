const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newText,
                cauntLikes: 0
            };
            state.post.push(newPost);
            state.newText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newText = action.newText;
            return state;
        default:
            return state;
    }

};

export const addNewPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreate = (text) => ({type: UPDATE_NEW_POST_TEXT,newText: text});

export default profileReducer;