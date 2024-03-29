import React from 'react'
import { motion } from 'framer-motion'
// import { useState, useEffect } from 'react'
import './About.scss'

import { appWrap, motionWrap } from '../../wrapper'

import about01 from '../../assest/about01.png'
import about02 from '../../assest/about02.png'
import about03 from '../../assest/about03.png'
import about04 from '../../assest/about04.png'


const about = [
  {title: 'web development', description: "I don't just build website, i build website that sells", imgUrl: about01},
  {title: 'web Designer', description: "We always have the interest of our client in mind for suitable and convinient usage.", imgUrl: about02},
  {title: 'UI/UX', description: "Creating designs that suit what the user or clients are requesting for with great user experience.", imgUrl: about04},
  {title: 'web Animations', description: "Making our webpages fun to stay around and keep surfing through with creative animations.", imgUrl: about03}
]

const About = () => {
  return (
   <>
      <h2 className="head-text">
        I Know that 
        <span> Good Design </span> <br />
        means 
        <span> Good Business </span>
      </h2>

      <div className='app__profile'>
        {
          about.map((about, index) => (
            <motion.div

            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title}      
            >

              <img src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
              <p className="p-text" style={{marginTop: 10}}>{about.description}</p>

            </motion.div>
          ))
        }
      </div>
   </>
  )
}

export default appWrap(motionWrap(About, 'app__about'), "about", 'app__whitebg')