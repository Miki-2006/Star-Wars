import React from 'react'
import LinkComponent from '../LinkComponent'

const Logo = () => {
  return (
    <div className='logo_class'>
      <LinkComponent path='/'>
        <b className='logo'>Star Wars</b>
      </LinkComponent>
    </div>
  )
}

export default Logo