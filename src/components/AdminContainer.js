import React from 'react'
import { Link } from 'react-router-dom'

const AdminContainer = (props) => {
    return (
        <div>
            <h1>Admin dashboard</h1>
            <ul style={{ listStyleType:'none', margin:0,padding:0,height:'60px'}}>

                <li style={{ display:'inline',marginRight:'20px',backgroundColor:'cyan',border:'1px solid black',fontSize:'20px'}}>
                    <Link to="/admin/frontend" style={{ textDecoration:'none', color:'black'}}>Front-End Developer</Link>
                </li>

                <li style={{ display:'inline' ,marginRight:'20px',backgroundColor:'cyan',border:'1px solid black',fontSize:'20px'}}>
                    <Link to="/admin/nodejs" style={{ textDecoration:'none',color:'black'}}>Node.js Developer</Link>
                </li>

                <li style={{ display:'inline' ,marginRight:'20px',backgroundColor:'cyan',border:'1px solid black',fontSize:'20px'}}>
                    <Link to="/admin/meanstack" style={{ textDecoration:'none',color:'black'}}>MEAN Stack Developer</Link>
                </li>

                <li style={{ display:'inline' ,marginRight:'20px',backgroundColor:'cyan',border:'1px solid black',fontSize:'20px'}}>
                    <Link to="/admin/fullstack" style={{ textDecoration:'none',color:'black'}}>FULL Stack Developer</Link>
                </li>

            </ul>
        </div>
    )
}

export default AdminContainer
