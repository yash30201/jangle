import React, { useRef, useState, useEffect, useCallback } from 'react'
import './chatContent.css'
// import Avatar from '../chatList/avatar/avatar'
import Message from './message/message';



function ChatContent({
    firstName = 'Jhon',
    lastName = 'Doe'
}) {
    const messageEndRef = useRef(null);
    const [chatMessages, setChatMessages] = useState([
        {
            key: 1,
            message: "Yo nibba!",
            other: true
        },
        {
            key: 2,
            message: "Hi nibba!",
            other: false
        },
        {
            key: 3,
            message: "Yo nibba!",
            other: true
        },
        {
            key: 4,
            message: "Hi nibba!",
            other: false
        },
        {
            key: 5,
            message: "Yo nibba!",
            other: true
        },
        {
            key: 6,
            message: "Hi nibba!",
            other: false
        },
        {
            key: 7,
            message: "Yo nibba!",
            other: true
        },
        {
            key: 8,
            message: "Hi nibba!",
            other: false
        },
        {
            key: 9,
            message: "Yo nibba!",
            other: true
        },
        {
            key: 10,
            message: "Hi nibba!",
            other: false
        },
        {
            key: 11,
            message: "Yo nibba!",
            other: true
        },
        {
            key: 12,
            message: "Hi nibba!",
            other: false
        },
        {
            key: 13,
            message: "Yo nibba!",
            other: true
        },
        {
            key: 14,
            message: "Hi nibba!",
            other: false
        },
        {
            key: 15,
            message: "Yo nibba!",
            other: true
        },
        {
            key: 16,
            message: "Hi nibba!",
            other: false
        },
    ]);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        messageEndRef.current.scrollIntoView({ behaviour: 'smooth' });
    }, [chatMessages])

    const onSendMessage = useCallback(() => {
        if (inputText.length) {
            setChatMessages(state => [...state, {
                key: state.length + 1,
                other: false,
                message: inputText
            }]);
            setInputText('');
        }
    });
    useEffect(() => {
        function handleKeyupEvent(event) {
            if (event.keyCode === 13) onSendMessage();
        }
        document.addEventListener('keyup', handleKeyupEvent);
        return () => {
            document.removeEventListener('keyup', handleKeyupEvent);
        }
    }, [onSendMessage]);


    return (
        <div className="chatContent">
            <div className="chatContentHeader">
                <div className="blocks">
                    <div className="otherUserInfo">
                        {/* <Avatar /> */}
                        <p>{`${firstName} ${lastName}`}</p>
                    </div>
                </div>

                <div className="blocks">
                    <div className="settings">
                        <button className="settingButton">
                            <i className="fa fa-cog"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="chatContentBody">
                <div className="messages">
                    {
                        chatMessages.map((message, index) => {
                            return <Message
                                other={message.other}
                                key={message.key}
                                text={message.message}
                            />;
                        })
                    }
                </div>
                <div ref={messageEndRef}></div>
            </div>

            <div className="chatContentFooter">
                <input
                    type="text"
                    placeholder="Type a message here"
                    onChange={(e) => setInputText(e.target.value)}
                    value={inputText}
                />
                <button className="sendButton" onClick={onSendMessage}>
                    <i className="fa fa-paper-plane"></i>
                </button>
            </div>
        </div>
    );
}

export default ChatContent;

