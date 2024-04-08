import React, { useState } from 'react';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginFrom';
import './auth.css';

const Authentication = () => {
  const [isLogingIn, setIsLogingIn] = useState(false);
  const [credentials, setCredentials] = useState({
    emailNumber: '',
    fullName: '',
    userName: '',
    password: '',
  });

  return (
    <div className="auth_container column flex a-center j-start">
      {!isLogingIn && <SignupForm setCredentials={setCredentials} credentials={credentials} />}
      {isLogingIn && <LoginForm setCredentials={setCredentials} credentials={credentials} />}
      <Switcher onLogingIn={setIsLogingIn} />
    </div>
  );
};

const Switcher = ({ isLogingIn, onLogingIn }) => {
  return (
    <div className="switch_container">
      <p>
        {isLogingIn ? "Don't have an account? " : 'Have an account? '}
        <span onClick={() => onLogingIn((prev) => !prev)}>{isLogingIn ? 'Sign up' : 'Log in'}</span>
      </p>
    </div>
  );
};

export default Authentication;
