import React from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import './style.css'

const NameList = ({peopleData}) => {
    return (
        <div className='name-list-wrapper'>
            {
                peopleData.map((person, index) => (
                    <div className='person-item' key={index}>
                        <div className='person-item-information'>
                            {person.name}: {person.id}
                        </div>
                        <div className='person-item-empty'>
                            <FaChevronDown style={{paddingRight:"15px", color:"rgba(0, 0, 0, 0.4)"}}/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default NameList
