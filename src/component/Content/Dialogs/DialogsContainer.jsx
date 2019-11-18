import React from 'react';
import {addReplyActionCreator, onMessageChangeActionCreator} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";

const DialogsContainer = (props) => {



    return <StoreContext.Consumer>
        { store => {
            let state = store.getState().messagePage;


            let addReply = () => {
                store.dispatch(addReplyActionCreator());
            };

            let onMessageChange = (text) => {
                store.dispatch(onMessageChangeActionCreator(text))
            };
            return <Dialogs updateOnMessageChange={onMessageChange}
                            addReplyActionCreator={addReply}
                            messagePage={state}
                            messageAreaValue={state.newMessage}/>
            }
        }
        </StoreContext.Consumer>
}

export default DialogsContainer;