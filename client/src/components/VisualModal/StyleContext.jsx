// StyleContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const StyleContext = createContext();

export const useStyle = () => {
  return useContext(StyleContext);
};

export const StyleProvider = ({ children }) => {
  const [styles, setStyles] = useState({
    fontSize: 'standard',
    fontFamily: 'Arial',
    colorMode: 'light',
    letterInterval: 'standard',
    showImage: true,
    openComponent: null,
  });

  const [open, setOpen] = useState(false);

  const updateStyles = (newStyles) => {
    console.log(newStyles)

    setStyles((prevStyles) => ({
      ...prevStyles,
      ...newStyles,
    }));

  };

  const setOpenComponent = (component) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      openComponent: prevStyles.openComponent === component ? null : component,
    }));
  };

  useEffect(() => {
    const _fontSize = localStorage.getItem('fontSize');
    const _fontFamily = localStorage.getItem('fontFamily');
    const _colorMode = localStorage.getItem('colorMode');
    const _letterInterval = localStorage.getItem('letterInterval');
    const _showImage = localStorage.getItem('showImage');
    const _OpenComponent = localStorage.getItem('openComponent');
    let _style = {
        fontSize: _fontSize,
        fontFamily: _fontFamily,
        colorMode: _colorMode,
        letterInterval: _letterInterval,
        showImage: _showImage,
        openComponent: _OpenComponent,
    }

    console.log(_style)
    setStyles(_style);
  }, [])

  const value = {
    styles,
    updateStyles,
    setOpenComponent,
    open,
    setOpen
  };

  return <StyleContext.Provider value={value}>{children}</StyleContext.Provider>;
};
