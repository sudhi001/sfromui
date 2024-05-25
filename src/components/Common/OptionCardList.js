import React from 'react';

// CardInput component
const CardInput = ({ id, checked, onChange }) => (
  <input
    className="peer hidden"
    id={id}
    type="radio"
    name="radio"
    checked={checked}
    onChange={onChange}
  />
);

// CardLabel component
const CardLabel = ({ label, description }) => (
  <div className="ml-5">
    <span className="mt-2 font-semibold">{label}</span>
    <p className="text-slate-500 text-sm leading-6">{description}</p>
  </div>
);

// OptionCard component
const OptionCard = ({ id, checked, onChange, label, description }) => (
  <div className="flex w-full">
    <CardInput id={id} checked={checked} onChange={onChange} />
    <label
      className="peer-checked:border-2 peer-checked:border-blue-400 peer-checked:bg-blue-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 pr-20 mt-2"
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
        : `grid gap-2 lg:grid-cols-${field.options.length}`
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
