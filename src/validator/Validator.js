import isEmpty from './IsEmptyValidator';
import isGreaterThan from './IsGreaterThanValidator';
import isLessThan from './IsLessThanValidator';
import mustTrue from './MustTrueValidator';

const validationFunctions = {
  isEmpty,
  isGreaterThan,
  isLessThan,
  mustTrue,
};

class Validator {
  static validate(value, validations) {
    if (!Array.isArray(validations)) {
      return null;
    }
    for (const validation of validations) {
      const { expression, message } = validation;
      const [fnName, ...args] = expression.split(' ');
      const fn = validationFunctions[fnName];
      if (fn && fn(value, ...args)) {
        return message;
      }
    }

    return null;
  }
}

export default Validator;
