import React, { useState } from 'react';
import './style.scss';
import DropdownButton from './DropdownButton';
import DropdownContent from './DropdownContent';

const DropdownPage = ({data, dataBtn, Height}) => {
  const [openDropdown, setOpenDropdown] = useState(1);
 


  const handleButtonClick = (index) => {
    setOpenDropdown(index === openDropdown ? 0 : index);
  };

  return (
    <div className='dropDownParent'>
      <div className="dropdown-page">
      <div className="buttons-container">
        
        {dataBtn.map((item, index) => (
         <DropdownButton label={item.name} onClick={() => handleButtonClick(index)} isOpen={openDropdown === index} />
       ))}
      </div>

      <div
        className="dropdown-container"
        style={{height:Height}}
      >
      {data.map((item, index) => (
        <DropdownContent isOpen={index === openDropdown} key={item.option}>
          {item.option}
        </DropdownContent>
      ))}
    </div>
    </div>
    </div>
  );
};

export default DropdownPage;
