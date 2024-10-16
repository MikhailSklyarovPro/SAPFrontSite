import './ButtonMenu.scss'
import React from 'react'

export const ButtonMenu = ({children, onClick}) => {
  return (
    <button className="itemSideMenu" onClick={onClick}>
        {children}
    </button>
  )
}

export default ButtonMenu
