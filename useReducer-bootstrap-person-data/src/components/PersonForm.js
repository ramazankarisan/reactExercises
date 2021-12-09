import React, { useContext } from 'react'
import { PersonContext } from '../context/PersonContext';

const PersonForm = () => {
  const { dispatch, handleClose, person, setPerson } = useContext(PersonContext)

  function handleSubmit(e) {
    e.preventDefault();

    // it assign the action values like this and then inside reducer function we will add this info in our state
    dispatch({ type: 'submit', data: person })

    handleClose();
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
