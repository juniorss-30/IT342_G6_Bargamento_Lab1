import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [user, setUser] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/auth/register', user);
            alert("Registration successful! Please login.");
            navigate('/login');
        } catch (error) {
            alert(error.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <h2 style={styles.title}>Create Account</h2>
                <p style={styles.subtitle}>Sign up to get started</p>
                <form onSubmit={handleRegister} style={styles.form}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        style={styles.input}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        style={styles.input}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        style={styles.input}
                        required
                    />
                    <button type="submit" style={styles.button}>Register</button>
                </form>
                <p style={styles.loginText}>
                    Already have an account? <Link to="/login" style={styles.loginLink}>Login here</Link>
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
        background: 'linear-gradient(135deg, #42A5F5, #6C63FF)',
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
    loginText: {
        marginTop: '20px',
        fontSize: '14px',
        color: '#555',
    },
    loginLink: {
        color: '#6C63FF',
        textDecoration: 'none',
        fontWeight: 'bold',
    }
};

export default Register;
