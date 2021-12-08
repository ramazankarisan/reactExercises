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

    if (action.type === 'submit') {

      return [...state, action.data]


    } else if (action.type === 'delete') {

      return state.filter((item, i) => i !== action.data)

    } else if (action.type === 'edit') {
      handleShowEdit()
      setPerson({ ...action.data, index: action.index });
      console.log(action);
      console.log(state);
      return state
    } else if (action.type === 'editSubmit') {
      console.log(person);
      console.log(state);
      console.log(person.index);
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
