import React from 'react'

import { useState, useEffect } from 'react'

import about01 from '../../assest/abt-1.png'
import about02 from '../../assest/abt-2.png'
import about03 from '../../assest/abt-3.png'

import {AiFillEye} from 'react-icons/ai'
import {motion} from 'framer-motion'
import  {appWrap} from '../../wrapper'
import './Work.scss'

const Work = () => {

  const works = [
    {
      imgUrl: about01,
      name: "",
      projectLink: "https://arascos.vercel.app",
      description: "With a user-friendly interface and Stripe's secure payment processing, this an ideal solution for businesses looking to streamline their online payment systems.",
      title: "Web App"
    },
    {
      imgUrl: about02,
      name: "",
      projectLink: "https://frixbuy.netlify.app",
      description: "built an eCommerce site with JS, HTML, and CSS that provides a fast shopping experience for customers. This project demonstrates my expertise in creating user-friendly websites",
      title: 'web app'
    },
    {
      imgUrl: about03,
      name: "",
      projectLink: "https://fridax.netlify.app",
      description: "built a full responsive landpage and also using modern technologies to bring in great design and user experience with use of Threejs.",
      title: "Web App"
    },
  ]



  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})

  const [allWork, setAllWork] = useState(works)

  console.log(activeFilter)

  // useEffect((works) => {
  //   setAllWork(works)
  // }, [])

  console.log(allWork)
  

  const handleWorkFilter = function (item){

    setActiveFilter(item)
    setAnimateCard([{y: 100, opacity: 0}])

    setTimeout(()=>{
      setAnimateCard([{y:0, opacity: 1}])

      if(item === 'All'){
        
        setAllWork(works)
      }else{
        setAllWork(works.filter((work) => work.title.includes(item)))
        console.log(allWork)
      }
    }, 500)

  }
  return (
    <> 

      <h2 className="head-text">
      My Creative <span> Section</span> Portfolio</h2>

      <div className="app__work-filter">
        {
          ['web app', 'Mobile app','All'].map((item, index) => (
            <div
            key={index}
            onClick={()=>handleWorkFilter(item)}
            className={`app__work-filter-item app__flex ${activeFilter === item ? 'item-active': ''}`}>

              {item}

            </div>
          ))
        }
      </div>

      <motion.div
      animate={animateCard}
      transition={{duration: 0.5, delayChildren: 0.5}}
      className="app__work-portfolio"
      >
           {
              allWork && allWork.map((work, index) => (
                <div className="app__work-item app__flex" key={index}>
                  <div className="app__work-img app__flex">
                      <img src={work.imgUrl} alt={work.name} />

                      <motion.div
                      whileHover={{opacity: [0, 1]}}
                      transition={{duration:0.3, ease: 'easeInOut'}}
                      className="app__work-hover app__flex"
                      >

                        <a href={work.projectLink} target="_blank" rel='noreferrer'>
                          <motion.div
                          whileInView={{scale: [0, 1]}}
                             whileHover={{scale: [1, 0.9]}}
                             transition={{duration:0.3}}
                             className="app__flex"
                          >
                            <AiFillEye />
                          </motion.div>
                        </a>

                      </motion.div>
                  </div>

                    <div className="app__work-content app__flex">
                      <h4 className="bold-text">{work.title}</h4>
                      <p className="p-text" style={{marginTop: 10}}>{work.description}</p>
                    </div>
                </div>
              ))
           }
      </motion.div>
    
    </>
  )
}

export default appWrap(Work, "work")