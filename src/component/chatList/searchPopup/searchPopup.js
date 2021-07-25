import React, {useEffect, useState } from 'react'
import './searchPopup.css'
import {useSelector} from 'react-redux';

function SearchPopup({myCallBack = () => {}}) {
    const userList = useSelector(state => state.users);
    const [searchValue, setSearchValue] = useState('');

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
                                    <div className="user-card" key = {user.userId} onClick = {() => {myCallBack(user.userId)}}>
                                        {user.firstName} {user.lastName}
                                    </div>
                                    // <button onClick = {() => {
                                    //     myCallBack(user.userId);
                                    //     console.log('Clicked');
                                    // }} className='user-card' key = {user.userId}>
                                    //     {user.firstName} {user.lastName}
                                    // </button>
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