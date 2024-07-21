function SignUp() {
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
    )
}

export default SignUp;