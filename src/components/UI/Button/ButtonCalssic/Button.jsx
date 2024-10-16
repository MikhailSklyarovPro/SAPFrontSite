import React from 'react'
import './Button.scss'
import globalConstants from '../../../../config/globalConstants'
export const Button = ({onClick, text, typeButton, ...props}) => {
  return (
    <button className={`button ${typeButton == globalConstants.typeButton.classic ? "classic" : "link"}`} onClick={onClick} {...props}>{text}</button>
  )
}
