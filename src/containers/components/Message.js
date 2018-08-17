import React from 'react';
import './Message.css';

const Message = (props) => {
    return(
        <li>
            <article className="Message">
            
                <div class="tooltip">
                    <span class="tooltiptext">{props.email}</span>        
                </div>
                <img src={props.avatar} />
                <p>{props.messageId}</p>
                <p>{props.fullName}</p>
                <p>{props.timestamp.toLocaleDateString()}</p>
                <p>{props.userId}</p>
                <p>{props.email}</p>                
            </article>
        </li>
    );
};

export default Message;