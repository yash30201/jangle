import React from 'react'
import './chatBody.css'
import ChatList from '../chatList/chatList'
import ChatContent from '../chatContent/chatContent'

function ChatBody(){
    return (
        <div className="chatBody">
            <ChatList selectConversation = {(value) => {
                console.log('LINE10 : chatBody.js : ' + value);
            }}/>
            <ChatContent />
        </div>
    );
}

export default ChatBody;