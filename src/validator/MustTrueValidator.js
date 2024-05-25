const mustTrue = (value) => {
    if (value === undefined) {
      return true; // if undefined, consider it invalid
    }
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }
    return !value; // convert to boolean
  };
  
  export default mustTrue;
  