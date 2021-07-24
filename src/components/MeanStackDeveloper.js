import React from 'react'
import filterData from '../helper/filterData'
import DeveloperTable from './DeveloperTable'

const MeanStackDeveloper = (props) => {

    const { participants, statusUpdate } = props
    const result = filterData(participants,'MEAN Stack Developer')

    return (
        <div>
            <h1>Mean Stack Developer</h1>
            <DeveloperTable result={ result } statusUpdate={ statusUpdate } />
        </div>
    )
}

export default MeanStackDeveloper
