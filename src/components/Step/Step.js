import React from 'react';
import InputField from '../InputField/InputField'; // Update the import path
import LabelField from '../LabelField/LabelField'; // Update the import path
import { validate } from '../../utils/validation';
import SButton from '../SButton/SButton'; // Update the import path
import './Step.css'; // Import CSS file for styling

const Step = ({ step, formData, setFormData, errors, handleNext, handleBack }) => {
  const handleChange = (e, key) => {
    const { value } = e.target;
    const trimmedValue = value.trim(); // Trim the input value
    setFormData({ ...formData, [key]: trimmedValue });
  };

  const onNextClick = () => {
    const stepErrors = {};
    step.form.forEach(field => {
      if (field.type === 'input') {
        const error = validate(formData[field.key], field.validations);
        if (error) {
          stepErrors[field.key] = error;
        }
      }
    });

    handleNext(stepErrors, step.onNext.action === 'finish', step.onNext.id || step.onNext.action);
  };

  return (
    <div className="step-container">
      <h3>{step.meta.title}</h3>
      <form>
        {step.form.map(field => {
          switch (field.type) {
            case 'input':
              return (
                <InputField
                  formData={formData}
                  key={field.key}
                  field={field}
                  value={formData[field.key] || ''}
                  error={errors[field.key]}
                  handleChange={handleChange}
                />
              );
            case 'label':
              return (
                <div className="label-container"> 
                <LabelField
                  key={field.text}
                  field={field}
                  formData={formData}
                  className="iphone-label" // Apply CSS class for styling
                />
              </div>
              );
            default:
              return null;
          }
        })}
      </form>
      <div className="button-container">
        {step.onBack && <SButton text="Back" onClick={handleBack} type="back" />}
        <SButton text="Next" onClick={onNextClick} type="next" />
      </div>
    </div>
  );
};

export default Step;
