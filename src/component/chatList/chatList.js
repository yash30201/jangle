import React, { useState, useEffect } from 'react'
import './chatList.css'
import ChatListItem from './chatListItem/chatListItem';
import { useSelector } from 'react-redux';
import roomRequests from '../../api/roomRequests'
import RoomProcessor from '../../classes/room';

function ChatList({
    selectConversation = (value) => { }
}) {
    const [conversations, setConversations] = useState([]);
    const userId = useSelector(state => state.user._id);
    useEffect(() => {
        async function getRoom() {
            const response = await roomRequests.getAllMyRooms(userId);
            let rooms = [];
            for (let i = 0; i < response.rooms.length; i++) {
                let room = await RoomProcessor(response.rooms[i]);
                rooms.push(room);
            }
            setConversations(rooms);
        }
        getRoom();
    }, [userId]);

    const selectedChat = (index) => {
        selectConversation('Conversation with index : ' + index.toString());
    };
    return (
        <div className="chatList">
            <div className="chatListHeading">
                <h2>Chats</h2>
            </div>
            <button className="newConnection">
                <i className="fa fa-plus"></i>
                <span> New Chat</span>
            </button>
            <div className="searchBar">
                <div className="searchWrap">
                    <input type="text" placeholder="Search user" required />
                    <button className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>

            <div className="chatListItems">
                {
                    conversations.map(
                        (conversation, index) => {
                            return (
                                <ChatListItem
                                    title={conversation.roomName}
                                    animationDelay={index + 1}
                                    key={conversation.roomId}
                                    selectedChat={selectedChat}
                                />
                            );
                        }
                    )
                }
            </div>
        </div>
    );
}


export default ChatList;

