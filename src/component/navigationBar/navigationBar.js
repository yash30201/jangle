import React from 'react'
import './navigationBar.css'
import avatar from '../../assets/images/roboicon.jpg';
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
                <img src={avatar} alt="" />
            </div>

            <div className="navigationBlocks">
                <button onClick = {handleLogout}><i class="fa fa-power-off"></i></button>
            </div>
        </div>
    );
}

export default NavigationBar;