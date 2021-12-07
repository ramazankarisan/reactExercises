import React, { useContext } from 'react'
import { PersonContext } from '../context/PersonContext'

const PersonView = () => {
  const { state, dispatch } = useContext(PersonContext);

  return (
    <>
      {state.map((item, index) => {
        return (
          <div key={index} className="personInfo">
            <h1>{item.name}</h1>
            <h2>{item.email}</h2>
            <p>{item.phone}</p>
            <button className="delButton" onClick={() => dispatch({ type: 'delete', data: index })}> x </button>
          </div>
        )
      })}
    </>
  )
}

export default PersonView
