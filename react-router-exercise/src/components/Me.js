import React from 'react'
import img from '../images/image.jpg'

function Me() {
  return (
    <div className="meContainer">
      <div><img src={img} style={{ width: 300, padding: 20 }} /></div>
      <div className="meDiv">
        <h3>My name</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ea non. Quam vitae deserunt sint officiis! Cupiditate vitae minus vero.</p>
        <div>
          <ul>some websites
            <li><a href="google.com">Google</a></li>
            <li><a href="google.com">Google</a></li>
            <li><a href="google.com">Google</a></li></ul>

        </div>

      </div >
    </div >
  )
}

export default Me
