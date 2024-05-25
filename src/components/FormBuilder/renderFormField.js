// renderFormField.js

import React from 'react';
import Blockquote from '../Common/Blockquote';
import Heading from '../Common/Heading';
import OptionCardList from '../Common/OptionCardList';
import DescriptionList from '../Common/DescriptionList';
import CounterButton from '../Common/CounterButton';
import ParagraphGrid from '../Common/ParagraphGrid';
import Paragraph from '../Common/Paragraph';
import InputField from '../Form/InputField';
import LabelField from '../Form/LabelField';
import ToggleSwitch from '../Form/ToggleSwitch';
import InputScale from '../Form/InputScale';

const renderFormField = (field, index, formData, errors, handleChange) => {
  switch (field.type) {
    case 'BLOCK_QUOTE':
      return <Blockquote key={index} field={field} />;
      case 'TOGGLE_SWITCH':
        return <ToggleSwitch key={index} field={field} value={formData[field.key]||false} onChange={handleChange}/>;
    case 'HEADING':
      return <Heading key={index} field={field} />;
    case 'OPTION_CARD_LIST':
      return <OptionCardList key={index} field={field} onChange={handleChange} formData={formData} />;
    case 'DESCRIPTION_LIST':
      return <DescriptionList key={index} formData={formData} field={field} />;
      case 'INPUT_SCALE':
        return <InputScale key={index}  field={field} value={formData[field.key] ||''} onChange={handleChange} />;
    case 'COUNTER_BUTTON':
      return <CounterButton key={index} field={field} onChange={handleChange} value={formData[field.key] || 1}/>;
    case 'PARAGRAPH':
      return field.subType === 'GRID' ? (
        <ParagraphGrid key={index} field={field} />
      ) : (
        <Paragraph key={index} field={field} />
      );
    case 'input':
      return (
        <InputField
          formData={formData}
          key={field.key}
          field={field}
          value={formData[field.key] || ''}
          error={errors[field.key]}
          handleChange={handleChange}
        />
      );
    case 'label':
      return (
        <div key={field.text} className="label-container">
          <LabelField field={field} formData={formData} className="iphone-label" />
        </div>
      );
    default:
      return null;
  }
};

export default renderFormField;
