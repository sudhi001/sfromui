import React, { useState } from 'react';
import Step from '../Step/Step';
import formJson from '../../formJson.json';

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
    <div>
      <nav class="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 min-h-[64px] fixed">
        <div class="container mx-auto flex items-center justify-center py-4" id="navbar-sticky">
          <a href={formJson.meta.navbar.link} class="flex items-center">
            <span class="self-center text-2xl font-semibold whitespace-nowrap">{formJson.meta.navbar.title}</span>
          </a>
        </div>
      </nav>
      <main class="flex-grow mt-[64px] mb-[64px] overflow-y-auto">
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
