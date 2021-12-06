import React from 'react'
import { useParams } from 'react-router-dom'
import { dogs } from '../components/DogInfo.js'

function Dog() {
  const params = useParams()

  let dogName = params.name.toLowerCase()

  let newDog = dogs.filter(item => {

    return item.name === dogName
  })

  return (
    <div className="info">
      <h3>Name : {newDog[0].name}</h3>
      <p>Age : {newDog[0].age}</p>
      <div>{newDog[0].facts.map(item => { return (<p >{item}</p>) })}</div>

    </div>
  )
}

export default Dog
