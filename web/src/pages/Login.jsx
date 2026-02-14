import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', credentials);
            if (response.status === 200) {
                alert(response.data.message);
                navigate('/dashboard');
            }
        } catch (error) {
            const errorMsg = error.response?.data?.message || "Login failed";
            alert(errorMsg);
        }
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <h2 style={styles.title}>Welcome Back</h2>
                <p style={styles.subtitle}>Sign in to continue</p>
                <form onSubmit={handleLogin} style={styles.form}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={credentials.username}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <button type="submit" style={styles.button}>Sign In</button>
                </form>
                <p style={styles.registerText}>
                    Don't have an account? <Link to="/register" style={styles.registerLink}>Register here</Link>
                </p>
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #6C63FF, #42A5F5)',
        fontFamily: 'Arial, sans-serif',
    },
    card: {
        backgroundColor: '#fff',
        padding: '40px 30px',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
        width: '350px',
        textAlign: 'center',
    },
    title: {
        marginBottom: '10px',
        fontSize: '28px',
        color: '#333',
    },
    subtitle: {
        marginBottom: '30px',
        fontSize: '14px',
        color: '#666',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    input: {
        padding: '12px 15px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        fontSize: '14px',
        transition: '0.3s',
    },
    button: {
        padding: '12px',
        borderRadius: '6px',
        border: 'none',
        backgroundColor: '#6C63FF',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        transition: '0.3s',
    },
    registerText: {
        marginTop: '20px',
        fontSize: '14px',
        color: '#555',
    },
    registerLink: {
        color: '#6C63FF',
        textDecoration: 'none',
        fontWeight: 'bold',
    }
};

export default Login;
