import React from 'react'
import './style.scss'

const JustTextWithP = ({textData}) => {
  return (
    <div>
          {textData.map((item, index) => (
              <div><p className='abzac'>{ item }</p><br /></div>
          ))}
    </div>
  )
}

export default JustTextWithP
