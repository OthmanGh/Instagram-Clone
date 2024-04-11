import React from 'react';
import './styles.css';

const Button = ({ text, onClick, bgColor, textColor, custom_class, isSubmitting }) => {
  return (
    <button disabled={isSubmitting} className={`${bgColor} ${textColor} ${custom_class}`} onClick={onClick}>
      {isSubmitting ? 'Loading...' : text}
    </button>
  );
};

export default Button;
