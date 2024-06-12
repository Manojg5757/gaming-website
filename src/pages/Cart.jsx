import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeFromCart} from '../redux/cartSlice'

const Cart = () => {
  const cartItems = useSelector(state=>state.cart.data)
  const totalAmount = useSelector(state=>state.cart.totalAmount)
  const dispatch = useDispatch()
  return (
    <div className='flex justify-center items-center flex-col gap-4 mt-[20px] px-[20px]'>
      
      {
        cartItems.map((item)=>{
          return(
            <div key={item.id} className='text-white  flex items-center gap-4 w-[100%] sm:w-[70%] md:w-[40%]'>
              <div className='w-[50%] flex justify-end'>
              <img className='h-[100px] w-[100px] rounded-md sm:h-[200px] sm:w-[200px] ' src={item.img} alt="" />
              </div>
              <div className='w-[50%]'>
              <h1 className='text-[18px sm:text-[26px]'>{item.title}</h1>
              <p className='text-[14px] sm:text-[18px]'>Quantity:{item.quantity}</p>
              <p className='text-[14px] sm:text-[18px]'>Price:${item.price}</p>
              <button onClick={()=>dispatch(removeFromCart(item.id))} 
              className='bg-white  mt-2 text-[10px] sm:text=[15px] md:text-[20px] rounded-md border-none flex justify-center items-center px-2 text-black'>
                remove
                </button>
              </div>
            </div>
          )
        })
      }
      <div className='text-white h-[150px] w-[80%]  sm:w-[70%] md:w-[40%] mb-[20px] rounded-md border-2 border-white flex flex-col justify-center items-center gap-4'>
        <h2 className='text-[20px]'>Checkout</h2>
        <p className=' bg-blue-700 w-[80%] py-3 rounded-lg text-center'>Pay ${totalAmount}</p>
        <div className=' flex text-[8px]'>
          Paypal,
          Wire,
          Rupay Dollar
        </div>
      </div>
    </div>
  )
}

export default Cart