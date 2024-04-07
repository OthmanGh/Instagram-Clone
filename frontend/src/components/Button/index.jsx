import React from 'react';
import './styles.css';

const Button = ({ text, clickhandler, bgColor, textColor, custom_class }) => {
  return (
    <button className={`${bgColor} ${textColor} ${custom_class}`} onClick={clickhandler}>
      {text}
    </button>
  );
};

export default Button;
