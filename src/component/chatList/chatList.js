import React from 'react'
import './chatList.css'
import ChatListItem from '../chatListItem/chatListItem';

function ChatList(){
    let exampleList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    return(
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
                    <input type="text" placeholder="Search user" required/>
                    <button className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>

            <div className="chatListItems">
                {
                    exampleList.map(
                        (item, index) => {
                            return(
                                <ChatListItem 
                                    animationDelay={index+1}
                                    key={index.toString()}
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

