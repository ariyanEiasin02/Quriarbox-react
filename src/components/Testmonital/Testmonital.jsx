import React from 'react'
import iconpart from '../../assets/Quote icon.png'
import testmoital from '../../assets/testmonital.png'
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testmonital = () => {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows:false
      };
  return (
    <div>
        <section id='testmonital' className='py-16'>
            <div className="max-w-container mx-auto">
                <div className="text-center relative">
                    <h2 className='font-raleway text-bold md:text-3xl text-xl text-pramary'>TESTIMONIAL</h2>
                    <h3 className='font-raleway font-extrabold md:text-3xl text-2xl text-service'>Our Awesome Clients</h3>
                    <div className="absolute top-[-18%] left-[2%] md:left-[26%] sm:left-[19%]">
                        <img className="h-20" src={iconpart} alt="logo" />
                    </div>
                </div>
               <Slider {...settings} className="md:w-[65%] rounded-xl w-[90%] mx-auto">
               <div  className="bg-white px-10 py-10 rounded-xl w-[65%] mx-auto mt-16">
                    <h3 className='font-raleway text-bold text-2xl text-pramary'>Fantastic service!</h3>
                    <p className='font-light text-base font-raleway bannerpara py-2'>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                    <div className="md:flex justify-between items-center">
                        <div>
                            <ul className='flex gap-x-2'>
                                <li className='text-pramary text-base'><FaStar/></li>
                                <li className='text-pramary text-base'><FaStar/></li>
                                <li className='text-pramary text-base'><FaStar/></li>
                                <li className='text-pramary text-base'><FaStar/></li>
                                <li className='text-pramary text-base'><FaStar/></li>
                            </ul>
                        </div>
                        <div className="flex md:justify-between items-center gap-x-2 mt-4">
                            <div className="">
                            <h6 className="font-raleway font-bold text-base">Yves Tanguy</h6>
                            <p className="font-raleway font-normal text-base">Chief Executive, DLF</p>
                            </div>
                            <div className="w-10 h-10">
                                <img className='rounded-full' src={testmoital} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-10 py-10 rounded-xl w-[65%]!important mx-auto mt-16">
                    <h3 className='font-raleway text-bold text-2xl text-pramary'>Fantastic service!</h3>
                    <p className='font-light text-base font-raleway bannerpara py-2'>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                    <div className="md:flex justify-between items-center">
                        <div>
                            <ul className='flex gap-x-2'>
                                <li className='text-pramary text-base'><FaStar/></li>
                                <li className='text-pramary text-base'><FaStar/></li>
                                <li className='text-pramary text-base'><FaStar/></li>
                                <li className='text-pramary text-base'><FaStar/></li>
                                <li className='text-pramary text-base'><FaStar/></li>
                            </ul>
                        </div>
                        <div className="flex md:justify-between items-center gap-x-2 mt-4">
                            <div className="">
                            <h6 className="font-raleway font-bold text-base">Yves Tanguy</h6>
                            <p className="font-raleway font-normal text-base">Chief Executive, DLF</p>
                            </div>
                            <div className="w-10 h-10">
                                <img className='rounded-full' src={testmoital} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-10 py-10 rounded-xl w-[65%]!important mx-auto mt-16">
                    <h3 className='font-raleway text-bold text-2xl text-pramary'>Fantastic service!</h3>
                    <p className='font-light text-base font-raleway bannerpara py-2'>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                    <div className="md:flex justify-between items-center">
                        <div>
                            <ul className='flex gap-x-2'>
                                <li className='text-pramary text-base'><FaStar/></li>
                                <li className='text-pramary text-base'><FaStar/></li>
                                <li className='text-pramary text-base'><FaStar/></li>
                                <li className='text-pramary text-base'><FaStar/></li>
                                <li className='text-pramary text-base'><FaStar/></li>
                            </ul>
                        </div>
                        <div className="flex md:justify-between items-center gap-x-2 mt-4">
                            <div className="">
                            <h6 className="font-raleway font-bold text-base">Yves Tanguy</h6>
                            <p className="font-raleway font-normal text-base">Chief Executive, DLF</p>
                            </div>
                            <div className="w-10 h-10">
                                <img className='rounded-full' src={testmoital} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
               </Slider>
            </div>
        </section>
    </div>
  )
}

export default Testmonital