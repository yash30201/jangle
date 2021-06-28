import React from 'react';
import './avatar.css'

function Avatar({
    avatarUrl = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
}) {
    return (
        <div className="avatar">
            <div className="avatarImage">
                <img src={avatarUrl} alt="#" />
            </div>
        </div>
    );
}

export default Avatar;