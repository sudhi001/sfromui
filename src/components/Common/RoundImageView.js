import React from 'react';

const RoundImageView = ({ field }) => {
  return (
    <img className={`${field.className} rounded-full w-${field.size} h-${field.size}`} src={field.src} alt={field.placeholder}/>

  );
};

export default RoundImageView;
