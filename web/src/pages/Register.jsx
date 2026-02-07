import React from 'react';

const Register = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Register Page</h1>
      <form>
        <input type="text" placeholder="Username" /><br/><br/>
        <input type="email" placeholder="Email" /><br/><br/>
        <input type="password" placeholder="Password" /><br/><br/>
        <button type="submit">Create Account</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
};

export default Register;