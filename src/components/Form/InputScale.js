import React from 'react';

const InputScale = ({ field, value, onChange, formData }) => {
    const handleItemClick = (itemValue) => {
        onChange(itemValue, field.key);
    };

    return (
        <div >
            <h3 className="textfont-semibold">{field.label}</h3>
            <div className="mt-2 flex justify-between">
                {[1, 2, 3, 4, 5].map((item) => (
                    <div key={`key_${field.key}_${item}`}>
                        <input
                            className="peer hidden"
                            id={`${field.key}_${item}`}
                            type="radio"
                            checked={item === (formData[field.key] || '')}
                            name="radio"
                            onChange={() => handleItemClick(item)}
                        />
                        <label
                            className="peer-checked:bg-blue-500 peer-checked:text-white flex hover:bg-blue-300 border  border-gray-300 rounded-lg  px-8  py-4 cursor-pointer select-none"
                            htmlFor={`${field.key}_${item}`}
                        >
                                <span className="mt-2 font-semibold ">{item}</span>
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
