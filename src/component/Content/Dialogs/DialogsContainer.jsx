import React from 'react';
import {addReplyActionCreator, onMessageChangeActionCreator} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
        messageAreaValue: state.messagePage.newMessage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addReplyActionCreator: () => {
            dispatch(addReplyActionCreator());
        },
        updateOnMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;