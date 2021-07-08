import React from 'react'
import ChatBody from '../chatBody/chatBody'
import  NavigationBar from "../navigationBar/navigationBar";
import './dashboard.css'

function Dashboard(){
    return(
        <div className="dashboard">
            <NavigationBar/>
            <ChatBody/>
        </div>
    );
}

export default Dashboard;