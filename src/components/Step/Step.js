import React from 'react';
import InputField from '../InputField/InputField'; // Update the import path
import LabelField from '../LabelField/LabelField'; // Update the import path
import { validate } from '../../utils/validation';

const Step = ({ step, formData, setFormData, errors, handleNext, handleBack, formJson }) => {
  const handleChange = (e, key) => {
    const targetValue = e.target ? e.target.value : e;
    const trimmedValue = typeof targetValue === 'string' ? targetValue.trim() : targetValue;
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
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{step.meta.title}</h1>
      <form className="max-w-lg mx-auto p-8">
        <div className="grid grid-cols-1 gap-4">
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
                  <div key={field.text} className="label-container">
                    <LabelField
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
        </div>
        <footer className="fixed bottom-0 left-0 right-0 w-full bg-white p-4">
          <div className="container mx-auto flex flex-col items-center">
            <div className="flex justify-center">
              {step.onBack && (
                <button
                  type="button"
                  className="max-w-sm flex-1 bg-gray-500 text-white py-3 px-20 rounded-md hover:bg-gray-600 mr-2"
                  onClick={handleBack}
                >
                  Previous
                </button>
              )}
              <button
                type="button"
                className="max-w-sm flex-1 bg-blue-500 text-white py-3 px-20 rounded-md hover:bg-blue-600"
                onClick={onNextClick}
              >
                Continue
              </button>
            </div>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 pt-8">
              © {formJson.meta.footer.copyRightYears} <a href={formJson.meta.footer.link} className="hover:underline">{formJson.meta.footer.name}</a>. All Rights Reserved.
            </span>
          </div>
        </footer>
      </form>
    </div>
  );
};

export default Step;
