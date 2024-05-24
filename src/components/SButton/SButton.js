import React from 'react';
import './SButton.css'; // Import the CSS file for styling

const SButton = ({ text, onClick,type }) => {
    const buttonClassName = type === 'next' ? 's-button next' : 's-button back';

  return (
    <button className={buttonClassName} onClick={onClick}>
      {text}
    </button>
  );
};

export default SButton;
