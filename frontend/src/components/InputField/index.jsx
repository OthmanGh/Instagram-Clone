import React from 'react';
import './styles.css';

function InputField({ type, placeholder, required }) {
  return <input type={type} className="auth-inputs" placeholder={placeholder} required={required} />;
}

export default InputField;
