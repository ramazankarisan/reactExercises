import React, { useContext } from 'react'
import { AppContext } from '../context'

const User = ({ user }) => {
  const { dispatchUserEvent } = useContext(AppContext)

  const handleDeleteUser = () => {

    dispatchUserEvent('REMOVE_USER', { userId: user.id })
  }
  return (
    <div style={{ border: '1px solid gray', display: 'block', padding: 10, width: 150, margin: '10px auto' }}>
      <h3>{user.name}</h3>
      <h4>{user.age}</h4>
      <div>
        <small>{user.bio}</small>
      </div>
      <button onClick={handleDeleteUser}>Delete User</button>
    </div>
  )
}

export default User
