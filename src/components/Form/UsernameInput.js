import React from 'react';

const UsernameInput = ({ field, value, onChange, error }) => {
    const handleInputChange = (e) => {
        const value = e.target ? e.target.value : e;
        const allowedCharsRegex = /^[a-zA-Z0-9_]*$/; // Allow only alphanumeric characters and underscores
        if (allowedCharsRegex.test(value) || value === "") {
            onChange(e, field.key);
        }
    };

    return (
        <div>
            <label htmlFor={field.key} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {field.label || 'Username:'}
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                </div>
                <input
                    type="text"
                    id={field.key}
                    aria-describedby={`username_${field.key}`}
                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error ? 'border-red-500 placeholder-red-700' : 'border-gray-300'
                        }`}
                    placeholder={field.placeholder}
                    value={value}
                    onChange={handleInputChange}
                    required={field.required}
                />
            </div>
            <p id={`username_${field.key}`} className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {field.hint}
            </p>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default UsernameInput;
