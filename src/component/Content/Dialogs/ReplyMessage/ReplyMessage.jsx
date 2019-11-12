import React from 'react';
import {addReplyActionCreator, onMessageChangeActionCreator} from "../../../../redux/dialog-reducer";

const ReplyMessage = (props) => {





    let replyMessageElement = React.createRef();

    let addReply = () => {
        props.dispatch(addReplyActionCreator());
    }

    let onMessageChange = () => {
        let text = replyMessageElement.current.value;
        props.dispatch(onMessageChangeActionCreator(text))
    }

    return (
        <div className="replyBlock">
            <textarea id="reply" rows="5" onChange={onMessageChange} ref={replyMessageElement}
                      value={props.messageAreaValue}/>
            <button onClick={addReply}>Reply</button>
        </div>
    );
}

export default ReplyMessage;