import React, { useContext } from 'react'
import { PersonContext } from '../context/PersonContext'

const PersonView = () => {
  const { state, dispatch } = useContext(PersonContext);

  return (
    <>
      {state.map((item, index) => {
        return (
          <div key={index} style={{ border: 'solid 2px', width: 200, margin: '10px auto' }}>
            <h1>{item.name}</h1>
            <h2>{item.email}</h2>
            <p>{item.phone}</p>
            <button onClick={() => dispatch({ type: 'delete', data: index })}> x </button>
          </div>
        )
      })}
    </>
  )
}

export default PersonView
