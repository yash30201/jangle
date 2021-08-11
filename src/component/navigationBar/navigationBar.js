import React from 'react'
import './navigationBar.css'
import { useContext } from 'react';
import {socketContext} from '../../context/socket'
import {useHistory} from 'react-router-dom'

function NavigationBar() {
    const socket = useContext(socketContext);
    const history = useHistory();
    const handleLogout = () => {
        socket.emit('DISCONNECT');
        localStorage.removeItem('isLoggedIn');
        history.push('/sign-in');
    }

    return (
        <div className="navigationBar">
            <div className="navigationBlocks">
                <img src="https://img.icons8.com/color/50/000000/chat.png" alt="logo"/>
            </div>

            <div className="navigationBlocks">
                <button onClick = {handleLogout}><i className="fa fa-power-off"></i></button>
            </div>
        </div>
    );
}

export default NavigationBar;