import React from 'react';
import './styles.css';

function InputField({ type, placeholder, required, onChange }) {
  return <input type={type} className="auth-inputs" placeholder={placeholder} required={required} onChange={onChange} />;
}

export default InputField;
