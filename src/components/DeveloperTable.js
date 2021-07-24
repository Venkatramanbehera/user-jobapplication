import axios from 'axios'
import React, { useState } from 'react'
import UserDetails from './UserDetails'

const DeveloperTable = (props) => {
    const [ toggle, setToggle ] = useState(false)
    const [ id, setId ] = useState('')

    const { result,statusUpdate } = props

    const handleToggle = () => {
        setToggle(!toggle)
    }
    
    const handleUserDetails = (_id) => {
        setId(_id)
        handleToggle()
    }

    const findUser = (_id) => {
        return result.find((r) => {
            return r._id === _id
        })
    }

    const handleShortList = (_id) => {
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${_id}`,{ "status" : "shortlisted"})
            .then((res) => {
                statusUpdate(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleReject = (_id) => {
        console.log(_id)
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${_id}`,{ "status" : "rejected"})
            .then((res) => {
                statusUpdate(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <table border="1" className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Technical skills</th>
                        <th>Experience</th>
                        <th>Applied Date</th>
                        <th>View details</th>
                        <th>Update application status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        result.map((r) => {
                            return (
                                <tr key={ r._id } >
                                    <td>{ r.name }</td>
                                    <td>{ r.skills }</td>
                                    <td>{ r.experience }</td>
                                    <td>{ r.createdAt.slice(0,10) }</td>
                                    <td><button className="btn btn-info" onClick={() => handleUserDetails(r._id) }>Details</button></td>
                                    <td>
                                        {
                                            r.status === 'applied' ? (
                                                <div>
                                                    <button onClick={ () => handleShortList(r._id) } className="btn btn-success me-2">shortlist</button> 
                                                    <button onClick={ () => handleReject(r._id) } className="btn btn-danger">Reject</button>
                                                </div>
                                            ) : ( <button disabled className="btn btn-secondary">{ r.status }</button> )
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
                (toggle && id) && <UserDetails handleToggle={handleToggle} users={findUser(id)}/>
            }
            
        </div>
    )
}

export default DeveloperTable
