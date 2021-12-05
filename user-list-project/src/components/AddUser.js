import React, { useContext, useState } from 'react'
import { AppContext } from '../context'

const AddUser = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [bio, setBio] = useState('')

  const { dispatchUserEvent } = useContext(AppContext);

  const handleAddUser = () => {
    const user = { id: Math.random(), name, age, bio }
    dispatchUserEvent('ADD_USER', { newUser: user })
    console.log(user);
  }
  return (
    <div className='addUserDiv'>
      <h3>Add New User</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='name' />
      <input value={age} onChange={(e) => setAge(e.target.value)} type="text" placeholder='age' />
      <textarea value={bio} rows='20' onChange={(e) => setBio(e.target.value)} placeholder='bio'></textarea>
      <button onClick={handleAddUser} >Add User</button>
    </div>

  )
}

export default AddUser
