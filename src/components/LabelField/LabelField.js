import React from 'react';

const LabelField = ({ field, formData, className }) => {
  // Replace placeholders with values from formData
  const text = (field.text || field.label).replace(/\${(.*?)}/g, (match, key) => formData[key] || match);
  const style = {
    width: field.width || 'auto' ,// Set width to 100% if specified, otherwise use 'auto'
    fontFamily: "'Helvetica Neue', sans-serif", // Use iPhone-like font family
    fontSize: '16px' // Adjust font size to match iPhone font size
  };

  return <label style={style} className={className}>{text}</label>;
};

export default LabelField;
