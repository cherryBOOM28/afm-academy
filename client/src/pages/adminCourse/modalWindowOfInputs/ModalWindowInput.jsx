import React, { useState } from 'react';
import './modalWindowInput.scss'
const Modal = ({ onClose, inputs, onSubmit }) => {
  const [values, setValues] = useState({});

  const handleChange = (name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(values);
    setValues({});
    onClose();
  };

  return (
    <div className="modal">
        <a className='modal-title'>Введите данные для компонента</a>
        <div className="modal-content">
            {inputs.map((input) => (
                <div key={input.name}>
                    <label>{input.label}</label>
                    <input
                        type={input.type}
                        value={values[input.name] || ''}
                        onChange={(e) => handleChange(input.name, e.target.value)}
                    />
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  );
};

export default Modal;
