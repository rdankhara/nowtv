import React from 'react';
import './Message.css';
import defaultAvatar from './defaultAvatar.png';
const Message = (props) => {
    return(
        <li>
            <article className="flex-container">
            
                {/* <div class="tooltip">
                    <span class="tooltiptext">{props.email}</span>        
                </div> */}
                <div className="avatar-container">
                    <a className="tooltip">
                        <img src={props.avatar} alt="" className="avatar tip" />
                        <span className="tooltiptext">{props.email}</span>
                    </a>
                    <p className="fullName">{props.fullName}</p>
                </div>
                <div className="message-container">
                    <p className="message">{props.message}</p>
                    <p className="timestamp">{props.timestamp.toDateString()}</p>
                </div>
            </article>
        </li>
    );
};

export default Message;