import React from 'react';
import './InputField.css'; // Import CSS file for styling
import LabelField from '../LabelField/LabelField'; 

const InputField = ({formData, field, value, error, handleChange }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    if (field.keyoard === 'integer') {
      // Only allow integers
      if (/^\d*$/.test(value)) {
        handleChange(e, field.key);
      }
    } else {
      handleChange(e, field.key);
    }
  };

  return (
    <div className="input-field-container"> {/* Apply CSS class for styling */}
       <LabelField field={field} formData={formData} /> {/* Use the LabelField component */}
   
      <input
        className="iphone-input" 
        type="text"
        placeholder={field.hint}
        value={value}
        onChange={handleInputChange}
      />
      {error && <span className="error-message">{error}</span>} {/* Apply CSS class for styling */}
    </div>
  );
};

export default InputField;
