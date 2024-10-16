import React from 'react'
import classes from './Icon.module.scss'

export const ClockIcon = () => {
  return (
    <svg className={classes.svgIcon} width="24" height="24" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.0001 5.49992V10.8568C11.0001 10.9409 11.0574 11.0142 11.139 11.0346L14.6668 11.9166M20.1668 10.9999C20.1668 16.0625 16.0627 20.1666 11.0001 20.1666C5.93749 20.1666 1.83344 16.0625 1.83344 10.9999C1.83344 5.93731 5.93749 1.83325 11.0001 1.83325C16.0627 1.83325 20.1668 5.93731 20.1668 10.9999Z" stroke="#3A65FF" strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default ClockIcon
