import React from 'react';

const AnyTextInput = ({ field, value, onChange, error }) => {
    const handleInputChange = (e) => {
        onChange(e, field.key);
    };

    return (
        <div>
            <label htmlFor={field.key} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {field.label || 'Text Input:'}
            </label>
            <div className="relative">
                <input
                    type="text"
                    id={field.key}
                    aria-describedby={`${field.key}`}
                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error ? 'border-red-500 placeholder-red-700' : 'border-gray-300'
                        }`}
                    placeholder={field.placeholder}
                    value={value}
                    onChange={handleInputChange}
                    required={field.required}
                />
            </div>
            <p id={field.key} className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {field.hint}
            </p>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default AnyTextInput;
