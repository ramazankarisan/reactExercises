import React from 'react'
import img from '../images/cycle.jpg'

function Hobbies() {
  return (
    <div>
      <div className="hobbyCont">
        <h2>Hobby #1. Cycling</h2>
        <div className="hobbyImg">
          <img src={img} style={{ width: 200 }} alt="" />
          <img src={img} style={{ width: 200 }} alt="" />
          <img src={img} style={{ width: 200 }} alt="" />
          <img src={img} style={{ width: 200 }} alt="" />

        </div>
      </div>
      <div className="hobbyCont">
        <h2>Hobby #1. Cycling</h2>
        <div className="hobbyImg">
          <img src={img} style={{ width: 200 }} alt="" />
          <img src={img} style={{ width: 200 }} alt="" />
          <img src={img} style={{ width: 200 }} alt="" />
          <img src={img} style={{ width: 200 }} alt="" />

        </div>
      </div>
    </div>
  )
}

export default Hobbies
