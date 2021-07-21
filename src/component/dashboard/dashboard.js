import React, {useEffect} from 'react'
import ChatBody from '../chatBody/chatBody'
import  NavigationBar from "../navigationBar/navigationBar";
import './dashboard.css'

function Dashboard(){
    useEffect(() => {
        var isLoggedIn = localStorage.getItem('isLoggedIn');
        if(isLoggedIn) {
            console.log(localStorage.getItem('_id'));
        }
        else console.log('No user is logged in');
    }, [])

    return(
        <div className="dashboard">
            <NavigationBar/>
            <ChatBody/>
        </div>
    );
}

export default Dashboard;