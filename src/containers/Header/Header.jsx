import React from 'react'
import './Header.scss'
import {motion} from 'framer-motion'

import { appWrap } from '../../wrapper'

import Images from '../../assest/profile.png'
import image_1 from '../../assest/circle.svg'
import image_flutter from '../../assest/flutter.png'
import image_redux from '../../assest/redux.png'
import image_sass from '../../assest/sass.png'


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id='home' className="app__header app__flex">
        <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5}}
        className="app__header-info"
        >

          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>🖐</span>
              <div style={{marginLeft: 20}}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Muhsin</h1>
              </div>
            </div>

            <div className="tag-cmp app__flex">
              <p className="p-text">Web Developer</p>
              <p className="p-text">Freelancer</p>
            </div>
          </div>
        
        </motion.div> 

        <motion.div
         whileInView={{opacity: [0, 1]}}
         transition={{duration: 0.5, delayChildren: 0.5}}
         className="app__header-img"
        >
          <img src={Images} alt="profile_bg" />

          <motion.img
          whileInView={{scale: [0, 1]}}
          transition={{duration: 1, ease: 'easeInOut'}}
          src={image_1}
          alt="profile_cirlcle"
          className="overlay_circle"
          />
          
        </motion.div>
        
        <motion.div
              variant = {scaleVariants}
              whileInView = {scaleVariants.whileInView}
              className='app__header-circles new'
        >

          {
            [image_flutter, image_redux, image_sass].map(circle => (
              <div className="circle-cmp app__flex" key={`circle${circle}`}>
                <img src={circle} alt={circle} />
              </div>
            ))
          }

        </motion.div>

    </div>
  )
}

export default appWrap(Header, 'home');