import React from 'react'
import '../TextField.scss'

export const TextfieldClassic = ({placeholder, ...props}) => {
    return(
        <div className="wrapperTextfield">
            <input placeholder={placeholder} type="text" className="textfield"/>
        </div>
    )
}