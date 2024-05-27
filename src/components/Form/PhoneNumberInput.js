import React from 'react';

const PhoneNumberInput = ({ field, value, onChange, error }) => {
    const handleInputChange = (e) => {
        const value = e.target ? e.target.value : e;
        if (!/^\d*$/.test(value)) {
            return; // Only allow integers
        }
        onChange(e, field.key);
    };
    return (
        <div className="max-w-sm">
            <label htmlFor={field.key} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {field.label || 'Phone number:'}
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                    </svg>
                </div>
                <input
                    type="text"
                    id={field.key}
                    aria-describedby={`ph_${field.key}`}
                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error ? 'border-red-500 placeholder-red-700' : 'border-gray-300'
                        }`} pattern={field.pattern || '[0-9]{3}-[0-9]{3}-[0-9]{4}'}
                    placeholder={field.placeholder}
                    value={value}
                    onChange={handleInputChange}
                    required={field.required}
                    inputMode="tel"
                />
            </div>
            <p id={`ph_${field.key}`} className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {field.hint}
            </p>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default PhoneNumberInput;
