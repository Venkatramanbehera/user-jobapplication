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
    <div>
            <Link to="/">Home</Link>
            <Link to="/admin">Admin Dashboard</Link>

            <Route path="/" render={ (props) => {
              return <FormContainer {...props} addParticipants={addParticipants}/>
            }}  exact={ true }/>

            <Route path="/admin" render = { (props) => {
              return <AdminContainer {...props} participants={participants}/>
            }}/>

            <Route path="/admin/frontend" render={ (props) => {
              return <FrontEndDeveloper {...props} participants={participants} statusUpdate={statusUpdate}/>
            }}/>

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
