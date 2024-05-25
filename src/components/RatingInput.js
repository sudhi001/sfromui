import React from 'react';

const RatingInput = ({ value,field, onChange }) => {
  const handleChange = (newValue) => {
    if (onChange) {
      onChange(newValue,field.key);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {[1, 2, 3, 4, 5].map((index) => (
        <input
          key={index}
          type="radio"
          id={`star${index}`}
          name="rating"
          value={index}
          checked={value === index}
          onChange={() => handleChange(index)}
          className="sr-only"
        />
      ))}
      {[1, 2, 3, 4, 5].map((index) => (
        <label key={index} htmlFor={`star${index}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 text-yellow-400 ${
              value >= index ? 'fill-current' : 'stroke-current'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l-2 2m0 0l-2-2m2 2V8m0 8h4m-4 0l2-2m0 2l2 2m-2-2V8m2 8h4m-4 0l2 2m0-2l2-2m-2 2V8m2 8h4m-12 0a3 3 0 110-6 3 3 0 010 6z"
            />
          </svg>
        </label>
      ))}
    </div>
  );
};

export default RatingInput;
