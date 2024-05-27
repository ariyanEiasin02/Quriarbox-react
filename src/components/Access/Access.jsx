import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineMailLock } from "react-icons/md";
import { FaFacebookF,FaInstagramSquare,FaTwitter,FaPhoneAlt } from "react-icons/fa";
const Access = () => {
  return (
    <>
        <section id='find' className='py-16'>
            <div className="max-w-container mx-auto">
                <div className="text-center">
                    <h2 className='font-raleway font-bold text-2xl text-pramary'>FIND US</h2>
                    <h2 className='font-raleway font-bold text-2xl text-black'>Access us easily</h2>
                </div>
                <div className="md:flex justify-between gap-x-4 mt-10">
                    <div className="md:w-3/5">
                    <iframe className='md:w-full w-[90%] mx-auto border-2 rounded-xl h-80 outline-none' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.59915521094!2d90.3654215!3d23.750952700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfeaac77cf97%3A0x56e8b5892d7e73df!2sMohammadpur%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1715520927292!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="md:w-2/5 w-[90%] mx-auto mt-10 md:mt-0 bg-white py-10 px-10 rounded-xl">
                        <h3 className='font-raleway font-bold text-xl text-black py-4'>Contact with us</h3>
                        <div className="flex py-2">
                            <i className='text-acces pt-2 font-bold'><FaLocationDot/></i>
                            <p className='font-raleway font-normal text-base pl-4 text-bannerText'>2277 Lorem Ave, San Diego, CA 22553</p>
                        </div>
                        <div className="flex py-2">
                            <i className='text-acces pt-2 font-bold'><IoTimeOutline/></i>
                            <p className='font-raleway font-normal text-base pl-4 text-bannerText'>Monday - Friday: 10 am - 10pm
                                <br /> Sunday: 11 am - 9pm</p>
                        </div>
                        <div className="flex py-2">
                            <i className='text-acces pt-2 font-bold'><MdOutlineMailLock/></i>
                            <p className='font-raleway font-normal text-base pl-4 text-bannerText'>info@quriarbox.com</p>
                        </div>
                        <div className="flex gap-x-4 mt-6">
                            <i className='text-base text-bannerpara hover:text-pramary'><FaFacebookF/></i>
                            <i className='text-base text-bannerpara hover:text-pramary'><FaInstagramSquare/></i>
                            <i className='text-base text-bannerpara hover:text-pramary'><FaTwitter/></i>
                        </div>
                    </div>
                </div>
                <div className="bg-pramary mx-auto py-4 rounded-xl mt-8 md:w-2/6 w-4/5 text-center">
                    <a href="#" className='font-raleway font-normal text-base text-white'><span><FaPhoneAlt className='inline-block' /></span> Call us to delivery  123-456789</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Access
