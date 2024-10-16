import React from 'react'
import './Title.scss'
import globalConstants from '../../../config/globalConstants'

export const Title = ({text, size, fontWeight, ...props}) => {
    const classTitle = `title ${size == globalConstants.size.large ? globalConstants.size.large
    :  size == globalConstants.size.medium ? globalConstants.size.medium
    :  size == globalConstants.size.small ? globalConstants.size.small
    : ""} ${fontWeight == globalConstants.fontWeight.bold ? globalConstants.fontWeight.bold 
    : fontWeight == globalConstants.fontWeight.regular ? globalConstants.fontWeight.regular
    : fontWeight == globalConstants.fontWeight.light ? globalConstants.fontWeight.light 
    : ""}`
    return (
        <p className={classTitle} {...props}>{text}</p>
    )
}

export default Title