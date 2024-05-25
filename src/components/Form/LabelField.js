import React from 'react';

const LabelField = ({ field, formData, className }) => {
  // Replace placeholders with values from formData
  const text = (field.text || field.label).replace(/\${(.*?)}/g, (match, key) => formData[key] || match);
  return  <label htmlFor="large-input" id={field.key} className="block mb-2 text-sm font-medium text-gray-900" > {text}</label>;
};

export default LabelField;
