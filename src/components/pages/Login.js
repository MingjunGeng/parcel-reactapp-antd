import React, { useState } from 'react';
import axios from 'axios';

import "../../../styles/Login.less"

export const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        console.log('debug: ', e.target.value);
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const handleLogin = async (e) => {
        console.log('I am click the login button');
        e.preventDefault();
        try {
            const response = await axios.post('https://node-jwt-e444b8b27b20.herokuapp.com/api/auth/login', credentials); // Replace with your API URL
            console.log('Login successful:', response.data);
            // Handle successful login (e.g., store token, redirect)
        } catch (error) {
            console.error('Login error:', error);
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            <p> This is Login Page </p>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}
