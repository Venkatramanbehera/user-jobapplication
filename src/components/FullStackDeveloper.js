import React from 'react'
import filterData from '../helper/filterData'
import DeveloperTable from './DeveloperTable'

const FullStackDeveloper = (props) => {
    
    const { participants,statusUpdate } = props
    const result = filterData(participants,'FULL Stack Developer')

    return (
        <div>
            <h1>Full stack Developer</h1>
            <p>List of Candidate applied for full stack developer job</p>
            <DeveloperTable result={ result } statusUpdate={ statusUpdate }/>
        </div>
    )
}

export default FullStackDeveloper
