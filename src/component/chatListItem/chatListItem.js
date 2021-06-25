import React from 'react'
import './chatListItem.css'

function ChatListItem({
    firstName = "Jhon HisasdmaskfsanfkjasfHisasdmaskfsanfkjasfHisasdmaskfsanfkjasf",
    lastName = "Doe",
    avatarUrl = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    animationDelay = 0,
}) {

    const selectChat = (event) => {
        // for(let index = 0 ; index < e.currentTarget.parentNode.children.length)
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