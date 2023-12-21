import React, { useEffect, useState } from 'react';
import './modalWindowInput.scss'
const Modal = ({ onClose, inputs, onSubmit, exValues }) => {
  const [values, setValues] = useState(exValues || {});

  const [image, setImage] = useState(null)

  useEffect(() => {
    console.log(inputs)
  })

  const handleChange = (name, value, type) => {
    if (type == "file") {
      console.log("image")
      if (value) {
        const reader = new FileReader();
  
        reader.onload = (event) => {
          const base64Image = event.target.result;
          setValues((prevValues) => ({ ...prevValues, [name]: base64Image }));
        };
  
        // Read the file as a data URL, triggering the onload event
        reader.readAsDataURL(value);
      } else {
        console.error("Invalid file type");
      }
    } if (type == "number") {
      const numericValue = value.replace(/\D/g, '');
      const integerValue = parseInt(numericValue, 10);

      if (!isNaN(integerValue)) {
        setValues((prevValues) => ({ ...prevValues, [name]: integerValue }));
      } else {
        console.error("Invalid numeric input");
      }
    } else {
      setValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };

  const handleSubmit = () => {
    onSubmit({inputs, values});
    setValues({});
    onClose();
  };

  return (
    <div className="modal">
        <a className='modal-title'>Введите данные для компонента</a>
        <div className="modal-content">
            {inputs.map((input) => (
              input.type == "file" ?
                <div key={input.name}>
                    <label>{input.label}</label>
                    <input
                        type={input.type}
                        value={image}
                        onChange={(e) => handleChange(input.name, e.target.files[0], input.type)}
                    />
                </div>
              : input.type == "number" ?
                <div key={input.name}>
                    <label>{input.label}</label>
                    <input
                        type={input.type}
                        value={values[input.name] || 18}
                        onChange={(e) => handleChange(input.name, e.target.value, input.type)}
                    />
                </div>
              :
                <div key={input.name}>
                    <label>{input.label}</label>
                    <input
                        type={input.type}
                        value={values[input.name] || ''}
                        onChange={(e) => handleChange(input.name, e.target.value, input.type)}
                    />
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  );
};

export default Modal;
