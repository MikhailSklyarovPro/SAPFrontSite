import React from "react";
import './Filter.scss'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export const Filter = ({isInput, isMulti, options, placeholder, ...props}) => {
    return(
        <Select 
            options={options}  
            components={animatedComponents}
            className="reactSelectContainer" 
            classNamePrefix="reactSelect"
            noOptionsMessage={() => 'Ничего не найдено'}
            loadingMessage={() => 'Идет поиск...'}
            placeholder={placeholder}
            isSearchable={isInput}
            isMulti={isMulti}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderRadius: '12px',
                    //width: '16vw',
                    //minWidth: '100px'
                }),
                placeholder: (baseStyles, state) => ({
                    ...baseStyles,
                    color: 'var(--color-light-grey)',
                    fontWeight: '300'
                }),
            }}
        />
    )
};

export default Filter
