import React from 'react';
import {addReplyActionCreator, onMessageChangeActionCreator} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().messagePage;


    let addReply = () => {
        props.store.dispatch(addReplyActionCreator());
    };

    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text))
    };

    return (<Dialogs updateOnMessageChange={onMessageChange}
                     addReplyActionCreator={addReply}
                     messagePage={state}
                     messageAreaValue={state.newMessage}/>);
}

export default DialogsContainer;