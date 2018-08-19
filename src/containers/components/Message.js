import React from 'react';
import './Message.css';
import defaultAvatar from './defaultAvatar.png';
const Message = (props) => {
    return(
        <li>
            <article className="flex-container">
                <div className="avatar-container">
                    <a className="tooltip">
                        <img src={props.avatar} alt="" className="avatar tip" />
                        <span className="tooltiptext">{props.email}</span>
                    </a>
                </div>
                <div className="message-container">
                    <h2 className="fullName">{props.fullName}</h2>
                    <h5 className="timestamp">{props.timestamp.toDateString()}</h5>
                    <p className="message">{props.message}</p>
                </div>
            </article>
        </li>
    );
};

export default Message;