import React from 'react';

// CardInput component
const CardInput = ({ id, checked, onChange }) => (
  <input
    className="peer hidden"
    id={id}
    type="radio"
    name={`${id}_radio`} // Ensure unique names for radio buttons
    checked={checked}
    onChange={onChange}
  />
);

// CardLabel component
const CardLabel = ({ label, description }) => (
  <div className="ml-2">
    <span className="font-semibold">{label}</span>
    <p className="text-slate-500 text-sm overflow-hidden max-h-24 whitespace-normal break-words">{description}</p>
  </div>
);



// OptionCard component
const OptionCard = ({ id, checked, onChange, label, description }) => (
  <div className="flex w-full">
    <CardInput id={id} checked={checked} onChange={onChange} />
    <label
      className="peer-checked:border-2 peer-checked:border-blue-400 peer-checked:bg-blue-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 pr-10 md:pr-5 md:p-2 mt-2 w-full" // Ensure the label takes full width
      htmlFor={id}
    >
      <CardLabel label={label} description={description} />
    </label>
  </div>
);

// OptionCardList component
const OptionCardList = ({ field, formData, onChange }) => (
  <div className="text-gray-700">
    <h3 className="font-semibold">{field.label}</h3>
    <div className={`${
      field.gravity === "VERTICAL"
        ? 'my-auto mx-auto flex-col justify-center md:justify-start'
        : `grid gap-2 grid-cols-${field.options.length}`
    }`}>
      {field.options.map((fieldItem) => (
        <OptionCard
          key={fieldItem.key}
          id={fieldItem.key}
          label={fieldItem.label}
          description={fieldItem.description}
          checked={fieldItem.value === (formData[field.key] || '')}
          onChange={() => onChange(fieldItem.value, field.key)}
        />
      ))}
    </div>
  </div>
);

export default OptionCardList;
