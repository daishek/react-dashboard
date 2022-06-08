import React from 'react'

const Button = ({ color, backgroundColor, text, borderRadius, size }) => {
  return( 
    <button type='button'
      style={{
        backgroundColor,
        color,
        borderRadius,
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >{text}</button>
  )
}

export default Button