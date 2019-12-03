import React from 'react';
import DialogItems from "./Dialog/Dialog";
import MessageItem from "./Message/Message";

const Dialogs = (props) => {

    let state = props.messagePage;
    let dialogElements = state.dialogs.map(d => <DialogItems name={d.name} id={d.id} key={d.id} image={d.image}/>);
    let messageElements = state.messages.map(m => <MessageItem message={m.message} reply={m.reply} key={m.id} image={m.image} replyImage={m.replyImage}/>);

    let replyMessageElement = React.createRef();

    let addReply = () => {
        props.addReplyActionCreator();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateOnMessageChange(text);
    }

    return (
        <div className="dialogs">
            <div className="dialogs__block">
                <ul>
                    {dialogElements}
                </ul>
            </div>
            <div className="message__block">
                {messageElements}
                <div className="replyBlock">
                    <textarea id="reply" rows="5" onChange={onMessageChange} ref={replyMessageElement}
                       placeholder='Enter you message' value={props.messageAreaValue} />
                    <button onClick={addReply}>Reply</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;