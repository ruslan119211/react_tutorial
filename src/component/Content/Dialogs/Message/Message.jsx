import React from 'react';


const MessageItem = (props) => {

    let isReply = props.reply;

    return (
        <div className="message__block__item">
            <span className="message"><img src={props.image} alt=""/>{props.message}</span>
            {isReply ? <span className="reply">{props.reply} <img src={props.replyImage} alt=""/></span> : ''}
        </div>
    );
}

export default MessageItem;