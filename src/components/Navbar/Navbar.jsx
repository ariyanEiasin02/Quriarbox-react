import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import logo from '../../assets/Logo.png'
import { IoSearch } from "react-icons/io5";
import { IoMdClose  } from "react-icons/io";
import { FaBars } from "react-icons/fa";

const NavItems =[
    {label : "Home",link : "#banner"},
    {label : "Our services",link : "#service"},
    {label : "About Us",link : "#awards"},
    {label : "What’s new?",link : "#testmonital"},
]

const NavMap =NavItems.map((items) => <Nav key={items.label} userItems={items}></Nav>)

const Navbar = () => {
    const [show,setShow] = useState(false)
    const handleName = ()=>{
        setShow(!show)
    }
    const [scroll, setScroll] = useState(false);

useEffect(() => {
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 10);
  });
},[]);
  return (
    <div className={`bg-navbar py-4 ${ scroll ? "fixed top-0 left-0 w-full bg-white" : ""}`}>
       <div className="max-w-container mx-auto">
        <nav>
            <div className="flex justify-between items-center">
            <div className="w-1/5">
                <img src={logo} alt="logo" />
            </div>
            <div onClick={handleName} className="md:hidden">
                        {
                            show ? <i className="text-navtext text-xl"><IoMdClose/></i> : <i className="text-navtext text-xl"><FaBars/></i>
                        }
                    </div>
                <div className={`w-4/5 absolute md:static duration-300 ${show ? "top-[52px] sm:top-[68px] bg-white w-full left-0" : "-top-80 w-full left-0"}`}>
                    <div className="w-full py-6 md:py-0 md:flex items-center">
                    <ul className={`w-4/5 md:flex gap-x-6 px-4 justify-end`}>
                        {NavMap}
                    </ul>
                    <div className="md:w-1/5 md:flex items-center justify-end gap-x-4">
                    <div className="bg-[#ffedc9] rounded py-[12px] px-2 text-[#ffd580] w-8 mx-4 md:mx-0 mb-4 md:mb-0">
                        <i className="text-base font-raleway font-normal"><IoSearch/></i>
                    </div>
                    <div>
                        <button className="text-base font-raleway font-normal bg-[#ffe4d9] py-2 px-4 text-pramary rounded mx-4 md:mx-0"><a href="#find">Contact us</a></button>
                    </div>
                     </div>
                </div>
                
                </div>
            </div>
        </nav>
       </div>
    </div>
  )
}

export default Navbar


