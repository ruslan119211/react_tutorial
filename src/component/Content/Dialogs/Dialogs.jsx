import React from 'react';
import DialogItems from "./Dialog/Dialog";
import MessageItem from "./Message/Message";
import ReplyMessage from "./ReplyMessage/ReplyMessage";


const Dialogs = (props) => {

    let dialogElements = props.dialog.map(d => <DialogItems name={d.name} id={d.id} image={d.image}/>);

    let messageElements = props.messages.map(m => <MessageItem message={m.message} reply={m.reply} image={m.image} replyImage={m.replyImage}/>);

    return (
        <div className="dialogs">
            <div className="dialogs__block">
                <ul>
                    {dialogElements}
                </ul>
            </div>
            <div className="message__block">
                    {messageElements}
                    <ReplyMessage dispatch={props.dispatch} messageAreaValue={props.messageAreaValue}/>
            </div>
        </div>
    );
}

export default Dialogs;