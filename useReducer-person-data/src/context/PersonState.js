import React, { useReducer, useState } from 'react'
import { PersonContext } from './PersonContext'

const PersonState = (props) => {

  function reducer(state, action) {

    if (action.type === 'submit') {

      return [...state, action.data]

    } else if (action.type === 'delete') {

      return state.filter((item, i) => i !== action.data)

    }
    return state
  }
  const [state, dispatch] = useReducer(reducer, [])


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <PersonContext.Provider value={{ state, dispatch, handleClose, handleShow, show }}>
      {props.children}
    </PersonContext.Provider>
  )
}

export default PersonState
