import React from 'react'
import { Link } from 'react-router-dom'

const LinkComponent = ({path, children, clas, onClick, key}) => {
  
  return (
    <Link onClick={onClick} key={key} className={clas} to={path}>{children}</Link>
  )
}

export default LinkComponent