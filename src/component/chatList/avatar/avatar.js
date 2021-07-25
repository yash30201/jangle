import React from 'react';
import './avatar.css'

function Avatar({
    avatarUrl = '',
    firstName = 'Jhon'
}) {
    return (
        <div className="avatar">
                {
                    (avatarUrl.length === 0) ? <p>{firstName[0]}</p> : <img src={avatarUrl} alt={firstName[0]} />
                }
        </div>
    );
}

export default Avatar;