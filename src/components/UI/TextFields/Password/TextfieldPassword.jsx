import React, {useState} from 'react'
import { EyeImg } from './Img/EyeImg.jsx'
import '../TextField.scss'

export const TextfieldPassword = ({placeholder, ...props}) => {
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const onToggle = (isVisiblePassword) => {
        if (isVisiblePassword){
            setType('text')
         } else {
            setType('password')
         }
    }

    return(
        <div className="wrapperTextfield">
            <input 
                placeholder={placeholder} 
                type={type} 
                className="textfield" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />
            <EyeImg onToggle={onToggle}/>
        </div>
    )
}
