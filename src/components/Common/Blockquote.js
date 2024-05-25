const Blockquote = ({ field }) => {
    return (
      <blockquote className={`text-lg italic font-semibold text-gray-900 dark:text-white ${field.className}`} >
        <p>{field.text}</p>
      </blockquote>
    );
  }
  
  export default Blockquote;
  