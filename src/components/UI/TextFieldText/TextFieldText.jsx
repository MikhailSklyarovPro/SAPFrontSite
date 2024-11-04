import React from 'react'
import TextField from '@mui/material/TextField';

export const TextFieldText = ({placeholder, ...props}) => {
  return (
    <TextField id="outlined-basic" label={placeholder}/>
  )
}
