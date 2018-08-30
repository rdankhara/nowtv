import React from 'react';
import './Message.css';

//use destructuring syntex
const Message = ({avatar, email, fullName, timestamp, message}) => {
    return(
        <li>
            <article className="flexContainer">
                <a className="tooltip">
                    <img src={avatar} alt="" className="avatar tip" />
                    <span className="tooltiptext">{email}</span>
                </a>
                <div className="message-container">
                    <h2 className="fullName">{fullName}</h2>
                    { timestamp && 
                        <h5 className="timestamp">{timestamp.toDateString()}</h5>
                    }
                    <p className="message">{message}</p>
                </div>
            </article>
        </li>
    );
};

export default Message;