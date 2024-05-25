import React from 'react';
import LabelField from '../Form/LabelField';

const InputField = ({ formData, field, value, error, handleChange }) => {
  const handleInputChange = (e) => {
    const value = e.target ? e.target.value : e;
    if (field.keyboard === 'integer' && !/^\d*$/.test(value)) {
      return; // Only allow integers
    }
    handleChange(e, field.key);
  };

  return (
    <div>
      {field.label && <LabelField field={field} formData={formData} />}
      {field.line && field.line > 1 ? (
        <textarea
          className="max-w-sm p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          rows={field.line}
          placeholder={field.hint}
          value={value}
          onChange={handleInputChange}
        />
      ) : field.select ? (
        <select
          className="block max-w-sm w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 rounded-lg "
          value={value}
          onChange={handleInputChange}
        >
          <option>{field.placeholder || 'Select Any One'}</option>
          {field.options.map(option => (
            <option key={option.key} value={option.key}>
              {option.value}
            </option>
          ))}
        </select>
      ) : field.radioButtons ? (
        <fieldset>
          {field.options.map(option => (
            <div key={option.key} className="flex items-center mt-2">
              <input
                id={option.key}
                type="radio"
                name={field.key}
                value={option.key}
                className=" max-w-sm w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                checked={value === option.key}
                onChange={handleInputChange}
              />
              <label htmlFor={option.key} className="block ms-2 text-sm font-medium text-gray-900">
                {option.value}
              </label>
            </div>
          ))}
        </fieldset>
      ) : field.checkable ? (
        <div className="max-w-sm w-full flex items-center mt-4">
          <input
            type="checkbox"
            id={field.key}
            className="max-w-sm w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2"
            checked={value}
            onChange={()=>{handleInputChange(!value, field.key)}}
          />
          <label htmlFor={field.key} className="ms-2 text-sm font-medium text-gray-900" dangerouslySetInnerHTML={{ __html: field.text }} />
        </div>
      ): field.file ? (
        <input
          className="max-w-sm w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
          type="file"
          placeholder={field.hint}
          value={value}
          aria-describedby={field.key}
          onChange={handleInputChange}
        />
      ) : (
        <input
          className="max-w-sm w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder={field.hint}
          value={value}
          onChange={handleInputChange}
        />
      )}
      {field.description && <div className="mt-1 text-sm text-gray-700" id={field.key}>{field.description}</div>}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default InputField;
