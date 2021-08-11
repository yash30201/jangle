import React, { useState } from 'react'
import './SignIn.css'
import requests from '../../../api/authRequests'
import Spinner from '../../spinner';
import Popup from 'reactjs-popup';

function SignIn({ history }) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const [popShow, setPopShow] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsProcessing(true);
        var data = { phoneNumber, password };
        setPassword('');
        setPhoneNumber('');
        const response = await requests.signInUser(data);
        if (!response.error) {
            localStorage.setItem('authToken', response.authToken);
            localStorage.setItem('_id', response.userId);
            localStorage.setItem('isLoggedIn', 'true');
            history.push('/');
        }
        else{
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
        <div className="sign-in">
            <form onSubmit={handleSubmit}>
                <label htmlFor="phone-number">
                    Phone Number :
                    <input
                        type="text" id="phone-number" value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                </label>

                <label htmlFor="password">
                    Password :
                    <input
                        type="password" id="password" value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>

                <input type="submit" value="Sign in" />

                <span>Don't have an account?</span><a href="../sign-up">Sign-up</a>
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

export default SignIn;