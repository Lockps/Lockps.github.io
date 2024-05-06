import React from 'react'
import './Video.css'

const Video = () => {
  return (
    <div className='Video-container'>
        <video className='Vid' autoPlay loop muted>
            <source src='/Shoe.mp4' type='video/mp4'/>
        </video>
    </div>
  )
}

export default Video
