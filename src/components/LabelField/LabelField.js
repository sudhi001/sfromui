import React from 'react';

const LabelField = ({ field, formData, className }) => {
  // Replace placeholders with values from formData
  const text = (field.text || field.label).replace(/\${(.*?)}/g, (match, key) => formData[key] || match);
  return  <label for="large-input" id={field.key} class="block mb-2 text-sm font-medium text-gray-900" > {text}</label>;
};

export default LabelField;
