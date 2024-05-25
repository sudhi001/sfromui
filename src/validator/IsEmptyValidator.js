const isEmpty = (value) => {
    if (typeof value === 'string') {
      return value.trim() === '';
    }
    return true; // consider undefined, null, or non-string values as empty
  };
  
  export default isEmpty;
  