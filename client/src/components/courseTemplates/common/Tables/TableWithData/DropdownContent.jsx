import React from 'react';
import './DropdownContent.scss';

const DropdownContent = ({ isOpen, children }) => {
  const formatText = (text) => {
    let res = '';

    try {
        res = text.replace(/"(.*?)"/g, '<span style="font-weight: 600;">$1</span>');
    } catch (e) {
        res = text;
    }

    return res;
}

  return <div className={`dropdown-contentData ${isOpen ? 'open' : ''}`} dangerouslySetInnerHTML={{ __html: formatText(children) }} />;
};

export default DropdownContent;
