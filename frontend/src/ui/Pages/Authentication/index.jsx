import React, { useState } from 'react';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginFrom';
import './auth.css';

const Authentication = () => {
  const [isLogingIn, setIsLoggingIn] = useState(true);
  const [credentials, setCredentials] = useState({
    emailNumber: '',
    fullName: '',
    userName: '',
    password: '',
  });

  const handleSwitch = () => {
    setIsLoggingIn((prev) => !prev);
  };

  return (
    <div className="auth_container column flex a-center j-start">
      {!isLogingIn && <SignupForm setCredentials={setCredentials} credentials={credentials} />}
      {isLogingIn && <LoginForm setCredentials={setCredentials} credentials={credentials} />}
      <Switcher isLogingIn={isLogingIn} onSwitch={handleSwitch} />
    </div>
  );
};

const Switcher = ({ isLogingIn, onSwitch }) => {
  return (
    <div className="switch_container">
      <p>
        {isLogingIn ? "Don't have an account? " : 'Have an account? '}
        <span onClick={onSwitch}>{isLogingIn ? 'Sign up' : 'Login'}</span>
      </p>
    </div>
  );
};

export default Authentication;
