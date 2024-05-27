import React from 'react';

const ZIPCodeInput = ({ field, value, onChange, error }) => {
    const handleInputChange = (e) => {
        const value = e.target ? e.target.value : e;
        const allowedCharsRegex = /^[0-9]*$/; // Allow only numbers
        if (allowedCharsRegex.test(value) || value === "") {
            onChange(e, field.key);
        }
    };

    return (
        <div>
            <label htmlFor={field.key} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {field.label || 'ZIP Code:'}
            </label>
            <div className="relative">
                <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                </div>
                <input
                    type="text"
                    id={field.key}
                    aria-describedby={`zip_${field.key}`}
                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error ? 'border-red-500 placeholder-red-700' : 'border-gray-300'
                        }`}
                    placeholder={field.placeholder}
                    pattern={field.pattern ||'^{5}(-{4})?$'}
                    value={value}
                    onChange={handleInputChange}
                    required={field.required}
                />
            </div>
            <p id={`zip_${field.key}`} className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {field.hint}
            </p>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default ZIPCodeInput;
