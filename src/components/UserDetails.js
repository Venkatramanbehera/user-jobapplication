import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const UsersDetails = (props) => {
  
    Modal.setAppElement('#root')
    const { handleToggle, users } = props

    return (
        <Modal isOpen={true} style={ customStyles }>
            <h1> {users.name} </h1>
            <hr />
            <h2>Contact Number - {users.phone} </h2>
            <h2>Email - {users.email} </h2>
            <h2>skills</h2>
            <ul>
              {
                users.skills.split(',').map((skill,i) => {
                  return <li key={i}> {skill} </li>
                })
              }
            </ul>
            <h2>experience - { users.experience}</h2>
            <hr />
            <button onClick={() => { handleToggle()}}>close</button>
        </Modal>
    )
}

export default UsersDetails
