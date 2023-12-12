import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './auth.css'

const SignIn = ({ onSignIn }) => {
    const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('');

  const handleSignIn = () => {
    // Add your sign-in logic here
    onSignIn({ email, password });
    history.push('/');

  };

  return (
    <div className='auth-class'>
      <h1>Sign In Here</h1> 
      <br />
      <h2>WELCOME BACK!</h2>
      <label>Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button  onClick={handleSignIn}><a href="/">Sign In</a></button>
      {/* <span onClick={() => history.push('/signup')}>Dont have an account? Click here to sign</span> */}
    </div>
  );
};

export default SignIn;
