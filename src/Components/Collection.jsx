import React from 'react'
import './Collection.css'

const urlcol = "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa151331-0d75-4744-8e47-cfb7ec0fdfb0/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B9%82%E0%B8%A3%E0%B9%89%E0%B8%94%E0%B8%A3%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89-invincible-3-KZFTMC.png"

const Collection = () => {
  return (
      <div className='Col-Container'>
            <div className='sug-pic'>
              <img src={urlcol}/>
            </div>
            <h1 className='sug-title'>Nike Invincible 3</h1>
            <h1 className='sug-price'>230 $</h1>
            <div className='Sug-Purchase'>Buy Now</div>
            <div className='sug-text'>See Our New</div>
            <div className='sug-text2'>Collection</div>
            <img src='/style2.png' className='sug-style'/>
            <img src='/style.jpg' className='sug-style2'/>
            <img src='/sug1.jpg' className='sug-style3'/>
    </div>
  )
}

export default Collection
