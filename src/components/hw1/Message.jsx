import React from 'react';

export const Message = (props) => {

    return <div className='messages'> 
    <h1>Это компонент Message</h1>
    <p className='message'>{props.txt}</p>
    </div>
}
