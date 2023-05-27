import React from 'react'
import "./button.css"
const Button = ({btnTitle}) => {
  return (
    <div>
      <button className='btn'>{btnTitle}</button>
    </div>
  )
}

export default Button
