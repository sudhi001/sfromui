import React from 'react';

const DescriptionList = ({ formData,field }) => {
  return (
    <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
      {field.items.map((item, index) => (
        <div key={index} className={`flex flex-col ${index === 0 ? 'pb-3' : index === field.items.length - 1 ? 'pt-3' : 'py-3'}`}>
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{item.title}</dt>
          <dd className="text-lg font-semibold">{item.content.replace(/\${(.*?)}/g, (match, key) => formData[key] || match)}</dd>
        </div>
      ))}
    </dl>
  );
};

export default DescriptionList;
