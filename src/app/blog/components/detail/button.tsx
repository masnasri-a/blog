import React from 'react'

const Button = (props:any) => {
  return (
    <button className='buttonGroup' type="button">{props.label}</button>
  )
}

export default Button