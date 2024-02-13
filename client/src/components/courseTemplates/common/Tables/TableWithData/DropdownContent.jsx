import React from 'react';
import './DropdownContent.scss';

const DropdownContent = ({ isOpen, children }) => {
  const formatText = (text) => {
    return text.replace(/"(.*?)"/g, '<span style="font-weight: bold;">$1</span>');
  };

  return <div className={`dropdown-contentData ${isOpen ? 'open' : ''}`}>{  formatText(children) }</div>;
};

export default DropdownContent;
