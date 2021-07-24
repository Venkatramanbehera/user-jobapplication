import React from 'react'
import { Link, Route } from 'react-router-dom'
import AdminContainer from './AdminContainer'
import FormContainer from './FormContainer'
import FrontEndDeveloper from './FrontEndDeveloper'

const NavBar = (props) => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/admin">Admin Dashboard</Link>
            <Route path="/" component={ FormContainer } exact={ true }/>
            <Route path="/admin" component={ AdminContainer } exact={ true }/>
            <Route path="/admin/frontend" components={ FrontEndDeveloper}/>
        </div>
    )
}

export default NavBar
