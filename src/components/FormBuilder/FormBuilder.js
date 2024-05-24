import React, { useState } from 'react';
import Step from '../Step/Step';
import formJson from '../../formJson.json';
import './FormBuilder.css'; // Import CSS file for styling

const FormBuilder = () => {
  const [currentStepId, setCurrentStepId] = useState(formJson.forms[0].steps[0].meta.id);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const currentStep = formJson.forms[0].steps.find(step => step.meta.id === currentStepId);

  const handleNext = (stepErrors, isFinalStep, nextStepId) => {
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
    } else {
      setErrors({});
      if (isFinalStep) {
        console.log('Form submitted:', formData);
      } else {
        setCurrentStepId(nextStepId);
      }
    }
  };

  const handleBack = () => {
    if (currentStep.onBack) {
      setCurrentStepId(currentStep.onBack.id);
    }
  };

  return (
    <div className="form-container">
      <h1>Form Builder</h1>
      <Step
        step={currentStep}
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </div>
  );
};

export default FormBuilder;
