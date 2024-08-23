import React, { useContext } from 'react'
import {store} from '../App';


const ComponentA = () => {
    const [data , setData] = useContext(store)
  return (
    <div className="card">Component A{data}</div>

  )
}

export default ComponentA