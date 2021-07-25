import React, { useState } from 'react'
import './SignIn.css'
import requests from '../../../api/authRequests'

function SignIn({ history }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
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
        else console.log(response);
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

                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default SignIn;