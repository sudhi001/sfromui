import React, { useState } from 'react';
import Step from '../FormBuilder/Step';


const FormBuilder = ({ formJson }) => {
  const [currentStepId, setCurrentStepId] = useState(formJson.steps[0].meta.id);
  const [formData, setFormData] = useState({"id":formJson.meta.id});
  const [errors, setErrors] = useState({});
  const currentStep = formJson.steps.find(step => step.meta.id === currentStepId);

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
    <div>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 min-h-[64px] fixed">
        <div className="container mx-auto flex items-center justify-center py-4" id="navbar-sticky">
          <a href={formJson.meta.navbar.link} className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">{formJson.meta.navbar.title}</span>
          </a>
        </div>
      </nav>
      <main className="flex-grow mt-[64px] mb-[64px] overflow-y-auto ">
        <Step
          step={currentStep}
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          handleNext={handleNext}
          handleBack={handleBack}
          formJson={formJson}
        />
      </main>

    </div>

  );
};

export default FormBuilder;
