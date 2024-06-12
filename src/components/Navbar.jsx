import React, { useEffect, useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo_wheel from "../assets/logo-wheel.png";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";



import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";


const Navbar = () => {
  const totalItemsInCart = useSelector(state=>state.cart.totalItems)
  const [value,setValue] = useState()
  const [isOpen,setIsOpen] = useState(false)
 

  useEffect(() => {
    gsap.to("#wheel", {
      rotation: 360,
      duration: 1.5,
      repeat: -1,
      ease: "back.inOut",
    });
  }, []);


  return (
    <header className="h-[60px] bg-black sticky top-0">
      <nav className=" text-white h-[100%] flex items-center px-2 justify-between max-w-[1200px] mx-auto ">
        <NavLink to="/" className="relative flex">
          <img
            src={logo_wheel}
            id="wheel"
            alt=""
            className="h-[40px] w-[40px]  right-0 absolute"
          />
          <p className="z-[10]">Mortal Engines</p>
        </NavLink>
        <div className=" hidden sm:flex items-center bg-white h-[35px] rounded-[10px]">
          <FaSearchengin className="text-black ml-1 text-[20px]" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none p-1 h-[100%] bg-transparent text-black "
            value={value}
          />
        </div>
        <ul className={`transition duration-500 ease-in-out z-40 ${isOpen ?' translate-x-[0] ':'translate-x-[100%]'} flex flex-col gap-4 
        justify-center items-center text-black sm:transform-none sm:flex sm:text-white 
        fixed top-0 right-0 bg-white sm:bg-transparent w-[90%] 
        sm:w-auto h-[100vh] sm:h-auto sm:static sm:flex-row sm:gap-3`}>
          <li>
            <NavLink to="/news">News</NavLink>
          </li> 
          <li>
            <NavLink to="/market">Market</NavLink>
          </li>
          <li>
            <NavLink className="relative" to="/cart">
              Cart
              <p className="absolute h-[20px] w-[20px] bg-red-500 flex justify-center items-center rounded-full text-white top-[-12px] right-[-15px] ">
                {totalItemsInCart}
              </p>
            </NavLink>
          </li>
          <li className={`${isOpen ? 'absolute right-2 top-2' : 'hidden'}`} onClick={()=>setIsOpen(!isOpen)}><IoClose className="text-[40px]" /></li>
        </ul>
        <div className="sm:hidden" onClick={()=>setIsOpen(!isOpen)}>
          <RxHamburgerMenu className="text-white" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
