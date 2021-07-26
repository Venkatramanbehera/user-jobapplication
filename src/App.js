import React, { useEffect, useState } from 'react'
import { Link, Route } from 'react-router-dom'
import axios from 'axios'

import FormContainer from './components/FormContainer'
import AdminContainer from './components/AdminContainer'

import FrontEndDeveloper from './components/FrontEndDeveloper'
import NodeJsDeveloper from './components/NodeJsDeveloper'
import MeanStackDeveloper from './components/MeanStackDeveloper'
import FullStackDeveloper from './components/FullStackDeveloper'

const App = (props) => {

  const [ participants, setParticipants ] = useState([])

  useEffect(() => {
    axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
      .then((res) => {
        setParticipants(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },[])

  const addParticipants = (participant) => {
    const result = [participant,...participants]
    setParticipants(result)
  }

  const statusUpdate = (participant) => {
    const result = participants.map((p) => {
      if(p._id === participant._id){
        return {...participant}
      }else{
        return {...p}
      }
    })
    setParticipants(result)
  }
  
  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item me-4">
                  <Link to="/" style={{ textDecoration:"none"}}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin" style={{ textDecoration:"none"}}>Admin Dashboard</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
            <Route path="/" render={ (props) => {
              return <FormContainer {...props} addParticipants={addParticipants}/>
            }}  exact={ true }/>

            <Route path="/admin" render = { (props) => {
              return <AdminContainer {...props} participants={participants}/>
            }}/>

            <Route path="/admin" render={ (props) => {
              return <FrontEndDeveloper {...props} participants={participants} statusUpdate={statusUpdate}/>
            }} exact={ true }/>

            <Route path="/admin/nodejs" render={ (props) => {
              return <NodeJsDeveloper {...props} participants={ participants } statusUpdate={statusUpdate}/>
            } }/>

            <Route path="/admin/meanstack" render={ (props) => {
              return <MeanStackDeveloper {...props} participants={ participants } statusUpdate={statusUpdate}/>
            } }/>

            <Route path="/admin/fullstack" render={ (props) => {
              return <FullStackDeveloper {...props} participants={ participants } statusUpdate={statusUpdate}/>
            } }/>
            
    </div>
  )
}

export default App
