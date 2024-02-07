import React,{useState} from 'react'

const ToolTipBolno = ({ text, children }) => {
    const [visible, setVisible] = useState(false);
  return (
      <div className='tooltip-container'
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
      >{children}
          {visible && <div className="tooltip">{ text }</div>}
    </div>
  )
}

export default ToolTipBolno
