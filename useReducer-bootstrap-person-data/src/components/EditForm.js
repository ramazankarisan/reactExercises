import React, { useContext } from 'react'
import { PersonContext } from '../context/PersonContext';

const EditForm = () => {
  const { dispatch, handleCloseEdit, person, setPerson } = useContext(PersonContext)

  function handleEdit(e) {
    e.preventDefault();

    // it save the change in the form that we made and we see them once again in the state as updated version
    dispatch({ type: 'editSubmit', data: person })

    handleCloseEdit();
  }
  return (
    <div className="App">
      <form onSubmit={handleEdit}>
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
          <button type="submit">Edit Person</button>
        </div>
      </form>
    </div>
  )
}

export default EditForm
