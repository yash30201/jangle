import React, { useState } from 'react'
import './SignUp.css'

function SignUp() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        var data = {firstName, lastName ,phoneNumber, password};
        console.log(data);
        setFirstName('');
        setLastName('');
        setPassword('');
        setPhoneNumber('');
    }
    return (
        <div className="sign-up">
            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name">
                    First name :
                    <input
                        type="text" id="first-name" value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </label>

                <label htmlFor="last-name">
                    Last name :
                    <input
                        type="text" id="last-name" value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </label>

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



export default SignUp;