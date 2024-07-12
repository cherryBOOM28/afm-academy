import React from 'react'
import SearchComponent from '../search-component'

const PdlComponent = ({ peopleData, task }) => {
    return (
        <div>
            <p>{ task.name }</p>
            <br />
            <p>{ task.description }</p>
            <br />
            <ol className="pdl-list">
                {peopleData.map((person, index) => (
                    <li key={index}>
                        {person.name}: {person.id}
                    </li>
                ))}
            </ol>
            <br />
            <SearchComponent peopleData={peopleData} />
        </div>
    )
}

export default PdlComponent
