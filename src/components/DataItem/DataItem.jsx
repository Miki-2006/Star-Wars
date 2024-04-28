import React, { useEffect } from 'react'
import LinkComponent from '../LinkComponent'

const DataItem = ({dataObj, path, idx}) => {
  
  return (
    <li>
        <LinkComponent clas='item' path={`/${path}/${idx}`}>{dataObj.fields.name || dataObj.fields.starship_class || dataObj.fields.title}</LinkComponent> 
    </li>
  )
}
export default DataItem