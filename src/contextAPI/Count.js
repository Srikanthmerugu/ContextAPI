import React, { useContext } from 'react'
import {store} from './ContextAPI'
import AddData from './AddData'

const Count = () => {
    const [data , setData] = useContext(store)
    console.log(data,"2345678")
  return (
    <div className='card mb-4'>
        <div className='card-body'>
      
            <h5 className="card-title text-danger">Total Items:{data.length}</h5>
        </div>
        <AddData />

    </div>

  )
}

export default Count