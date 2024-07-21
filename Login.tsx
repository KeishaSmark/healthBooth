import React, { useState } from 'react';
import '../styles/Login.css';
import Chat from './Chat.tsx';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            return (
                <Chat />
            )
        } else {
            // Handle errors, e.g., show an error message
            console.log('Login failed!');
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <i className="fa-solid fa-lock"></i>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />
                        Remember Me
                    </label>
                    <a href={"#"}>Forgot Password?</a>
                </div>
                <button className='btn' type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
}

export default Login;