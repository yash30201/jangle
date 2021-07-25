import React, { useEffect } from 'react'
import ChatBody from '../chatBody/chatBody'
import NavigationBar from "../navigationBar/navigationBar";
import './dashboard.css'
import { useDispatch, useSelector } from 'react-redux';
import requests from '../../api/userRequests'
function Dashboard({ history }) {
    const currentUser = useSelector(state => state.user);
    const dispatch = useDispatch();
    useEffect(() => {


        async function checkLoggedIn() {
            var isLoggedIn = localStorage.getItem('isLoggedIn');
            if (isLoggedIn) {
                const userId = localStorage.getItem('_id');
                const response = await requests.getUserById(userId);
                dispatch({ type: 'UPDATE_USER', user: response.user });
            }
            else history.push('/sign-in');
        }
        checkLoggedIn();
    }, [history, dispatch]);


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
            <div className="dashboard">
                <h1>Loading....</h1>
            </div>
        );
    }
}

export default Dashboard;