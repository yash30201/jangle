import React, { useState, useEffect, useCallback, useContext } from 'react'
import './chatList.css'
import ChatListItem from './chatListItem/chatListItem';
import { useSelector } from 'react-redux';
import roomRequests from '../../api/roomRequests'
import userRequests from '../../api/userRequests'
import RoomProcessor from '../../dataProcessors/room';
import UserProcessor from '../../dataProcessors/user';
import Popup from 'reactjs-popup';
import SearchPopup from './searchPopup/searchPopup';
import { useDispatch } from 'react-redux';
import { socketContext } from '../../context/socket'
import Spinner from '../spinner';

function ChatList({
    selectConversation = (value) => { }
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [conversations, setConversations] = useState([]);
    const userId = useSelector(state => state.user._id);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const socket = useContext(socketContext);


    const myCallBackForGettingChoosenUser = async (roomId, isNewRoom) => {
        setOpen(false);
        if (isNewRoom) await getRooms();
        selectConversation(roomId);
    }


    const getRooms = useCallback(
        async () => {
            const response = await roomRequests.getAllMyRooms(userId);
            let rooms = [];
            for (let i = 0; i < response.rooms.length; i++) {
                let room = await RoomProcessor(response.rooms[i], userId);
                rooms.push(room);
            }
            setConversations(rooms);
            
        },
        [userId],
    )
    useEffect(() => {
        socket.on('new conversation', async () => {
            await getRooms();
        });
        socket.on('new message', async () => {
            await getRooms();
        });
    }, [socket, getRooms])


    useEffect(() => {
        async function getRoom() {
            await getRooms();

            const response2 = await userRequests.getAllUsers();
            let users = [];
            for (let i = 0; i < response2.users.length; i++) {
                if (response2.users[i]._id === userId) continue;
                let curr_user = UserProcessor(response2.users[i]);
                users.push(curr_user);
            }
            dispatch({ type: 'UPDATE_USERS', users });
            setIsLoading(false);
        }
        getRoom();
    }, [userId, dispatch, getRooms]);

    const selectedChatIndex = (index) => {
        const roomId = conversations[index].roomId;
        myCallBackForGettingChoosenUser(roomId, false);
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
                    close => <SearchPopup myCallBack={myCallBackForGettingChoosenUser} />
                }
            </Popup>

            {
                isLoading ? <Spinner /> : (<div className="chatListItems">
                    {
                        conversations.map(
                            (conversation, index) => {
                                return (
                                    <ChatListItem
                                        title={conversation.roomName}
                                        animationDelay={index + 1}
                                        roomId={conversation.roomId}
                                        key={conversation.roomId}
                                        selectedChatIndex={selectedChatIndex}
                                    />
                                );
                            }
                        )
                    }
                </div>)
            }
        </div>
    );
}


export default ChatList;

