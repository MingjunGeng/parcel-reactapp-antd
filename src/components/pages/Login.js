import React, { useState } from 'react';

export const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {

    }

    const handleLogin = (e) => {

    }

    return (
        <div>
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
