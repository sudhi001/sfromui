import React from 'react';

const InputScale = ({ field, value, onChange }) => {
    const handleItemClick = (itemValue) => {
        onChange(itemValue, field.key);
    };

    return (
        <div>
            <h3 className="font-semibold">{field.label}</h3>
            <div className="mt-2 flex justify-between">
                {[1, 2, 3, 4, 5].map((item) => (
                    <div key={`key_${field.key}_${item}`}>
                        <input
                            className="peer hidden"
                            id={`${field.key}_${item}`}
                            type="radio"
                            checked={item === value}
                            name={`${field.key}_radio`}
                            onChange={() => handleItemClick(item)}
                        />
                        <label
                            className="flex h-12 w-16  peer-checked:bg-blue-500 peer-checked:text-white flex items-center justify-center hover:bg-blue-300 border border-gray-300 rounded-lg cursor-pointer select-none"
                            htmlFor={`${field.key}_${item}`}
                        >
                            <span className="font-semibold">{item}</span>
                        </label>
                    </div>
                ))}
            </div>
            <div className="mt-2 flex justify-between text-sm text-gray-400">
                <p className='text-gray-700'>{field.limitZero}</p>
                <p className='text-gray-700'>{field.limitFinal}</p>
            </div>
        </div>
    );
};

export default InputScale;
