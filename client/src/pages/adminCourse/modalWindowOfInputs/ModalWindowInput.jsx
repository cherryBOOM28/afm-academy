import React, { useEffect, useState } from 'react';
import './modalWindowInput.scss'
const Modal = ({ onClose, inputs, onSubmit, exValues }) => {
  const [values, setValues] = useState(exValues || {});

  const [image, setImage] = useState(null)
  const [list, setList] = useState([''])
  const [newValue, setNewValue] = useState("")


  useEffect(() => {
    const hasListInput = inputs.some((x) => x.name === 'list');

    if (hasListInput) {
      // Update the 'list' property in the values state to an empty string
      setValues((prevValues) => ({
        ...prevValues,
        list: '',
      }));
    }
    console.log(inputs)
  }, [inputs])
  const handleAddToList = (name) => {
    // Assuming values[input.name] is a string
    const newValue = 'Элемент';
  
    // Update values[input.name] by adding the new element
    setValues((prevValues) => ({
      ...prevValues,
      [name]: prevValues[name] ? `${prevValues[name]}@${newValue}` : newValue,
    }));
  };
  
  const handleInputChange = (index, newValue, name) => {
    // Split the current string into an array
    const valuesArray = values[name].split('@');
  
    // Update the value at the specified index
    valuesArray[index] = newValue;
  
    // Join the array back into a string and update values[input.name]
    setValues((prevValues) => ({
      ...prevValues,
      [name]: valuesArray.join('@'),
    }));
  };
  
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
    } else if (type == "number") {
      const numericValue = value.replace(/\D/g, '');
      const integerValue = parseInt(numericValue, 10);

      if (!isNaN(integerValue)) {
        setValues((prevValues) => ({ ...prevValues, [name]: integerValue }));
      } else {
        console.error("Invalid numeric input");
      }
    } else if (type == "list") {

    } else {
      setValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };

  const handleSubmit = () => {
    const updatedValues = { ...values };
  
    if (inputs.some((input) => input.name === 'list')) {
      updatedValues['list'] = updatedValues['list'].split('@');
    }
    onSubmit({ inputs, values: updatedValues });    
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
              : input.type == 'list' ? 
              <div key={input.name}>
                  <label>{input.label}</label>
                    {values[input.name] ? values[input.name].split('@').map((x, index) => {
                      return (
                        <div key={index}>
                          <input
                            type="text"
                            value={x || ''}
                            onChange={(e) => handleInputChange(index, e.target.value, input.name)}
                          />
                        </div>
                      )
                    }) : null}
                      <button onClick={() => handleAddToList(input.name)}>Add</button>
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
            <button onClick={onClose}>Закрыть</button>
            <button onClick={handleSubmit}>Сохранить</button>
        </div>
    </div>
  );
};

export default Modal;
