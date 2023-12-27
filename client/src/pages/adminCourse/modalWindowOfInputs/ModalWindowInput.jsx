import React, { useEffect, useState } from 'react';
import './modalWindowInput.scss'
const Modal = ({ onClose, inputs, onSubmit, exValues }) => {
  const [values, setValues] = useState(exValues || {});

  useEffect(() => {
    const hasListInput = inputs.some((x) => x.name === 'list');

    const hasTableInput = inputs.some((x) => x.name === 'rows');

    if (hasListInput) {
      // Update the 'list' property in the values state to an empty string
      setValues((prevValues) => ({
        ...prevValues,
        list: exValues?.list || [],
      }));
    } else if (hasTableInput) {
      setValues((prevValues) => ({
        ...prevValues,
        rows: exValues?.rows || [],
      }));
    }
  }, [inputs])

  const handleAddToList = (name) => {
    // Add a new element to the list array
    setValues((prevValues) => ({
      ...prevValues,
      [name]: [...prevValues[name], 'Новый элемент'],
    }));
  };

  const handleAddToTable = (name) => {
    // Add a new element to the list array
    setValues((prevValues) => ({
      ...prevValues,
      [name]: [...prevValues[name], {"first": '1', "second": 'Значение'}],
    }));
  };
  
  const handleInputChange = (index, newValue, name) => {
    // Update the value at the specified index in the list array
    const updatedList = [...values[name]];
    updatedList[index] = newValue;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: updatedList,
    }));
  };
  const handleInputChangeTable1 = (index, newValue, name) => {
    // Update the value at the specified index in the list array
    const updatedList = [...values.rows];
    if (name == 'first') {
      updatedList[index].first = newValue;
    } else {
      updatedList[index].second = newValue;
    }

    setValues((prevValues) => ({
      ...prevValues,
      'rows': updatedList,
    }));
  };
  
  const handleChange = (name, value, type) => {
    if (type == "file") {
      // console.log("image")
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

    // console.log({ inputs, values: updatedValues })
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
                        value={values[input.name] || ''}
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
              : input.type == 'list' && values[input.name] ? 
              <div key={input.name}>
                  <label>{input.label}</label>
                    {values[input.name].map((x, index) => {
                      return (
                        <div key={index}>
                          <input
                            type="text"
                            value={x || ''}
                            onChange={(e) => handleInputChange(index, e.target.value, input.name)}
                          />
                        </div>
                      )
                    })}
                      <button onClick={() => handleAddToList(input.name)}>Add</button>
                </div>
              : input.type == 'rows' && values[input.name] ? 
              <div key={input.name}>
                  <label>{input.label}</label>
                    {values[input.name].map((x, index) => {
                      return (
                        <div key={index} className='table-rows-input'>
                          <div className='first-column'>
                            <input
                              type="text"
                              value={x.first || ''}
                              onChange={(e) => handleInputChangeTable1(index, e.target.value, 'first')}
                            />
                          </div>
                          <div className='second-column'>
                            <input
                              type="text"
                              value={x.second || ''}
                              onChange={(e) => handleInputChangeTable1(index, e.target.value, 'second')}
                            />
                          </div>
                        </div>
                        
                      )
                    })}
                      <button onClick={() => handleAddToTable(input.name)}>Add</button>
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
