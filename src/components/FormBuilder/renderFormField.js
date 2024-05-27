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
import PhoneNumberInput from '../Form/PhoneNumberInput';
import EmailInput from '../Form/EmailInput';
import PasswordInput from '../Form/PasswordInput';
import UsernameInput from '../Form/UsernameInput';
import NameInput from '../Form/NameInput';
import NumberInput from '../Form/NumberInput';
import ZIPCodeInput from '../Form/ZIPCodeInput';
import AnyTextInput from '../Form/AnyTextInput';
import ImageView from '../Common/ImageView';
import RoundImageView from '../Common/RoundImageView';
import BulletList from '../Common/BulletList';
import NumberList from '../Common/NumberList';
import TextView from '../Common/TextView';

const renderFormField = (field, index, formData, errors, handleChange) => {
  switch (field.type) {
    case 'BLOCK_QUOTE':
      return <Blockquote key={index} field={field} />;
    case 'TOGGLE_SWITCH':
      return <ToggleSwitch key={index} field={field} value={formData[field.key] || false} onChange={handleChange} />;
    case 'HEADING':
      return <Heading key={index} field={field} />;
    case 'IMAGE_VIEW':
      return <ImageView key={index} field={field} />;
    case 'ROUND_IMAGE_VIEW':
      return <RoundImageView key={index} field={field} />;
    case 'OPTION_CARD_LIST':
      return <OptionCardList key={index} field={field} onChange={handleChange} formData={formData} />;
    case 'DESCRIPTION_LIST':
      return <DescriptionList key={index} formData={formData} field={field} />;
    case 'BULLET_LIST':
      return <BulletList key={index} formData={formData} field={field} />;
      case 'NUMBER_LIST':
      return <NumberList key={index} formData={formData} field={field} />;
      case 'TEXT_VIEW':
        return <TextView key={index} formData={formData} field={field} />;
    case 'INPUT_SCALE':
      return <InputScale key={index} field={field} value={formData[field.key] || ''} onChange={handleChange} />;
    case 'PHONENUMBER_INPUT':
      return <PhoneNumberInput key={index} field={field} value={formData[field.key] || ''} onChange={handleChange} error={errors[field.key]} />;
    case 'EMAIL_INPUT':
      return <EmailInput key={index} field={field} value={formData[field.key] || ''} onChange={handleChange} error={errors[field.key]} />;
    case 'USERNAME_INPUT':
      return <UsernameInput key={index} field={field} value={formData[field.key] || ''} onChange={handleChange} error={errors[field.key]} />;
    case 'NAME_INPUT':
      return <NameInput key={index} field={field} value={formData[field.key] || ''} onChange={handleChange} error={errors[field.key]} />;
    case 'NUMBER_INPUT':
      return <NumberInput key={index} field={field} value={formData[field.key] || ''} onChange={handleChange} error={errors[field.key]} />;
    case 'ZIP_INPUT':
      return <ZIPCodeInput key={index} field={field} value={formData[field.key] || ''} onChange={handleChange} error={errors[field.key]} />;
    case 'TEXT_INPUT':
      return <AnyTextInput key={index} field={field} value={formData[field.key] || ''} onChange={handleChange} error={errors[field.key]} />;
    case 'PASSWORD_INPUT':
      return <PasswordInput key={index} field={field} value={formData[field.key] || ''} onChange={handleChange} error={errors[field.key]} />;
    case 'COUNTER_BUTTON':
      return <CounterButton key={index} field={field} onChange={handleChange} value={formData[field.key] || 1} />;
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
