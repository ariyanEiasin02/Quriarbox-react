import React from 'react'
import imgOne from '../../assets/LINE---COLOR.png'
import imgTwo from '../../assets/IconSpace_Map_24Px.png'
import imgThree from '../../assets/iconspace_Man_25px.png'
import imgFour from '../../assets/iconspace_Cement Truck_25px.png'
import imgFive from '../../assets/iconspace_Business Bag_25px.png'
import imgSix from '../../assets/IconSpace_Map_24Px.png'
 
const Awards = () => {
  return (
    <div>
      <section id='awards' className='md:py-16 py-12'>
        <div className="max-w-container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className='items-center md:mt-0 mt-6 w-3/6 md:w-[16.65%]'>
              <img className="mx-auto h-14" src={imgOne} alt="ami" />
              <p className='text-4xl text-center text-pramary font-bold font-raleway py-2'>26+</p>
              <h3 className='font-raleway text-center font-normal text-xl'>Awards won</h3>
            </div>
            <div className='items-center md:mt-0 mt-6 w-3/6 md:w-[16.65%]'>
              <img className="mx-auto h-14" src={imgTwo} alt="ami" />
              <p className='text-4xl text-center text-pramary font-bold font-raleway py-2'>65+</p>
              <h3 className='font-raleway text-center font-normal text-xl'>States covered</h3>
            </div>
            <div className='items-center md:mt-0 mt-6 w-3/6 md:w-[16.65%]'>
              <img className="mx-auto h-14" src={imgThree} alt="ami" />
              <p className='text-4xl text-center text-pramary font-bold font-raleway py-2'>689k+</p>
              <h3 className='font-raleway text-center font-normal text-xl'>Happy clients</h3>
            </div>
            <div className='items-center md:mt-0 mt-6 w-3/6 md:w-[16.65%]'>
              <img className="mx-auto h-14" src={imgFour} alt="ami" />
              <p className='text-4xl text-center text-pramary font-bold font-raleway py-2'>130M+</p>
              <h3 className='font-raleway text-center font-normal text-xl'>Goods delivered</h3>
            </div>
            <div className='items-center md:mt-0 mt-6 w-3/6 md:w-[16.65%]'>
              <img className="mx-auto h-14" src={imgFive} alt="ami" />
              <p className='text-4xl text-center text-pramary font-bold font-raleway py-2'>130M+</p>
              <h3 className='font-raleway text-center font-normal text-xl'>Business hours</h3>
            </div>
            <div className='items-center md:mt-0 mt-6 w-3/6 md:w-[16.65%]'>
              <img className="mx-auto h-14" src={imgSix} alt="ami" />
              <p className='text-4xl text-center text-pramary font-bold font-raleway py-2'>265K+</p>
              <h3 className='font-raleway text-center font-normal text-xl'>Business hours</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Awards