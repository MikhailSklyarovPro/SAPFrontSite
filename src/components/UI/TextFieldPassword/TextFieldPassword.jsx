import { useState } from 'react';
import { Visibility, VisibilityOff } from '../../../img/Icons';
import './TextFieldPassword.scss';

export const TextFieldPassword = ({ placeholder, id, maxLength, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [activeField, setActiveField] = useState(false);
    const [valuePassword, SetValuePassword] = useState("");
    const [hiddenPassword, SetHiddenPassword] = useState("");

    let passwordBuffer = ""
    const handleMouseDownPassword = (event) => { event.preventDefault(); };

    const handleMouseUpPassword = (event) => { event.preventDefault(); };

    const enterPassword = (event) => {
        if (showPassword) {
            passwordBuffer = event.target.value
            if (event.nativeEvent.inputType === "deleteContentBackward" && valuePassword.length > 0) {
                SetValuePassword(valuePassword.slice(0, valuePassword.length - 1))
            } else {
                SetValuePassword(valuePassword + passwordBuffer[passwordBuffer.length - 1])
            }
            SetHiddenPassword(passwordBuffer)
        }
        else {
            let hiddenPasswordBuffer = "";
            passwordBuffer = event.target.value
            for (let i = 0; i < passwordBuffer.length; i++) {
                hiddenPasswordBuffer = hiddenPasswordBuffer + "*"
            }

            SetHiddenPassword(hiddenPasswordBuffer)
            if (event.nativeEvent.inputType === "deleteContentBackward" && valuePassword.length > 0) {
                SetValuePassword(valuePassword.slice(0, valuePassword.length - 1))
            } else {
                SetValuePassword(valuePassword + passwordBuffer[passwordBuffer.length - 1])
            }
        }
    };

    const clickEyeIcon = (event) => {
        event.preventDefault()
        if (!showPassword) {
            SetHiddenPassword(valuePassword)
        }
        else {
            let hiddenPasswordBuffer = "";
            for (let i = 0; i < valuePassword.length; i++) {
                hiddenPasswordBuffer = hiddenPasswordBuffer + "*"
            }
            SetHiddenPassword(hiddenPasswordBuffer)
        }
        setShowPassword(!showPassword);
    }

    return (
        <div className='wrapperTextField' onFocus={() => setActiveField(true)} onBlur={() => setActiveField(false)}>
            <label htmlFor={id} className={activeField ? 'activeTexfield' : valuePassword !== '' ? 'notActiveTextfieldAndNotNull' : 'notActiveTextfield'}>{placeholder}</label>
            <input maxLength={maxLength} id={id} type='text' value={hiddenPassword} onChange={(event) => enterPassword(event)} autoComplete="off" />
            <button
                onClick={(event) => clickEyeIcon(event)}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
            >
                {showPassword ? <VisibilityOff style={activeField ? { fill: "var(--color-light-blue)" } : { fill: "var(--color-grey)" }} /> : <Visibility style={activeField ? { fill: "var(--color-light-blue)" } : { fill: "var(--color-grey)" }} />}
            </button>
        </div>
    )
}
