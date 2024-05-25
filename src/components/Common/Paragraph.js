import React from 'react';

const Paragraph = ({ field }) => {
  return (
    <p className={field.className} dangerouslySetInnerHTML={{ __html: field.text }} />
  );
};

export default Paragraph;
