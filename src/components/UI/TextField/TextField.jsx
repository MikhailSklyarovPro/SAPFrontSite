import { useState } from 'react';
import './TextField.scss';

export const TextField = ({ placeholder, id, maxLength, ...props }) => {
    const [activeField, setActiveField] = useState(false);
    const [valuePassword, SetValuePassword] = useState("");

    return (
        <div className='wrapperTextField' onFocus={() => setActiveField(true)} onBlur={() => setActiveField(false)}>
            <label htmlFor={id} className={activeField ? 'activeTexfield' : valuePassword !== '' ? 'notActiveTextfieldAndNotNull' : 'notActiveTextfield'}>{placeholder}</label>
            <input maxLength={maxLength} id={id} type='text' onChange={(event) => SetValuePassword(event.target.value)} autoComplete="off" />
        </div>
    )
}