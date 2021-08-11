import React, { useEffect , useContext, useCallback} from 'react'
import ChatBody from '../chatBody/chatBody'
import NavigationBar from "../navigationBar/navigationBar";
import './dashboard.css'
import { useDispatch, useSelector } from 'react-redux';
import requests from '../../api/userRequests'
import {socketContext} from '../../context/socket'
import Spinner from '../spinner';

function Dashboard({ history }) {
    const currentUser = useSelector(state => state.user);
    const dispatch = useDispatch();
    const socket = useContext(socketContext);
    const emitDisconnect = useCallback(
        (e) => {
            e.preventDefault();
            socket.disconnect();
        },
        [socket],
    )

    
    useEffect(() => {
        async function checkLoggedIn() {
            var isLoggedIn = localStorage.getItem('isLoggedIn');
            if (isLoggedIn) {
                const userId = localStorage.getItem('_id');
                const response = await requests.getUserById(userId);
                dispatch({ type: 'UPDATE_USER', user: response.user });
                socket.emit('add user to list', response.user._id);
            }
            else history.push('/sign-in');
        }
        checkLoggedIn();
        window.addEventListener("beforeunload", emitDisconnect);
        return () => {
            window.removeEventListener("beforeunload", emitDisconnect);
        }
    }, [history, dispatch, socket, emitDisconnect]);


    if (currentUser) {
        return (
            <div className="dashboard">
                <NavigationBar />
                <ChatBody />
            </div>
        );
    }
    else {
        return (
            <Spinner/>
        );
    }
}

export default Dashboard;