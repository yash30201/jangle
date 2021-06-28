import React from 'react'
import './chatListItem.css'
import Avatar from '../avatar/avatar'

function ChatListItem({
    firstName = "Jhon",
    lastName = "Doe",
    avatarUrl,
    animationDelay = 0,
    selectedChat = (value) => {}
}) {

    
    const selectChat = (event) => {
        // Firstly update the active tag
        let ind = 0;
        for(let i = 0 ; i < event.currentTarget.parentNode.children.length ; i++){
            event.currentTarget.parentNode.children[i].classList.remove('active');
            if(event.currentTarget.parentNode.children[i] === event.currentTarget) ind = i;
        }
        event.currentTarget.classList.add('active');
        selectedChat(ind);
    }
    const animationDelayValue = (animationDelay*50).toString()+'ms';


    return (
        <div
            className="chatListItem"
            style={{animationDelay : animationDelayValue}}
            onClick={selectChat}
        >
            <Avatar/>
            <div className="userMeta">
                <p>{firstName} {lastName}</p>
            </div>
        </div>
    );
}

export default ChatListItem;


