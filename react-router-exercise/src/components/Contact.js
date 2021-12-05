import React, { useState } from 'react'

let warn = document.querySelector('#warn');

const Contact = () => {

  // const [text, setText] = useState({ email: '', textarea: '' })
  // const [warn, setWarn] = useState('')
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   // if (text.email.split('@')[0].length < 1) {
  //   //   setWarn('ad')
  //   // }
  //   // console.log(warn);
  //   // console.log(text.email.split('@')[0].length);

  // }

  // const onChangeEmail = (e) => {
  //   setText({ ...text, [e.target.name]: e.target.value })
  // }
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form
        // onSubmit={submitHandler} 
        className="contactForm" >
        <input type="text" name="" id="" placeholder="Your Name" />
        <input
          // onChange={onChangeEmail}
          type="email" name="email" id=""
          // value={text.email}
          placeholder="Your Email" required />
        <textarea
          // onChange={onChangeEmail}
          name="textarea" id="" cols="30" rows="10"
          // value={text.textarea}
          placeholder="your message" ></textarea>
        <input type="submit" value="Send Message" />
      </form>
      <p id="warn">{warn}</p>
    </div>
  )
}

export default Contact
