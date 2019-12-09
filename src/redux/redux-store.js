import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendReducer from "./friends-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    friendsItem: friendReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;