const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    post: [
        {id: 1, message: 'Hi! What are you duing?', cauntLikes: 10},
        {id: 2, message: 'My first post', cauntLikes: 12},
        {id: 3, message: 'google', cauntLikes: 45},
        {id: 4, message: 'My first post', cauntLikes: 5},
        {id: 5, message: 'My first post', cauntLikes: 5},
        {id: 5, message: 'My  post', cauntLikes: 48},
    ],
    newText: 'Ruslan test'
};

const profileReducer = (state = initialState, action) => {
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
export const onPostChangeActionCreate = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;