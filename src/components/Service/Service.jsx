
import React from 'react'
import serImgOne from '../../assets/iCON.svg'
import serImgTwo from '../../assets/Icon2.svg'
import serImgThree from '../../assets/Icon3.svg'
const Service = () => {
    return (
        <>
            <section id='service' className='py-14'>
                <div className="max-w-container mx-auto">
                    <div className="text-center">
                        <h2 className='font-raleway text-bold text-3xl text-pramary'>SERVICES</h2>
                        <h3 className='font-raleway font-extrabold text-3xl text-service'>Our services for you</h3>
                    </div>
                    <div className="md:flex md:justify-between">
                        <div className="md:w-[30%] w-[90%] md:mx-0 mx-auto bg-white py-10 px-10 rounded-lg mt-14">
                            <div className="">
                                <div className="text-center">
                                    <img className="mx-auto" src={serImgOne} alt="Description of the image" />
                                    <h2 className="text-2xl font-raleway font-bold my-2">Business Services</h2>
                                </div>
                                <p className='text-sm font-raleway font-light'>We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
                                <ul className='list-disc py-2'>
                                    <li className='text-base font-raleway font-light text-black mt-2'>Corporate goods</li>
                                    <li className='text-base font-raleway font-light text-black mt-2'>Shipment</li>
                                    <li className='text-base font-raleway font-light text-black mt-2'>Corporate goods</li>
                                </ul>
                                <div className="hover:bg-pramary border-pramary border-2 border-solid rounded text-center mt-6">
                                    <a className='text-base py-2 px-4 w-full text-pramary font-raleway hover:text-white block font-medium ' href="#">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[30%] w-[90%] md:mx-0 mx-auto bg-white py-10 px-10 rounded-lg mt-14">
                            <div className="">
                                <div className="text-center">
                                    <img className="mx-auto" src={serImgTwo} alt="Description of the image" />
                                    <h2 className="text-2xl font-raleway font-bold my-2">Statewide Services</h2>
                                </div>
                                <p className='text-sm font-raleway font-light'>Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.</p>
                                <ul className='list-disc py-2'>
                                    <li className='text-base font-raleway font-light text-black mt-2'>Personal items</li>
                                    <li className='text-base font-raleway font-light text-black mt-2'>Percels</li>
                                    <li className='text-base font-raleway font-light text-black mt-2'>Documents</li>
                                </ul>
                                <div className="hover:bg-pramary border-pramary border-2 border-solid rounded text-center mt-6">
                                    <a className='text-base py-2 px-4 w-full text-pramary font-raleway hover:text-white block font-medium ' href="#">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[30%] w-[90%] md:mx-0 mx-auto bg-white py-10 px-10 rounded-lg mt-14">
                            <div className="">
                                <div className="text-center">
                                    <img className="mx-auto" src={serImgThree} alt="Description of the image" />
                                    <h2 className="text-2xl font-raleway font-bold my-2">Personal Services</h2>
                                </div>
                                <p className='text-sm font-raleway font-light'>You can trust us to safely deliver your most sensitive documents to the specific area in a short time.</p>
                                <ul className='list-disc py-2'>
                                    <li className='text-base font-raleway font-light text-black mt-2'>Gifts</li>
                                    <li className='text-base font-raleway font-light text-black mt-2'>Package</li>
                                    <li className='text-base font-raleway font-light text-black mt-2'>Documents</li>
                                </ul>
                                <div className="hover:bg-pramary border-pramary border-2 border-solid rounded text-center mt-6">
                                    <a className='text-base py-2 px-4 w-full text-pramary font-raleway hover:text-white block font-medium ' href="#">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service