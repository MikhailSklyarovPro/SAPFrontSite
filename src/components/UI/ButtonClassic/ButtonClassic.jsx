import Button from '@mui/material/Button';
import React from 'react';
import './ButtonClassic.scss';

export const ButtonClassic = ({ onClick, text, ...props }) => {
  return (
    <Button variant="contained" onClick={onClick} style={props}>{text}</Button>
  )
}
