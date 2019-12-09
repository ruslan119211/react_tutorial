const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    post: [
        {id: 1, message: 'Hi! What are you duing?', countLikes: 10},
        {id: 2, message: 'My first post', countLikes: 12},
        {id: 3, message: 'google', countLikes: 45},
        {id: 4, message: 'My first post', countLikes: 5},
        {id: 5, message: 'My first post', countLikes: 5},
        {id: 6, message: 'My  post', countLikes: 48},
    ],
    newText: 'Ruslan test'
};

const profileReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newText,
                countLikes: 0
            };
            stateCopy = {
                ...state,
                newText: '',
                post: [...state.post, newPost]
            };
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            stateCopy = {
                ...state,
                newText: action.newText
            };
            return stateCopy;
        }
        default:
            return state;
    }

};

export const addNewPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreate = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;