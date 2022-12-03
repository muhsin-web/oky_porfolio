import React from 'react'
import './Navbar.scss'
import { HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import { useState } from 'react'



const Navbar = () => {

    const [toggle, setToggle] = useState(false)

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
                        {['home', 'about', 'work', 'skills', 'contact'].map((items) => (
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