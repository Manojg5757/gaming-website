import React, { useEffect, useRef } from 'react';
import hero from '../assets/hero-section.jpg';


const Hero = () => {
  

  return (
    <main className=' h-cal-vh flex flex-col gap-4 items-center justify-center px-4 max-w-[1200px]
    md:flex-row '>
      <div className='text-white text-center'>
         <h2 className='text-[26px]'>The <span className=' border-b-2 border-red-400'>BattleG</span>round</h2>
         <p className='text-[16px]'>Dive into epic adventures. Unleash your skills. Conquer worlds. Welcome to gaming paradise</p>
      </div>
      <div>
        <img src={hero} className=' border-l-2 border-b-2 border-white rounded-md' alt="" />
      </div>
    </main>
  );
}

export default Hero;
