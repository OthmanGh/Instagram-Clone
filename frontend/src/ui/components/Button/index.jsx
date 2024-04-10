import React from 'react';
import './styles.css';

const Button = ({ text, onClick, bgColor, textColor, custom_class }) => {
  return (
    <button className={`${bgColor} ${textColor} ${custom_class}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
