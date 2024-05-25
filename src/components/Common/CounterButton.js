import React from 'react';

const DecrementButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
  >
    <svg
      className="w-3 h-3 text-gray-900 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 2"
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
    </svg>
  </button>
);

const IncrementButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
  >
    <svg
      className="w-3 h-3 text-gray-900 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
    </svg>
  </button>
);
const useQuantity = (initialValue) => {
  const [quantity, setQuantity] = React.useState(initialValue);

  const increment = () => setQuantity(prevQuantity => prevQuantity + 1);
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return { quantity, increment, decrement };
};
const CounterButton = ({ field, value, onChange }) => {
  const { quantity, increment, decrement } = useQuantity(value);

  // Handle change and call onChange prop
  const handleChange = () => {
    onChange(quantity, field.key);
  };
  return (
    <div className="max-w-xs mx-auto">
      <label htmlFor={field.key} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {field.label}
      </label>
      <div className="relative flex items-center max-w-[8rem]">
        <DecrementButton onClick={decrement} />
        <input
          type="text"
          id={field.key}
          value={quantity}
          onChange={handleChange}
          className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="0"
          required
        />
        <IncrementButton onClick={increment} />
      </div>
      <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {field.placeholder}
      </p>
    </div>
  );
};

export default CounterButton;
