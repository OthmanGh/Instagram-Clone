import React from 'react';
import './img.css';

function RoundedImage({ src, imgClass }) {
  return <img className={`${imgClass}`} src={src} />;
}

export default RoundedImage;
