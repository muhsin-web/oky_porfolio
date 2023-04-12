import React from 'react'

import { motion } from 'framer-motion'
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'
import { useState, useEffect } from 'react'
import {appWrap, motionWrap} from '../../wrapper/index'

import about03 from '../../assest/about03.png'
import about04 from '../../assest/about04.png'

import bra01 from '../../assest/amazon.png'
import bra02 from '../../assest/spotify.png'
import bra03 from '../../assest/bolt.png'
import bra04 from '../../assest/skype.png'

import './Testimonial.scss'



const Testimonial = () => {

  const testimonials = [
    {
      company: 'rashnoTech',
      name: 'ismail yusuf',
      img: about03,
      feedback: "muhsin is a great web developer "
    },
    {
      company: 'Bumbibee fs',
      name: 'rosemary jeffson',
      img: about04,
      feedback: "he has great sense of color and contrasting, i think that his niche of development "
    }
  ];

  const brands = [
    {
      name: 'RashnoTech',
      img: bra01,
      id: 1
    },
    {
      name: 'NobleTech & Co',
      img: bra02,
      id: 2
    },
    {
      name: 'ASUS',
      img: bra03,
      id: 3
    },
    {
      name: 'ASUS',
      img: bra04,
      id: 4
    }
  ]

  // const [brands, setBrands] = useState([])
  const [testimonial, setTestimonial] = useState()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = function(index){
    setCurrentIndex(index)
    console.log(currentIndex)
  }


  const test = testimonials[currentIndex]

  return (
    <>
       
              <div className="testimonial-item app__flex">
              <img src={test.img} alt="testimonail" />
              <div className="testimonial-content">
                <p className="p-text">{test.feedback}</p>
                <div>
                    <h4 className="bold-text">{test.name}</h4>
                  <h5 className="p-text">{test.company}</h5>
                </div>
              </div>
              </div>

              <div className="app__testimonial-btns app__flex">
              <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>

                <HiChevronLeft />
              </div>

              <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length -1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
              </div>

              <div className="app__testimonials-brand app__flex">
                {
                  brands.map((brand) => (
                    <motion.div
                    whileInView={{opacity: [0, 1]}}
                    transition={{duration: 0.5, type: 'tween'}}
                    key={brands.id}>

                      <img src={brand.img} alt={brand.name} />

                    </motion.div>
                  ))
                }
              </div>
    </>    
  )}


export default appWrap(motionWrap(Testimonial, 'app__testimonial'), 'testimonial', 'app__primarybg')

