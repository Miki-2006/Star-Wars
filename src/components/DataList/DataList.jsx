import React from 'react'
import DataItem from '../DataItem'
import Loading from 'react-loading';

const DataList = ({data, path}) => {
  return (
    <div className='data_items'>
      {data.length === 0 ? <div className='spinner'> <Loading  className='spin' width={50} height={50} color='gold' type='spin'/> </div> : ''}
    <ul>
        
        {
            data.map((el, idx) => (
                <DataItem  key={idx} dataObj={el} path={path} idx={idx}>
                    
                </DataItem>
            ))
        }
    </ul>
    </div>
  )
}

export default DataList