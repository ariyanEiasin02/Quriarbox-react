import React from 'react'
import { FaPlay } from "react-icons/fa";
import videoPlay from '../../assets/video.mp4'
const Video = () => {
  return (
    <>
        <section className='py-16'>
            <div className="max-w-container mx-auto">
                <div style={{background : "url(/src/assets/video.png)", backgroundRepeat : "no-repeat", backgroundPosition :"cover", backgroundSize:"center"}} className="py-28 w-[90%] mx-auto text-center rounded-xl">
                    <div className="mx-auto bg-red-500 leading-[3rem] w-12 h-12 text-center items-center rounded-full my-2">
                        <a href={videoPlay} className="text-white text-xl inline-block"><FaPlay className="inline-block"/></a>
                    </div>
                    <div className="">
                        <h2 className="font-raleway font-bold text-pramary text-3xl py-2">FASTEST DELIVERY</h2>
                        <p className="font-raleway font-normal text-base text-white sm:w-[50%] md:w-[34%] mx-auto">  You can get your valuable item in the fastest period of
                        time with safety. Because your emergency is our first priority.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Video