import React from 'react';
import { Link } from 'react-router-dom';
import globalConstants from '../../config/globalConstants';
import { useTheme } from '../../hooks/index.js';
import './CardSystem.scss';


export const CardSystem = ({ id, pathImg, colorBackground, header, description, ...props }) => {
    const { isDarkMode } = useTheme()
    console.log(isDarkMode)
    return (
        <Link to={globalConstants.routes.choiceSystem}>
            <div className="wrapperCardSystem">
                <div className={`logoCardSystem ${isDarkMode ? 'darkCardSystem' : ''}`} style={{ background: `${colorBackground}` }}>
                    <img src={require('../../img/imgForCardSystem/' + pathImg)} alt="Иконка системы" />
                </div>
                <div className='wrapperDescriptionCardSystem'>
                    <div>
                        <h3 className='headerCardSystem'>{header}</h3>
                        <p className='descriptionCardSystem'>{description.length > 200 ? description.substring(0, 197) + "..." : description}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
