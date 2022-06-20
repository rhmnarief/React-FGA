import React from 'react'
import Button  from '@mui/material/Button';

const ButtonComp = ({title, name, type, onClick}) => {
  return (
    <Button variant="contained" name={name} onClick={onClick} type={type} >{title}</Button>
  )
}

export default ButtonComp
