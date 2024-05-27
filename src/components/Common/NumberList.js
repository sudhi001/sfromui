import React from 'react';

const NumberList = ({ formData,field }) => {
  return (
    <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
      {field.items.map((item, index) => (
          <li key={index}>{item.title}</li>
      ))}
    </ol>
  );
};

export default NumberList;
