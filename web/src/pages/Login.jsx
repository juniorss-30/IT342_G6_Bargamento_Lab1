import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Attempting login with:", credentials);

        // TEMPORARY: Simulate a successful login for now
        // Later, we will add: axios.post('http://localhost:8080/api/auth/login', credentials)
        if (credentials.username && credentials.password) {
            alert("Login successful (Mock)");
            navigate('/dashboard');
        } else {
            alert("Please enter both username and password");
        }
    };

    return (
        <div style={styles.container}>
            <h2>Login</h2>
            <form onSubmit={handleLogin} style={styles.form}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                    style={styles.input}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Sign In</button>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
};

// Simple inline styling to keep things neat for your lab
const styles = {
    container: { textAlign: 'center', marginTop: '100px', fontFamily: 'Arial' },
    form: { display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto' },
    input: { padding: '10px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' },
    button: { padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default Login;