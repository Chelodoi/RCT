import React, { useState, useEffect } from 'react';
import { Message } from './Message';
import { Button } from './Button';
import { TextArea } from './TextArea';
import { Input } from './Input';

export const Form = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [author, setAuthor] = useState("");

    const handleChangeAuthor = (ev) => {
        setAuthor(ev.target.value);
        console.log(`Автор изменен`);
    }

    const handleChangeMessage = (ev) => {
        setMessage(ev.target.value);
        console.log(`Сообщение изменено`);
    }

    const handleClick = () => {
        setMessages([...messages, { message, author }]);
        setMessage('');
    }
    const chatbot = {
        name: "Senior Bot",
        answer: `Hello, ${author}.`
    };
    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].author !== chatbot.name) {
            const timeout = setTimeout(() => {
                setMessages([...messages, {
                    author: chatbot.name,
                    message: chatbot.answer
                },
                ]);
            }, 1500);

            return () => {
                clearTimeout(timeout);
            }
        };

    }, [messages])

    console.log(messages)
    console.log(message, author)
    return <>
        <div className="form">
            <Message messages={messages} />
            <div className="sendMessage">
                <Input change={handleChangeAuthor} author={author} />
                <TextArea change={handleChangeMessage} message={message} />
                <Button click={handleClick} />
            </div>
        </div>
    </>
}


