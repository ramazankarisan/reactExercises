import React, { useReducer } from 'react'
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


  return (
    <PersonContext.Provider value={{ state, dispatch, reducer }}>
      {props.children}
    </PersonContext.Provider>
  )
}

export default PersonState
