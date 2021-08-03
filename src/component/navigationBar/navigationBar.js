import React from 'react'
import './navigationBar.css'
import avatar from '../../assets/images/roboicon.jpg';
import { useContext } from 'react';
import {socketContext} from '../../context/socket'

function NavigationBar({history}) {
    const socket = useContext(socketContext);
    const handleLogout = () => {
        socket.emit('DISCONNECT');
        localStorage.removeItem('isLoggedIn');
        // history.push('/sign-in');

    }

    return (
        <div className="navigationBar">
            <div className="navigationBlocks">
                <img src={avatar} alt="" />
            </div>

            <div className="navigationBlocks">
                <button onClick = {handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default NavigationBar;