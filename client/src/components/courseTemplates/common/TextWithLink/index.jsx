import React from 'react';
import './style.scss';

const TextWithLink = ({ text, link }) => {
  if (!text) {
    return null;
  }

  const parts = text.split(/("[^"]*")|\+/).filter(Boolean);

  return (
    <div className='divComponent'>
      <p className='textWithoutLink'>
        {parts.map((part, index) => {
          if (part.startsWith && part.startsWith('"') && part.endsWith('"')) {
            const content = part.slice(1, -1);
            return (
              <a className='textWithLink' key={index} href={link} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            );
          }

          if (part === '+') {
            return <strong className='strongScss' key={index}>{part}</strong>;
          }

          return <span key={index}>{part}</span>;
        })}
      </p>
    </div>
  );
};

export default TextWithLink;
