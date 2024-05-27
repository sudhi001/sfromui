import React from 'react';

const EmailInput = ({field,value,onChange,error}) => {
    const handleInputChange = (e) => {
        const value = e.target ? e.target.value : e;
        const allowedCharsRegex = /^[a-zA-Z0-9@._-]*$/; 
        if (allowedCharsRegex.test(value)) {
            onChange(e, field.key);
        }
      };
    return (
        <div className="max-w-sm">
            <label htmlFor={field.key} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {field.label || 'Email address:'}
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    </svg>
                </div>
                <input 
                    type="email" 
                    id={field.key} 
                    aria-describedby={ `email_${field.key}`}
                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                        error ? 'border-red-500 placeholder-red-700' : 'border-gray-300'
                    }`}
                    pattern= {field.pattern || '[0-9]{3}-[0-9]{3}-[0-9]{4}'} 
                    placeholder={field.placeholder} 
                    value={value}
                    onChange={handleInputChange}
                    required={field.required} 
                   inputMode="email"
                />
            </div>
            <p id={`email_${field.key}`} className="mt-2 text-sm text-gray-500 dark:text-gray-400">
               {field.hint}
            </p>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default EmailInput;
