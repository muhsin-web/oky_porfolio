import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
         {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((items, index) => (
                        <a
                        key={items + index}
                         className='app__navigation-dot'
                          href={`#${items}`}
                          style={active === items ? {backgroundColor: '#313BAC'} : { }}
                          > </a>
        ))}
    </div>
  )
}

export default NavigationDots