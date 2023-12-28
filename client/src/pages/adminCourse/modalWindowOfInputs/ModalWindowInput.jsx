import React, { useEffect, useState } from 'react';
import './modalWindowInput.scss'

function fileToBase64(file, callback) {
  if (!file) {
    console.error("No file provided for conversion.");
    return;
  }

  const reader = new FileReader();

  reader.onloadend = () => {
    if (reader.readyState === FileReader.DONE) { // Ensures the read is complete
      if (typeof callback === 'function') {
        callback(reader.result);
      }
    }
  };

  reader.onerror = (error) => {
    console.error("Error reading file:", error);
  };

  reader.readAsDataURL(file);
}

const Modal = ({ onClose, inputs, onSubmit, exValues }) => {
  const [values, setValues] = useState(exValues || {});

  useEffect(() => {
    const hasListInput = inputs.some((x) => x.name === 'list');
    const hasTabsInput = inputs.some((x) => x.name === 'tabs');

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
    } else if (hasTabsInput) {
      // Check if exValues.tabsGlossary is an object
      const isTabsGlossaryObject = exValues?.tabsGlossary && typeof exValues.tabsGlossary === 'object' && !Array.isArray(exValues.tabsGlossary);

      const newTabsGlossary = isTabsGlossaryObject
          ? exValues.tabs.map(tab => exValues.tabsGlossary[tab] || '') // Map each tab to its corresponding value in the tabsGlossary object
          : exValues?.tabsGlossary || [];

      setValues((prevValues) => ({
          ...prevValues,
          tabs: exValues?.tabs || [],
          tabsGlossary: newTabsGlossary,
      }));
    }
  }, [inputs])

  const handleAddToList = (name) => {
    // Add a new element to the list array
    if (name == 'tabs') {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: [...prevValues[name], 'Новый раздел'],
        'tabsGlossary': [...prevValues['tabsGlossary'], 'Новый раздел']
      }));
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: [...prevValues[name], 'Новый элемент'],
      }));
    }
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
      if (value) {
        console.log(value)
        const selectedFile = value;
      
        fileToBase64(selectedFile, (base64String) => {
          console.log(selectedFile)
          console.log(base64String)
          console.log(name)
          setValues((prevValues) => ({ ...prevValues, [name]: base64String }));
        });
        
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

    if (updatedValues.tabsGlossary && updatedValues.tabs) {
      // Transform 'tabsGlossary' array into an object
      const tabsGlossaryObject = updatedValues.tabsGlossary.reduce((obj, glossaryValue, index) => {
          const tabKey = updatedValues.tabs[index]; // Get corresponding element from 'tabs'
          obj[tabKey] = glossaryValue; // Assign it as a key-value pair
          return obj;
      }, {});

      // Replace 'tabsGlossary' array with the newly formed object
      updatedValues.tabsGlossary = tabsGlossaryObject;
    }


    console.log({ inputs, values: updatedValues })

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
                <div key={input.name} className='file-input'>
                    <label>{input.label}</label>
                    <input
                        type={input.type}
                        src={values[input.name]}
                        onChange={(e) => handleChange(input.name, e.target.files[0], input.type)}
                    />
                </div>
              : input.type == "number" ?
                <div key={input.name} className='number-input'>
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
                    <div className='add-button-div'>
                      <button className='add-button' onClick={() => handleAddToList(input.name)}>Добавить</button>
                    </div>
                </div>
              : input.type == 'rows' && values[input.name] ? 
                <div key={input.name}>
                  <label>{input.label}</label>
                    {values[input.name].map((x, index) => {
                      return (
                        <div key={index} >
                          <div >
                            <input
                              type="text"
                              value={x.first || ''}
                              onChange={(e) => handleInputChangeTable1(index, e.target.value, 'first')}
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              value={x.second || ''}
                              onChange={(e) => handleInputChangeTable1(index, e.target.value, 'second')}
                            />
                          </div>
                        </div>
                        
                      )
                    })}
                    <div className='add-button-div'>
                      <button className='add-button' onClick={() => handleAddToTable(input.name)}>Добавить</button>
                    </div>
                </div> 
                :
                input.type == 'tabs' && values.tabs && values.tabsGlossary ? 
                <div key={input.name}>
                    <label>Разделы</label>
                    <div className='columns'>
                      <div className='first-column'>
                      {values.tabs.map((x, index) => {
                        return (
                          <div key={index}>
                            <input
                              type="text"
                              value={x || ''}
                              onChange={(e) => handleInputChange(index, e.target.value, 'tabs')}
                              />
                          </div>
                        )
                      })}
                      </div>
                      <div className='second-column'>
                      {values.tabsGlossary.map((x, index) => {
                        return (
                          <div key={index}>
                            <input
                              type="text"
                              value={x || ''}
                              onChange={(e) => handleInputChange(index, e.target.value, 'tabsGlossary')}
                              />
                          </div>
                        )
                      })}
                      </div>
                    </div>
                    <div className='add-button-div'>
                      <button className='add-button' onClick={() => handleAddToList(input.name)}>Добавить</button>
                    </div>
                </div> 
                : input.type == 'tabsGlossary'? 
                null
                :
                <div key={input.name} className='default-input'>
                    <label>{input.label}</label>
                    <input
                        type={input.type}
                        value={values[input.name] || ''}
                        onChange={(e) => handleChange(input.name, e.target.value, input.type)}
                    />
                </div>
            ))}
            <div className='buttons'>
              <button className="close-button" onClick={onClose}>Закрыть</button>
              <button className="save-button" onClick={handleSubmit}>Сохранить</button>
            </div>
        </div>
    </div>
  );
};

export default Modal;
