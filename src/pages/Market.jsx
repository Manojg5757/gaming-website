import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addingToCart } from '../redux/cartSlice'
import { gamesData } from '../data/data';


const Market = () => {
  // const [games, setGames] = useState([]);
 const dispatch = useDispatch()


  // useEffect(() => {
  //   axios.get("http://localhost:3000/games")
  //     .then(res => {
  //       setGames(res.data)
        
  //     })
  //     .catch(err => console.log(err));  
  // }, []);

  const handleClick = (id) => {
    const newItem = gamesData.find(item => item.id === id);
    dispatch(addingToCart(newItem))
    
  }
  return (
    <div className=' mt-[20px] flex justify-center flex-wrap gap-[50px] max-w-[1200px] px-[20px] mx-auto'>{
      gamesData.map(({ title, img, id,price }) => {
        return (
          <div key={id} className='w-[200px] h-[200px] relative bg-white'>
            <img className='h-[100%] w-[100%]' src={img} alt="" />
            <div className='absolute bottom-0 left-2'>
              <h1 className='text-white'>{title}</h1>
              <p className='text-white'>{price}$</p>
            </div>
            <div  onClick={() => handleClick(id)}  className='absolute cursor-pointer bottom-0 right-2 bg-white h-[20px] w-[20px] flex items-center justify-center rounded-full p-1'>
              <FaCartPlus/>
            </div>
          </div>
        );
      })
    }</div>
  );
}

export default Market;
