import React from 'react'
import {useState} from 'react'
import {appWrap, motionWrap} from '../../wrapper'
import './Footer.scss'

import tel from '../../assest/mobile.png'
import email from '../../assest/email.png'

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isSunmitted, setIsSunmitted] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleChangeInput = function(){

  }
  const handleSubmit = function(){

  }
  return (
    <>

      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={email} alt="email" />
          <a href="mailto:muhsinabdulrasheed@gmail.com" className='p-text'>muhsinabdulrasheed@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <img src={tel} alt="email" />
          <a href="tel: +(234) 708 098 4437" className='p-text'>+(234) 708 098 4437</a>
        </div>
      </div>

      <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input type="text" placeholder='Your Name' name = 'name' className="p-text" />.
          </div>

          <div className="app__flex">
            <input type="email" placeholder='Your email' name = 'name' className="p-text" />.
          </div>
          <div>
            <textarea 
            // name={message}
            placeholder="Your message"
            className="p-text"
            // value={message}
            onChange={handleChangeInput} />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send message'}</button>
      </div>
    
    </>
  )
}

export default appWrap(motionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg')