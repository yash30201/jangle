import React, { useState } from 'react'
import axios from 'axios'
import './SignIn.css'
import constant from '../../tempConstant';

function SignIn({history}) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        var data = { phoneNumber, password };
        setPassword('');
        setPhoneNumber('');
        axios.post(constant.apiUrl + "login", data).then(response => {
            if(response.data.success){
                localStorage.setItem('authToken', response.data.authToken);
                localStorage.setItem('_id', response.data.user._id);
                localStorage.setItem('isLoggedIn', 'true');
                history.push('/');
            }
            else console.log(response.data.error);
        }).catch(err => console.log(err.response.data));
        


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