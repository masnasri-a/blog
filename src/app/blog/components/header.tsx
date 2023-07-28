import Image from 'next/image'
import React from 'react'
import Logo from '@/../public/ice-logo.svg'
import Button from './detail/button'

const Header = () => {
  return (
    <div className='header'>
        <Image src={Logo} alt='Logo' />
        <Button label="Login"/>
    </div>
  )
}

export default Header