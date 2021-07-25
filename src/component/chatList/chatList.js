import React, { useState, useEffect } from 'react'
import './chatList.css'
import ChatListItem from './chatListItem/chatListItem';
import { useSelector } from 'react-redux';
import roomRequests from '../../api/roomRequests'
import userRequests from '../../api/userRequests'
import RoomProcessor from '../../classes/room';
import UserProcessor from '../../classes/user';
import Popup from 'reactjs-popup';
import SearchPopup from './searchPopup/searchPopup';
import {useDispatch} from 'react-redux';

function ChatList({
    selectConversation = (value) => { }
}) {
    const [conversations, setConversations] = useState([]);
    const userId = useSelector(state => state.user._id);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();


    const myCallBackForGettingChoosenUser = (userId) => {
        console.log(userId);
        setOpen(false);
    }

    useEffect(() => {
        async function getRoom() {
            const response = await roomRequests.getAllMyRooms(userId);
            let rooms = [];
            for (let i = 0; i < response.rooms.length; i++) {
                let room = await RoomProcessor(response.rooms[i]);
                rooms.push(room);
            }
            setConversations(rooms);


            const response2 = await userRequests.getAllUsers();
            let users = [];
            for(let i = 0 ; i < response2.users.length ; i++){
                if(response2.users[i]._id === userId) continue;
                let curr_user = UserProcessor(response2.users[i]);
                users.push(curr_user);
            }
            dispatch({type : 'UPDATE_USERS', users});
        }
        getRoom();
    }, [userId, dispatch]);

    const selectedChat = (index) => {
        selectConversation('Conversation with index : ' + index.toString());
    };
    return (
        <div className="chatList">
            <div className="chatListHeading">
                <h2>Chats</h2>
            </div>
            <button className="newConnection" onClick={() => {
                setOpen(true);
            }}>
                <i className="fa fa-plus"></i>
                <span> New Chat</span>
            </button>
            <Popup
                open={open}
                closeOnDocumentClick
                onClose={() => setOpen(false)}
            >
                {
                    close => <SearchPopup myCallBack = {myCallBackForGettingChoosenUser} />
                }
            </Popup>

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

