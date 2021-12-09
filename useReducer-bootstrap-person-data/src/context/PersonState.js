import React, { useReducer, useState } from 'react'
import { PersonContext } from './PersonContext'

const PersonState = (props) => {
  // for AddModal to show or hide
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // for EditModal to show or hide
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  // for personForm object
  const [person, setPerson] = useState({ name: '', email: '', phone: '' })


  // for useReducer
  const [state, dispatch] = useReducer(reducer, [])

  function reducer(state, action) {

    // to add at the end of our state
    if (action.type === 'submit') {

      return [...state, action.data]

    }
    // to delete from the state
    else if (action.type === 'delete') {

      return state.filter((item, i) => i !== action.data)

    }
    // when edit button is clicked, we see edit modal and form, also save the item index in our person variable
    else if (action.type === 'edit') {
      handleShowEdit()
      setPerson({ ...action.data, index: action.index });
      return state
    }
    // submit to edit
    else if (action.type === 'editSubmit') {
      // to save the updated person infos in our state
      state[person.index] = { name: person.name, email: person.email, phone: person.phone }
      return state
    }
    return state
  }
  return (
    <PersonContext.Provider value={{ state, dispatch, handleClose, handleShow, show, person, setPerson, showEdit, handleCloseEdit, reducer }}>
      {props.children}
    </PersonContext.Provider>
  )
}

export default PersonState
