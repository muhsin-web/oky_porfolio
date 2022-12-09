import React from 'react'

import { useState, useEffect } from 'react'

import about01 from '../../assest/about01.png'
import about02 from '../../assest/about02.png'
import about03 from '../../assest/about03.png'
import about04 from '../../assest/about04.png'

import {AiFillEye} from 'react-icons/ai'
import {motion} from 'framer-motion'
import  {appWrap} from '../../wrapper'
import './Work.scss'

const Work = () => {

  const works = [
    {
      imgUrl: about01,
      name: "",
      projectLink: "",
      description: "hello mr john this will b my first time here on the platform doing this great work",
      title: "UI/UX"
    },
    {
      imgUrl: about03,
      name: "",
      projectLink: "",
      description: "hello mr john this will b my first time here on the platform doing this great work",
      title: 'web app'
    },
    {
      imgUrl: about02,
      name: "",
      projectLink: "",
      description: "hello mr john this will b my first time here on the platform doing this great work",
      title: 'web app'
    },
    {
      imgUrl: about03,
      name: "",
      projectLink: "",
      description: "hello mr john this will b my first time here on the platform doing this great work",
      title: "UI/UX"
    },
    {
      imgUrl: about04,
      name: "",
      projectLink: "",
      description: "hello mr john this will b my first time here on the platform doing this great work",
      title: "Mobile app"
    },
    {
      imgUrl: about04,
      name: "",
      projectLink: "",
      description: "hello mr john this will b my first time here on the platform doing this great work",
      title: "React js"
    }
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
          ['UI/UX', 'web app', 'Mobile app', 'React js', 'All'].map((item, index) => (
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