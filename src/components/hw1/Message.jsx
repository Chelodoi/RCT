import React from 'react';

export const Message = (props) => {
    return <div className='messages'> 
        <ul className="messageList">
            {props.messages.map(message=>
                <li className="message">
                    <p className="message__author">{message.author}</p>
                    <p className="message__text">{message.message}</p>
                    <hr />
                </li>
            )}
        </ul>
    </div>
}
