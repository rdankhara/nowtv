import React from 'react';
import * as classes from './Message.css';
const Message = (props) => {
    return(
        <li>
            <article className="flexContainer">
                <a className="tooltip">
                    <img src={props.avatar} alt="" className="avatar tip" />
                    <span className="tooltiptext">{props.email}</span>
                </a>
                <div className="message-container">
                    <h2 className="fullName">{props.fullName}</h2>
                    { props.timestamp && 
                        <h5 className="timestamp">props.timestamp.toDateString()</h5>
                    }
                    <p className="message">{props.message}</p>
                </div>
            </article>
        </li>
    );
};

export default Message;