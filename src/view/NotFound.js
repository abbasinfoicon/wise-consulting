import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <Link to='/' ><img src="assets/images/404-not-found.png" alt="" className='pageNotFound' /></Link>
    </div>
  )
}

export default NotFound