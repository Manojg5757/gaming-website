import React from 'react'
import { newsData } from '../data/data'

const News = () => {
  return (
    <div className='news-container grid grid-cols-[1fr,2fr,1fr] max-w-[1200px] mx-auto px-[20px]'>
      <div className='text-white py-4 w-[70%] flex flex-col justify-self-center rounded-md  justify-between items-center bg-white gap-[20px] h-[300px] mt-[50%] sticky top-[70px]'>
        <p className='bg-customBlack px-4 py-1 w-[40%] text-center'>Trending</p>
        <p className='bg-customBlack px-4 py-1 w-full text-center'>Politics</p>
        <p className='bg-customBlack px-4 py-1 w-full text-center'>Sports</p>
        <p className='bg-customBlack px-4 py-1 w-full text-center'>Technologies</p>
        <p className='bg-customBlack px-4 py-1 w-full text-center'>Weather</p>
      </div>
      <div className='text-white'>
         {
          newsData.map((item)=>{
            return(
              <div key={item.id}>
                <h2 className='text-[30px]'>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            )
          })
         }
      </div>
      <div className=' h-cal-vh mt-[50%] flex flex-col items-center sticky top-[70px]'>
          <img className='h-[400px]' src='https://cdn.pixabay.com/photo/2023/01/27/02/53/fashion-cyberpunk-7747605_1280.jpg' alt="" />
          <p className='text-white'>50% OFF on Legacy Queen</p>
      </div>
    </div>
  )
}

export default News