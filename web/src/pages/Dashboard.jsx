import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // In a real app, you'd clear the token from localStorage here
        console.log("Logging out...");
        alert("Logged out successfully");
        navigate('/login'); // Send them back to login
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>User Dashboard</h1>
                <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
            </header>
            <main style={styles.main}>
                <div style={styles.card}>
                    <h3>Welcome back!</h3>
                    <p>This is your protected profile information.</p>
                </div>
            </main>
        </div>
    );
};

const styles = {
    container: { fontFamily: 'Arial', padding: '20px' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', paddingBottom: '10px' },
    logoutBtn: { backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' },
    main: { marginTop: '20px' },
    card: { padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #eee' }
};

export default Dashboard;