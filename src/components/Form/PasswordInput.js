import React from 'react';

const PasswordInput = ({ field, value, onChange, error }) => {
    const handleInputChange = (e) => {
        const value = e.target.value;
        const allowedCharsRegex = /^[a-zA-Z0-9@._-]*$/; // Adjust this regex if you want to allow more characters in the password
        if (allowedCharsRegex.test(value)) {
            onChange(e, field.key);
        }
    };

    return (
        <div >
            <label htmlFor={field.key} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {field.label || 'Password:'}
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.7 2 6 4.7 6 8V11H5C3.9 11 3 11.9 3 13V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V13C21 11.9 20.1 11 19 11H18V8C18 4.7 15.3 2 12 2M12 4C14.2 4 16 5.8 16 8V11H8V8C8 5.8 9.8 4 12 4M12 14C12.6 14 13 14.4 13 15V18C13 18.6 12.6 19 12 19S11 18.6 11 18V15C11 14.4 11.4 14 12 14Z" />
                    </svg>
                </div>
                <input
                    type="password"
                    id={field.key}
                    aria-describedby={`password_${field.key}`}
                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                        error ? 'border-red-500 placeholder-red-700' : 'border-gray-300'
                    }`}
                     placeholder={field.placeholder||'........'}
                    value={value}
                    onChange={handleInputChange}
                    required={field.required}
                />
            </div>
            <p id={`password_${field.key}`} className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {field.hint}
            </p>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default PasswordInput;
