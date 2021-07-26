import React, { useEffect, useState } from 'react'

const ApplyForm = (props) => {

    const { postFormData, isSubmit } = props

    const [ fullName, setFullName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ number, setNumber ] = useState('')
    const [ jobType, setJobType ] = useState('')
    const [ experience, setExperience ] = useState('')
    const [ skills, setSkills ] = useState('')

    const [ success, setSuccess] = useState(false)

    const [ formError, setFormError ] = useState({})
    const errors = {}

    useEffect(() => {
        if(isSubmit){
            setFullName('')
            setEmail('')
            setNumber('')
            setJobType('')
            setExperience('')
            setSkills('')
        }
    },[ isSubmit])

    const handleChange = (e) => {
        const { name, value } = e.target
        if(name === 'fullName'){
            setFullName(value)
        }
        else if( name === 'email'){
            setEmail(value)
        }
        else if( name === 'number'){
            setNumber(value)
        }
        else if( name === 'jobType'){
            setJobType(value)
        }
        else if( name === 'experience'){
            setExperience(value)
        }else if( name === 'skills'){
            setSkills(value)
        }
    }

    const runValidator = () => {

        if(fullName.trim().length === 0){
            errors.name = 'name can not be blank.'
        }
        if(email.trim().length === 0){
            errors.email = 'email can not be blank'
        }
        if(number.trim().length === 0){
            errors.number = 'number can not be blank'
        }
        if(jobType === ''){
            errors.select = 'please select job type'
        }
        if(experience.trim().length === 0){
            errors.experience = 'experience can not be empty'
        }
        if(skills.trim().length === 0){
            errors.skills = 'skills cant be empty'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidator()

        if(Object.keys(errors).length === 0){
            setFormError({})
            const formData = {
                name : fullName,
                email : email,
                phone : number,
                jobTitle : jobType,
                experience : experience,
                skills : skills
            }
            postFormData(formData)
            setSuccess(!success)
        }
        else{
            setFormError(errors)
        }
    }


    return (
        <div>
            <form onSubmit={ handleSubmit } style={{ height:'500px',width:'500px',marginLeft:'100px'}} className="mt-4" autoComplete="off">
                
                <div className="mb-3">
                    {
                        success && 
                        (
                            isSubmit ? 
                            <span style={{ backgroundColor:'green', color:'white'}}> Data Added successfully</span> : 
                            <span></span> )
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input 
                        type="text" 
                        value={ fullName } 
                        onChange={ handleChange } 
                        name = "fullName"
                        className = "form-control"
                    /> 
                    {
                        formError.name && <span style={{ color : 'red'}}>{ formError.name }</span>
                    }
                </div>
                
                

                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input 
                        type="email" 
                        placeholder="example@email.com" 
                        value={ email } 
                        onChange={ handleChange } 
                        name="email"
                        className = "form-control"
                    /> 
                    {
                        formError.email && <span style={{ color : 'red'}}>{ formError.email }</span>
                    }
                </div>
                
                

                <div className="mb-3">
                    <label className="form-label">Contact Number</label>
                    <input 
                        type="number" 
                        placeholder = "+91 8698521470" 
                        value={ number } 
                        onChange={ handleChange } 
                        name="number"
                        className = "form-control"
                    /> 
                    {
                        formError.number && <span style={{ color : 'red'}}>{ formError.number }</span>
                    }
                </div>
                
                

                <div className="mb-3">
                    <label className="form-label">Applying for Job </label>
                    <select value={ jobType } onChange={ handleChange} name="jobType" className = "form-control">
                        <option value="">--Select--</option>
                        <option value="Front-End Developer" >FrontEnd Developer</option>
                        <option value="Node.js Developer">Node js Developer</option>
                        <option value="MEAN Stack Developer">Mean Stack Developer</option>
                        <option value="FULL Stack Developer">Full Stack Developer</option>
                    </select>
                    {
                        formError.select && <span style={{ color : 'red'}}>{ formError.select }</span>
                    }
                </div>
                
                

                <div className="mb-3">
                    <label className="form-label">Experience</label>
                    <input 
                        type="text" 
                        placeholder="2year" 
                        value={ experience } 
                        onChange={ handleChange } 
                        name="experience"
                        className = "form-control"
                    /> 
                    {
                        formError.experience && <span style={{ color : 'red'}}>{ formError.experience }</span>
                    }
                </div>
                
                

                <div className="mb-3">
                    <label className="form-label">Technical Skills</label>
                    <textarea 
                        name="skills" 
                        className = "form-control" 
                        cols="30" rows="5" 
                        placeholder="Technical Skills" 
                        value={ skills } 
                        onChange={ handleChange }
                    ></textarea>
                    {
                        formError.skills && <span style={{ color : 'red'}}>{ formError.skills }</span>
                    }
                </div>
                
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Send Application</button>
                </div>
                
            </form>
        </div>
    )
}

export default ApplyForm
