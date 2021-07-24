import React from 'react'
import filterData from '../helper/filterData'
import DeveloperTable from './DeveloperTable'

const FrontEndDeveloper = (props) => {

    const { participants, statusUpdate } = props
    const result = filterData(participants,'Front-End Developer')

    return (
        <div>
            <h1>Front-End Developer</h1>
            <p>List of Candidate applied for frontend developer job</p>
            <DeveloperTable result={ result } statusUpdate={statusUpdate} />
        </div>
    )
}

export default FrontEndDeveloper
