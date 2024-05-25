// Step.js

import React from 'react';
import renderFormField from './renderFormField'; // Import the new file
import Validator from '../../validator/Validator';
import Footer from '../Common/Footer';

const Step = ({ step, formData, setFormData, errors, handleNext, handleBack, formJson }) => {
  // Event handler for input change
  const handleChange = (e, key) => {
    const targetValue = e.target ? e.target.value : e;
    const trimmedValue = typeof targetValue === 'string' ? targetValue.trim() : targetValue;
    console.log(trimmedValue);
    setFormData({ ...formData, [key]: trimmedValue });
  };

  // Event handler for "Continue" button click
  const onNextClick = () => {
    const stepErrors = {};
    step.form.forEach(field => {
      if (field.type === 'input') {
        const error = Validator.validate(formData[field.key], field.validations);
        if (error) {
          stepErrors[field.key] = error;
        }
      }
    });

    handleNext(stepErrors, step.onNext.action === 'finish', step.onNext.id || step.onNext.action);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{step.meta.title}</h1>
      <form className="max-w-lg mx-auto p-8">
        <div className="grid grid-cols-1 gap-4">
          {step.form.map((field, index) =>
            renderFormField(field, index, formData, errors, handleChange)
          )}
        </div>
        <Footer formJson={formJson} step={step}  handleBack={handleBack} onNextClick={onNextClick}/>
      </form>
    </div>
  );
};

export default Step;
