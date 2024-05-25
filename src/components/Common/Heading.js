import React from 'react';

const Heading = ({ field }) => {
  const Tag = `h${field.level}`;
  return (
    <Tag className={field.className} dangerouslySetInnerHTML={{ __html: field.text }} />
  );
};

export default Heading;
