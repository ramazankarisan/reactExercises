import React from 'react'
import dog1 from '../images/whiskey.jpg'
import dog2 from '../images/hazel.jpg'
import dog3 from '../images/tubby.jpg'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Dog from './Dog'



function Dogs() {
  const navigate = useNavigate()
  const params = useParams();
  return (
    <>
      <div className="main">
        <div style={{ opacity: params.name == undefined || params.name == 'Whiskey' ? 1 : 0.4 }} className="card"><img onClick={() => navigate("/dogs/Whiskey")} src={dog1} alt="" /> <p>Whiskey</p></div>
        <div style={{ opacity: params.name == undefined || params.name == 'Hazel' ? 1 : 0.4 }} className="card"><img onClick={() => navigate("/dogs/Hazel")} src={dog2} alt="" /> <p>Hazel</p></div>
        <div style={{ opacity: params.name == undefined || params.name == 'Tubby' ? 1 : 0.4 }} className="card"><img onClick={() => navigate("/dogs/Tubby")} src={dog3} alt="" /> <p>Tubby</p></div>

      </div>
      <div>{params.name && <Dog />}</div>

    </>
  )
}

export default Dogs
