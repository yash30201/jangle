import React, { useState } from 'react'
import requests from '../../../api/authRequests';
import Spinner from '../../spinner';
import Popup from 'reactjs-popup';

import './SignUp.css'

function SignUp({ history }) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const [popShow, setPopShow] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const passwordQualifications = [
        "For password", "length >= 8", "Should have at least 1 lowercase english alphabet", "Should have at least 1 uppercase english alphabet", "Should have at least 1 special character", "Should have at least 1 digit"
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password) === false) {
            setModalContent(passwordQualifications);
            setPopShow(true);
            setPassword('');
            return;
        }
        setIsProcessing(true);
        var data = { firstName, lastName, phoneNumber, password };
        setFirstName('');
        setLastName('');
        setPassword('');
        setPhoneNumber('');
        const response = await requests.signUpUser(data);
        if (!response.error) {
            // Sign Up successfull so now login
            history.push('/sign-in');
        }
        else {
            var temp = [];
            if(response.error.error[0].msg != null){
                for (let i = 0; i < response.error.error.length; i++) {
                    temp.push(response.error.error[i].msg + ' : ' + response.error.error[i].param);
                }
            }
            else temp.push(response.error.error);
            setModalContent(temp);
            setPopShow(true);
            setIsProcessing(false);
        }
    }
    return (
        <div className="sign-up">
            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name">
                    First name :
                    <input
                        className="signInInput"
                        type="text" id="first-name" value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </label>

                <label htmlFor="last-name">
                    Last name :
                    <input
                        className="signInInput"
                        type="text" id="last-name" value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </label>

                <label htmlFor="phone-number">
                    Phone Number :
                    <input
                        className="signInInput"
                        type="text" id="phone-number" value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                </label>

                <label htmlFor="password">
                    Password :
                    <input
                        className="signInInput"
                        type="password" id="password" value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>

                <input className="signInInput" type="submit" value="Sign up" />
                <div className="inputspacer"></div>
                <span>Already have an account ? </span><a href="../sign-in">Sign-in</a>
            </form>
            <Spinner isVisible={isProcessing} />
            <Popup open={popShow} closeOnDocumentClick onClose={() => setPopShow(false)} position='left top'>
                <div className={`modal ${popShow ? 'modal-visible' : ''}`}>
                    <ul>
                        {
                            modalContent.map((value) => {
                                return (<li>{value}</li>);
                            })
                        }
                    </ul>

                    <button className="close" onClick={() => setPopShow(false)}>
                        close
                    </button>
                </div>
            </Popup>
        </div>
    );
}



export default SignUp;