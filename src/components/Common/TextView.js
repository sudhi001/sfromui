import React from 'react';

const TextView = ({ field }) => {
  return (
    <p class={`text-${field.size||'sm'} ${field.font ||'font-thin'} text-${field.color||'gray-900'}`} dangerouslySetInnerHTML={{ __html: field.text }}></p>
  );
};

export default TextView;
