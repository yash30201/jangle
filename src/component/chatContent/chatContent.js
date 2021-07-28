import React, { useRef, useState, useEffect, useCallback } from 'react'
import './chatContent.css'
// import Avatar from '../chatList/avatar/avatar'
import roomRequests from '../../api/roomRequests';
import Message from './message/message';
import DetailedRoomProcessor from '../../classes/detailedRoom';
import MessageProcessor from '../../classes/message';
import { useSelector } from 'react-redux';

function LoadingChat() {
    return (
        <div className="loading-chat">
            <h1>Select a chat...</h1>
        </div>
    );
}

function RealChat({room}){
    const messageEndRef = useRef(null);
    const userId = useSelector(state => state.user._id);
    const [chatMessages, setChatMessages] = useState([]);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        async function getMessages(roomId, userId){
            const response = await roomRequests.getMessagesByRoomId(roomId);
            let tempMessages = [];
            for(let i = 0 ; i < response.messages.length ; i++){
                tempMessages.push(MessageProcessor(response.messages[i], userId));
            }
            setChatMessages(tempMessages);
        }
        getMessages(room.roomId, userId);
    }, [room, userId]);

    useEffect(() => {
        messageEndRef.current.scrollIntoView({ behaviour: 'smooth' });
    }, [chatMessages]);

    const onSendMessage = useCallback(async () => {
        if (inputText.length > 0) {
            const response = await roomRequests.postMessage(inputText, room.roomId);
            const newMessage = MessageProcessor(response.message, userId);
            setChatMessages(state => [...state, newMessage]);
            setInputText('');
        }
    }, [inputText, room, userId]);



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
                        <p>{room.roomName}</p>
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
                                key={message.messageId}
                                text={message.text}
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

function ChatContent({roomId}) {

    const [room, setRoom] = useState(null);

    useEffect(() => {
        async function fetchUser(roomId) {
            if(roomId){
                const response = await roomRequests.getRoomByRoomId(roomId);
                if (response.error) return;
                const data = DetailedRoomProcessor(response.room);
                setRoom(data);
            }
        }
        fetchUser(roomId);
    }, [roomId])


    if (!room) return <LoadingChat />;
    else return <RealChat room={room} />
}


export default ChatContent;

