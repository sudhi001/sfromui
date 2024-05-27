import React from 'react';

const ImageView = ({ field }) => {
  return (
    <img className={`${field.className} h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800`} src={field.src} alt={field.placeholder}/>

  );
};

export default ImageView;
