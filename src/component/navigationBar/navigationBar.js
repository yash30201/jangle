import React from 'react'
import './navigationBar.css'
import avatar from '../../assets/images/roboicon.jpg';

function NavigationBar(){
    return(
        <div className="navigationBar">
            <div className="navigationBlocks">
                <img src={avatar} alt="" />
            </div>
            <div className="navigationBlocks">
                <img src={avatar} alt="" />
            </div>
            <div className="navigationBlocks">
                <img src={avatar} alt="" />
            </div>
        </div>
    );
}

export default NavigationBar;