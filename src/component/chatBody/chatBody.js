import React, { useState } from 'react'
import './chatBody.css'
import ChatList from '../chatList/chatList'
import ChatContent from '../chatContent/chatContent'

function ChatBody(){
    const [selectedRoomId, setSelectedRoomId] = useState('');

    const selectConversation = (roomId) => {
        setSelectedRoomId(roomId);
    }

    return (
        <div className="chatBody">
            <ChatList selectConversation = {selectConversation}/>
            <ChatContent roomId = {selectedRoomId} />
        </div>
    );
}

export default ChatBody;