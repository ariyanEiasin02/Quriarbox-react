import React from 'react'

const AwardsRap = (props) => {
    const {iconUrl,number,awardHeter} = props.awardItems
  return (
    <>
        <div className='items-center md:mt-0 mt-6 w-3/6 md:w-[16.65%]'>
            <img className="mx-auto h-14" src={iconUrl} alt="ami" />
            <p className='text-4xl text-center text-pramary font-bold font-raleway py-2'>{number}</p>
            <h3 className='font-raleway text-center font-normal text-xl'>{awardHeter}</h3>
        </div>
    </>
  )
}

export default AwardsRap