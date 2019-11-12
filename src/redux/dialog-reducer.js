const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                name: 'Ruslan',
                message: state.newMessage,
                image: 'https://scontent.fnlv1-1.fna.fbcdn.net/v/t1.0-9/66099921_2859613744112497_6160510964065107968_n.jpg?_nc_cat=108&_nc_oc=AQln_8GBo2o5Eci8tu07ki-iuCZ2StTnH_oILUvkwMR9dxRZCXX2gSWH__Yud43Ej5s&_nc_ht=scontent.fnlv1-1.fna&oh=e0f1669f8533a94292fce9731d314ec8&oe=5E5D133D',
            }
            state.messages.push(newMessage);
            state.newMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.newMessage;
            return state;
        default:
            return state;
    }

};

export const addReplyActionCreator = () => ({type: ADD_MESSAGE});
export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT,newMessage: text});

export default dialogReducer;