import React from 'react';

const BulletList = ({ formData,field }) => {
  return (
    <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
      {field.items.map((item, index) => (
          <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
};

export default BulletList;
