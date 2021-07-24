import axios from 'axios'
import React from 'react'
import ApplyForm from './ApplyForm'

const FormContainer = (props) => {

    const { addParticipants } = props

    const postFormData = (formData) => {
        console.log(formData)
        axios.post('http://dct-application-form.herokuapp.com/users/application-form', formData)
            .then((res) => {
                addParticipants(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div >
            <h1>Apply For Job</h1>
            <ApplyForm postFormData={postFormData}/>
        </div>
    )
}

export default FormContainer
