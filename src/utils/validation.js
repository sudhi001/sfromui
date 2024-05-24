const validationFunctions = {
  'isEmpty': value => {
    if (typeof value === 'string') {
      return value.trim() === '';
    }
    return true; // consider undefined, null, or non-string values as empty
  },
  'isLessThan': (value, limit) => parseFloat(value) < parseFloat(limit),
};

export const validate = (value, validations) => {
  for (const validation of validations) {
    const { expression, message } = validation;
    const [fnName, ...args] = expression.split(' ');
    const fn = validationFunctions[fnName];
    if (fn && fn(value, ...args)) {
      return message;
    }
  }
  return null;
};
