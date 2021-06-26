import React from 'react'
import './chatListItem.css'

function ChatListItem({
    firstName = "Jhon",
    lastName = "Doe",
    avatarUrl = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
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
            <div className="avatar">
                <div className="avatarImage">
                    <img src={avatarUrl} alt="#" />
                </div>
            </div>
            <div className="userMeta">
                <p>{firstName} {lastName}</p>
            </div>
        </div>
    );
}

export default ChatListItem;