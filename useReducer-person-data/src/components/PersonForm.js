import React, { useContext, useState } from 'react'
import { PersonContext } from '../context/PersonContext';

const PersonForm = () => {
  const { dispatch } = useContext(PersonContext)
  const [person, setPerson] = useState({ name: '', email: '', phone: '' })


  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'submit', data: person })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Name:</label>
          <input onChange={(e) => setPerson({ ...person, name: e.target.value })} type="text" name="name" id="" />
        </div>
        <div>
          <label> Email:</label>
          <input onChange={(e) => setPerson({ ...person, email: e.target.value })} type="email" name="name" id="" />
        </div>
        <div>
          <label> Phone:</label>
          <input onChange={(e) => setPerson({ ...person, phone: e.target.value })} type="text" name="name" id="" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
