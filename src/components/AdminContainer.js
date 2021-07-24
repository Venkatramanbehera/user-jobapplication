import React from 'react'
import { Link } from 'react-router-dom'
const AdminContainer = (props) => {
    
    return (
        <div>
            <h1>Admin dashboard</h1>
            <ul>
                <li><Link to="/admin/frontend">Front-End Developer</Link></li>
                <li><Link to="/admin/nodejs">Node.js Developer</Link></li>
                <li><Link to="/admin/meanstack">MEAN Stack Developer</Link></li>
                <li><Link to="/admin/fullstack">FULL Stack Developer</Link></li>
            </ul>
        </div>
    )
}

export default AdminContainer
