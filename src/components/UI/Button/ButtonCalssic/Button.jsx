import Button from '@mui/material/Button';
import React from 'react';
import './Button.scss';

export const MyButton = ({ onClick, text, ...props }) => {
  return (
    <Button variant="contained">{text}</Button>
  )
}
