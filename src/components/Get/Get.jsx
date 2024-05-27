import React from 'react'

const Get = () => {
  return (
    <div>
        <section className='bg-get py-16'>
            <div className="max-w-container mx-auto">
                <div className="md:flex justify-between md:px-0 px-4">
                    <div className="md:w-3/5">
                        <h2 className='font-raleway text-white font-bold text-2xl'>Get an update every week</h2>
                        <p className='font-raleway text-border font-normal text-base md:w-[75%] mt-2'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
                    </div>
                    <div className="md:w-2/5 mt-6 md:mt-0">
                        <h3 className='font-raleway text-pramary font-bold text-base'>SUBSCRIBE TO NEWSLETTER</h3>
                        <div className="flex mt-4 gap-x-2">
                            <div className="">
                                <input className='font-raleway w-full py-2 px-6 rounded-xl border-2 border-solid border-border bg-transparent' type="email" placeholder='Enter your mail' />
                            </div>
                            <div className=" py-2 rounded-xl px-6 bg-pramary">
                                <a href="#" className="text-white text-base">Subscribe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Get