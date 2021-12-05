import React from 'react'

const User = ({ user }) => {
  return (
    <div style={{ border: '1px solid gray', display: 'inline-block', padding: 10 }}>
      <h3>{user.name}</h3>
      <h4>{user.age}</h4>
      <div>
        <small>{user.bio}</small>
      </div>
    </div>
  )
}

export default User
