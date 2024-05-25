// Footer.js

import React from 'react';

const Footer = ({step, formJson ,handleBack,onNextClick}) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full bg-white p-2 border-t border-gray-200">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-center">
          {step.onBack && (
            <button
              type="button"
              className="max-w-sm flex-1 bg-gray-500 text-white py-3 px-12 rounded-md hover:bg-gray-600 mr-2"
              onClick={handleBack}
            >
              Previous
            </button>
          )}
          <button
            type="button"
            className="max-w-sm flex-1 bg-blue-500 text-white py-3 px-12 rounded-md hover:bg-blue-600"
            onClick={onNextClick}
          >
            Continue
          </button>
        </div>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 pt-2">
          © {formJson.meta.footer.copyRightYears}{' '}
          <a href={formJson.meta.footer.link} className="hover:underline">
            {formJson.meta.footer.name}
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
