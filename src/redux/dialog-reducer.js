const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Valua',
            image: 'https://scontent.fnlv1-1.fna.fbcdn.net/v/t1.0-9/50982576_2017757371638622_1248444450603008000_n.jpg?_nc_cat=107&_nc_oc=AQndyW9QsR4jBVUBKgiAdLAMSIskmUN8mx9aZE3WeCiMp0rR7Qvn8DnZJ3VShd9K_eA&_nc_ht=scontent.fnlv1-1.fna&oh=4c6b015d0a499bbaf90b3db8a016124f&oe=5E284E5A'
        },
        {
            id: 2,
            name: 'Ruslan',
            image: 'https://scontent.fnlv1-1.fna.fbcdn.net/v/t1.0-9/66099921_2859613744112497_6160510964065107968_n.jpg?_nc_cat=108&_nc_oc=AQln_8GBo2o5Eci8tu07ki-iuCZ2StTnH_oILUvkwMR9dxRZCXX2gSWH__Yud43Ej5s&_nc_ht=scontent.fnlv1-1.fna&oh=e0f1669f8533a94292fce9731d314ec8&oe=5E5D133D'
        },
        {id: 3, name: 'Max', image: 'https://media.thestar.com.my/Prod/BC31E7E4-06FF-40A1-8B75-E812DE06F54B'},
        {id: 4, name: 'Kolya', image: 'https://media.thestar.com.my/Prod/BC31E7E4-06FF-40A1-8B75-E812DE06F54B'},
        {id: 5, name: 'Vasya', image: 'https://media.thestar.com.my/Prod/BC31E7E4-06FF-40A1-8B75-E812DE06F54B'},
    ],
    messages: [
        {
            id: 1,
            message: 'Hi',
            reply: 'Hello',
            image: 'https://scontent.fnlv1-1.fna.fbcdn.net/v/t1.0-9/66099921_2859613744112497_6160510964065107968_n.jpg?_nc_cat=108&_nc_oc=AQln_8GBo2o5Eci8tu07ki-iuCZ2StTnH_oILUvkwMR9dxRZCXX2gSWH__Yud43Ej5s&_nc_ht=scontent.fnlv1-1.fna&oh=e0f1669f8533a94292fce9731d314ec8&oe=5E5D133D',
            replyImage: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg'
        },
        {
            id: 2,
            message: 'How are you?',
            reply: 'Ok, and you?',
            image: 'https://scontent.fnlv1-1.fna.fbcdn.net/v/t1.0-9/66099921_2859613744112497_6160510964065107968_n.jpg?_nc_cat=108&_nc_oc=AQln_8GBo2o5Eci8tu07ki-iuCZ2StTnH_oILUvkwMR9dxRZCXX2gSWH__Yud43Ej5s&_nc_ht=scontent.fnlv1-1.fna&oh=e0f1669f8533a94292fce9731d314ec8&oe=5E5D133D',
            replyImage: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg'
        },
        {
            id: 3,
            message: 'Yo',
            reply: 'Cool',
            image: 'https://scontent.fnlv1-1.fna.fbcdn.net/v/t1.0-9/66099921_2859613744112497_6160510964065107968_n.jpg?_nc_cat=108&_nc_oc=AQln_8GBo2o5Eci8tu07ki-iuCZ2StTnH_oILUvkwMR9dxRZCXX2gSWH__Yud43Ej5s&_nc_ht=scontent.fnlv1-1.fna&oh=e0f1669f8533a94292fce9731d314ec8&oe=5E5D133D',
            replyImage: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg'
        },
        {
            id: 4,
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique et. Eget magna fermentum iaculis eu non diam. Feugiat nibh',
            reply: ':-)',
            image: 'https://scontent.fnlv1-1.fna.fbcdn.net/v/t1.0-9/66099921_2859613744112497_6160510964065107968_n.jpg?_nc_cat=108&_nc_oc=AQln_8GBo2o5Eci8tu07ki-iuCZ2StTnH_oILUvkwMR9dxRZCXX2gSWH__Yud43Ej5s&_nc_ht=scontent.fnlv1-1.fna&oh=e0f1669f8533a94292fce9731d314ec8&oe=5E5D133D',
            replyImage: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg'
        },
        {
            id: 5,
            message: 'Yo',
            reply: 'by',
            image: 'https://scontent.fnlv1-1.fna.fbcdn.net/v/t1.0-9/66099921_2859613744112497_6160510964065107968_n.jpg?_nc_cat=108&_nc_oc=AQln_8GBo2o5Eci8tu07ki-iuCZ2StTnH_oILUvkwMR9dxRZCXX2gSWH__Yud43Ej5s&_nc_ht=scontent.fnlv1-1.fna&oh=e0f1669f8533a94292fce9731d314ec8&oe=5E5D133D',
            replyImage: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg'
        },
        {
            id: 6,
            message: 'by',
            image: 'https://scontent.fnlv1-1.fna.fbcdn.net/v/t1.0-9/66099921_2859613744112497_6160510964065107968_n.jpg?_nc_cat=108&_nc_oc=AQln_8GBo2o5Eci8tu07ki-iuCZ2StTnH_oILUvkwMR9dxRZCXX2gSWH__Yud43Ej5s&_nc_ht=scontent.fnlv1-1.fna&oh=e0f1669f8533a94292fce9731d314ec8&oe=5E5D133D',
        }
    ],
    newMessage: 'Hello'
};

const dialogReducer = (state = initialState, action) => {
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
export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export default dialogReducer;