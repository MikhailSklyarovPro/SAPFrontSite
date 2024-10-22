import React from 'react'
import './Title.scss'

export const Title = ({text, className, ...props}) => {
    return (
        <p className={className} {...props}>{text}</p>
    )
}

export default Title