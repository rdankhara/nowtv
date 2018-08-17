import React from 'react';
import './Message.css';

const Message = (props) => {
    return(
        <article className={Message}>
            <p>{props.messageId}</p>
            <p>{props.fullName}</p>
            <p>{props.avatar}</p>
        </article>
    );
};

export default Message;