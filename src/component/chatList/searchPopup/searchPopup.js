import React, { useState } from 'react'
import './searchPopup.css'
import {useSelector} from 'react-redux';
import roomRequests from '../../../api/roomRequests'

function SearchPopup({myCallBack = () => {}}) {
    const userList = useSelector(state => state.users);
    const [searchValue, setSearchValue] = useState('');

    const onSelected = async (event) => {
        const userId = event.target.id;
        const userIds = [userId];
        const response = await roomRequests.initiateRoom(userIds);
        const roomId = response.roomId;
        console.log(roomId);
        console.log(response.isNewRoom);
        myCallBack(roomId);
    }

    return (
        <div className="search-popup">
            <div className="searchWrap">
                <input type="text" placeholder="Search user" value = {searchValue} required onChange = {(event) => {
                    setSearchValue(event.target.value);
                }}/>
                <button className="searchButton" >
                    <i className="fa fa-search"></i>
                </button>
            </div>

            <div className="container">
                <div className="results">
                    {
                        userList.map(
                            (user, index) => {
                                return (
                                    <div className="user-card" key = {user.userId} id={user.userId} onClick = {onSelected}>
                                        {user.firstName} {user.lastName}
                                    </div>
                                );
                            }
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default SearchPopup;