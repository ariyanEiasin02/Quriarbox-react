import React from 'react'
const SerRap = (props) => {
    const {header,paragharap,imageUrl,btn} = props.userItems
   
  return (
    <div className="md:w-[30%] w-[90%] md:mx-0 mx-auto bg-white py-10 px-10 rounded-lg mt-14">
       <div className="">
        <div className="text-center">
        <img className="mx-auto" src={imageUrl} alt="Description of the image" />
        <h2 className="text-2xl font-raleway font-bold my-2">{header}</h2>
        </div>
        <p className='text-sm font-raleway font-light'>{paragharap}</p>
        <ul className='list-disc py-2'>
        <li className='text-base font-raleway font-light text-black mt-2'>{props.userItems.navLink.navLinkOne}</li>
        <li className='text-base font-raleway font-light text-black mt-2'>{props.userItems.navLink.navLinkTwo}</li>
        <li className='text-base font-raleway font-light text-black mt-2'>{props.userItems.navLink.navLinkThree}</li>
        </ul>
        <div className="hover:bg-pramary border-pramary border-2 border-solid rounded text-center mt-6">
        <a className='text-base py-2 px-4 w-full text-pramary font-raleway hover:text-white block font-medium ' href="#">{btn}</a>
        </div>
       </div>
    </div>
  )
}

export default SerRap