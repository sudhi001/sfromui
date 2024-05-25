import React from 'react';

const ParagraphGrid = ({ field }) => {
  const { columns, itemClassName, textArray } = field;

  // Function to render individual paragraphs
  const renderParagraphs = () => {
    return textArray.map((text, index) => (
      <p key={index} className={itemClassName}>
        {text}
      </p>
    ));
  };

  // Function to divide paragraphs into columns
  const divideIntoColumns = () => {
    const itemsPerColumn = Math.ceil(textArray.length / columns);
    const columnsArray = [];
    for (let i = 0; i < columns; i++) {
      const start = i * itemsPerColumn;
      const end = start + itemsPerColumn;
      columnsArray.push(renderParagraphs().slice(start, end));
    }
    return columnsArray;
  };

  // Render the paragraph grid
  return (
    <div className={`grid grid-cols-${columns} gap-6`}>
      {divideIntoColumns().map((column, index) => (
        <div key={index}>
          {column.map((item, idx) => (
            <React.Fragment key={idx}>{item}</React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ParagraphGrid;
