import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendReducer from "./friends-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    friendsItem: friendReducer
});

let store = createStore(reducers);

window.store = store;

export default store;