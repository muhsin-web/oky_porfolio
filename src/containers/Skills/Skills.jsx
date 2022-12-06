import React from 'react'

// import { useState, useEffect } from 'react'

import skill01 from '../../assest/html.png'
import skill02 from '../../assest/javascript.png'
import skill03 from '../../assest/flutter.png'
import skill04 from '../../assest/redux.png'
import skill05 from '../../assest/react.png'
import skill06 from '../../assest/css.png'
// import skill07 from '../../assest/figma.png'
// import skill08 from '../../assest/react.png'
import skill09 from '../../assest/typescript.png'
import skill1 from '../../assest/git.png'

import {motion} from 'framer-motion'
import ReactTooltip from 'react-tooltip';
import  {appWrap, motionWrap} from '../../wrapper'

import './Skills.scss'

const skill = [
  {
    name: 'HTML',
    img: skill01,
  },
  {
    name: 'CSS',
    img: skill06,
  },
  {
    name: 'javascript',
    img: skill02,
  },
  {
    name: 'flutter',
    img: skill03,
  },
  {
    name: 'redux',
    img: skill04,
  },
  {
    name: 'Nodejs',
    img: skill05,
  },
  {
    name: 'Typescript',
    img: skill09,
  },
  {
    name: 'Git',
    img: skill1,
  },
]

const experience = [
  {
    year: 2019,
    company: 'NobleTech & Co',
    name: 'frontend web developer',
    desc: "using vanila js to create responsive design works but on mobile and desktop view"
  },
  {
    year: 2021,
    company: 'RashnpTech',
    name: 'frontend web developer',
    desc: "using vanila js to create responsive design works but on mobile and desktop view"
  }
]

const Skills = () => {
  let bgColor;

  return (
    <>

      <h2 className="head-text">skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className='app__skills-list'>

          {
            skill.map((skill) => (
                <motion.div 

                  whileInView={{opacity: [0, 1]}}
                  transition={{duration: 0.5}}
                  className="app__skills-item app__flex"
                  key={skill.name}
                >

                <div className="app__flex" style={{backgroundColor:         bgColor}}>
                  <img src={skill.img} alt={skill.name} />
                  </div>

                  <p className="p-text">{skill.name}</p>
        
                </motion.div>
            ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
         { experience.map((work) => (
          <motion.div
          className='app__skills-exp-item'
          key={work.year}
          >
            <div className="app__skills-exp-year">{work.year}</div>

            <>
              <motion.div
               whileInView={{opacity: [0, 1]}}
               transition={{duration: 0.5}}
               className="app__skills-exp-work app__flex"
               data-tip
               data-for={work.name}
               key={work.name}
              >
                <h4 className="bold-text">{work.name}</h4>
                <p className="p-text">{work.company}</p>

              </motion.div>

              <ReactTooltip
                id={work.name}
                effect='solid'
                arrowColor='#fff'
                className='skills-tooltip'
              >
                {work.desc}

              </ReactTooltip>
            </>

            </motion.div>

          ))}

        </motion.div>
      </div>
    
    </>
  )
}

export default appWrap(motionWrap(Skills, 'app__skills'), "skills", "app__whitebg")
