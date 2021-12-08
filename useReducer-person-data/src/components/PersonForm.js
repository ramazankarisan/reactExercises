import React, { useContext, useState } from 'react'
import { PersonContext } from '../context/PersonContext';

const PersonForm = () => {
  const { dispatch, handleClose, handleCloseEdit, person, setPerson } = useContext(PersonContext)



  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'submit', data: person })
    handleClose();
    handleCloseEdit()
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="personInputDiv">
          <label> Name: </label>
          <input onChange={(e) => setPerson({ ...person, name: e.target.value })} type="text" name="name" value={person.name} />
        </div>
        <div className="personInputDiv">
          <label> Email: </label>
          <input onChange={(e) => setPerson({ ...person, email: e.target.value })} type="email" name="email" value={person.email} />
        </div>
        <div className="personInputDiv">
          <label> Phone: </label>
          <input onChange={(e) => setPerson({ ...person, phone: e.target.value })} type="text" name="phone" value={person.phone} />
        </div>
        <div className="personSubmitDiv">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
