import React from 'react'
import './message.css'

function Message({
    other = false,
    text = 'Mic testing'
}) {
    return (
        <div className={`message ${other ? 'other' : 'self'}`}>
            <div className="messageText">{text}</div>
        </div>
    );
}

export default Message;