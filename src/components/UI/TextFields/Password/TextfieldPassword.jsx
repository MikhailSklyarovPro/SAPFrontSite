import React, { useState } from 'react';
import { EyeHiddenIcon, EyeVisibilityIcon } from '../../../../img/Icons.jsx';
import '../TextField.scss';

export const TextfieldPassword = ({ placeholder, ...props }) => {
    const [password, setPassword] = useState("");
    const [isVisiblePassword, ToggleVisiblePassword] = useState(false)

    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    const onToggle = () => {
        ToggleVisiblePassword(!isVisiblePassword)
    }

    return (
        <div className="wrapperTextfield">
            <input
                placeholder={placeholder}
                type="text"
                className="textfield"
                value={password}
                onChange={(event) => changePassword(event)}
            />

            <div className='eyeIcon' onClick={onToggle}>
                {isVisiblePassword ? <EyeHiddenIcon /> : <EyeVisibilityIcon />}
            </div>
        </div>
    )
}
