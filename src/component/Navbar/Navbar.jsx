import React from 'react'
import './Navbar.scss'
import { HiMenuAlt4, HiMoon, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import { useState } from 'react'



const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const darkMode = () => {
    
    // --font-base: "DM Sans", sans-serif;
    // --primary-color: #edf2f8;
    // --secondary-color: #313bac;
    // --black-color: #030303;ghth
    // --lightGray-color: #e4e4e4;
    // --gray-color: #6b7688;
    // --brown-color: #46364a;
    // --white-color: #ffffff;
    }

  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
            <img src='../../assest/Logo.png' alt="logo" />
        </div>

        <ul className="app__navbar-links">
            {['home', 'about', 'work', 'skills', 'contact'].map((items) => (
                <li className='app__flex p-text' key={`link-${items}`}>
                    <div />
                        <a className='app__flex p-text' href={`#${items}`}>{items}</a>
                </li>
            ))}
        </ul>

        <HiMoon onClick={darkMode}/>

        <div className="app__navbar-menu">
            <HiMenuAlt4 onClick = {() => setToggle(true)}/>
                {console.log(toggle)}
            {
                toggle && (
                    <motion.div
                    whileInView={{x: [300, 0]}}
                    transition={{duration: 0.85, ease: 'easeOut'}}
                    >
                        <HiX onClick={()=> setToggle(false)}/>
                        <ul>
                        {['home', 'wenn', 'work', 'skills', 'contact'].map((items) => (
                        <li key={items}>
                                <a onClick={()=> setToggle(false)} href={`#${items}`}>{items}</a>
                        </li>
                    ))}
                    </ul>
                    </motion.div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar