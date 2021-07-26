import axios from 'axios'
import React, { useState } from 'react'
import ApplyForm from './ApplyForm'

const FormContainer = (props) => {
    const [ isSubmit, setIsSubmit ] = useState(false)

    const { addParticipants } = props


    const postFormData = (formData) => {
        axios.post('http://dct-application-form.herokuapp.com/users/application-form', formData)
            .then((res) => {
                addParticipants(res.data)
                setIsSubmit(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div >
            <h1>Apply For Job</h1>
            <ApplyForm postFormData={postFormData} isSubmit={ isSubmit }/>
        </div>
    )
}

export default FormContainer
