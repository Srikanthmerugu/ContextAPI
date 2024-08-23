import React, { useContext } from 'react'
import {store} from './ContextAPI'
import Count from './Count'

const Display = () => {
  const [data , setData] = useContext(store)
  console.log(data, "ssssssssssssssssssss")
  return (
    <div className='container'>
      <h1>Display Products</h1><Count />
      <div className='row'>
    {
      data.map((items , i ) => (
        <div className='col-md-4 mb-5' key={i}>
          <div className='card'>
          <img src={items.imageUrl} width='100%' height="250px"/>
        <div className='card-body'>
          <h3 className='text-info'>{items.name}</h3>
          <p>{items.description}</p>
          <p className='text-warning'>Price: {items.price}</p>
           </div>


          </div>

          <div>

            </div>

          </div>
      ))
    }
</div>
{/* <video width="640" height="360" controls autoplay loop muted poster="poster.jpg">
  <source src="video.mp4" type="video/mp4"/>
  <source src="video.ogg" type="video/ogg"/>
  Your browser does not support the video tag.
</video> */}


    </div>
  )
}

export default Display