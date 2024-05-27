import React from 'react'
import bannerImg from '../../assets/banner image.png'
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
  return (
    <>
        {/* Banner part start */}
        <section id='banner' className='md:pt-28 py-16 pl-4 md:0'>
            <div className="max-w-container mx-auto">
                <div className="md:flex md:justify-between items-center">
                    <div className="md:w-2/5 w-full">
                        <h1 className="font-normal font-raleway text-bannerText text-3xl md:text-5xl">A trusted provider of 
                        <br />
                        <span className="font-bold">courier services.</span></h1>
                        <p className="font-light text-base font-raleway bannerpara w-[78%] md:w-3/5 py-4">We deliver your products safely to your home in a reasonable time.</p>
                        <div className="mt-4">
                            <a href="#" className="bg-pramary py-4 px-6 rounded text-white font-raleway font-medium hover:bg-[#ffd580]">Get started <span><FaArrowRight className="inline-block text-base"/></span></a>
                        </div>
                    </div>
                    <div className="md:w-3/5 mt-10 md:mt-0 w-full">
                        <img className="" src={bannerImg} alt="banner" />
                    </div>
                </div>
            </div>
        </section>
        {/* Banner part end */}
    </>
  )
}

export default Banner