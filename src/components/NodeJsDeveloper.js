import React from 'react'
import filterData from '../helper/filterData'
import DeveloperTable from './DeveloperTable'

const NodeJsDeveloper = (props) => {

    const { participants, statusUpdate } = props
    const result = filterData(participants,'Node.js Developer')

    return (
        <div>
            <h1>Node js Developer</h1>
            <DeveloperTable result={ result } statusUpdate={statusUpdate} />
        </div>
    )
}

export default NodeJsDeveloper
