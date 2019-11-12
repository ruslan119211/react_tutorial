import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendReducer from "./friends-reducer";


let store = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hi! What are you duing?', cauntLikes: 10},
                {id: 2, message: 'My first post', cauntLikes: 12},
                {id: 3, message: 'google', cauntLikes: 45},
                {id: 4, message: 'My first post', cauntLikes: 5},
                {id: 5, message: 'My first post', cauntLikes: 5},
                {id: 5, message: 'My  post', cauntLikes: 48},
            ],
            newText: 'Ruslan test'
        },
        messagePage: {
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
        },
        friendsItem: {
            friends: [
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
                {id: 4, name: 'Ivan', image: 'https://media.thestar.com.my/Prod/BC31E7E4-06FF-40A1-8B75-E812DE06F54B'},
                {
                    id: 5,
                    name: 'Valua',
                    image: 'https://scontent.fnlv1-1.fna.fbcdn.net/v/t1.0-9/50982576_2017757371638622_1248444450603008000_n.jpg?_nc_cat=107&_nc_oc=AQndyW9QsR4jBVUBKgiAdLAMSIskmUN8mx9aZE3WeCiMp0rR7Qvn8DnZJ3VShd9K_eA&_nc_ht=scontent.fnlv1-1.fna&oh=4c6b015d0a499bbaf90b3db8a016124f&oe=5E284E5A'
                },
                {
                    id: 6,
                    name: 'Ruslan',
                    image: 'https://scontent.fnlv1-1.fna.fbcdn.net/v/t1.0-9/66099921_2859613744112497_6160510964065107968_n.jpg?_nc_cat=108&_nc_oc=AQln_8GBo2o5Eci8tu07ki-iuCZ2StTnH_oILUvkwMR9dxRZCXX2gSWH__Yud43Ej5s&_nc_ht=scontent.fnlv1-1.fna&oh=e0f1669f8533a94292fce9731d314ec8&oe=5E5D133D'
                },
                {id: 7, name: 'Max', image: 'https://media.thestar.com.my/Prod/BC31E7E4-06FF-40A1-8B75-E812DE06F54B'},
                {id: 8, name: 'Ivan', image: 'https://media.thestar.com.my/Prod/BC31E7E4-06FF-40A1-8B75-E812DE06F54B'},
            ],
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State change');
    },
    subscribe(observer) {
        this._callSubscriber = observer; //Патерн observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogReducer(this._state.messagePage, action);
        this._state.friendsItem = friendReducer(this._state.friendsItem, action);

        this._callSubscriber(this._state);
    },

};



export default store;
window.store = store;
//Store OOP