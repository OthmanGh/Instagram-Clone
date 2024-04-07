import React from 'react';
import SignupForm from './components/SignupForm';
import './auth.css';

const Authentication = () => {
  return (
    <div className="auth_container column flex a-center j-center">
      <SignupForm />

      <div className="switch_container">
        <p>
          Have an account? <span>Log in</span>
        </p>
      </div>
    </div>
  );
};

export default Authentication;
