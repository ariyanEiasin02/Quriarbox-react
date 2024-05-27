import React from 'react'
import callback from '../../assets/Illustration.png'
import { RiSendPlaneFill } from "react-icons/ri";
const Callback = () => {
  return (
    <div>
        <section className='py-16'>
            <div className="max-w-container mx-auto">
                <div className="w-[65%] mx-auto">
                    <div className="md:flex justify-between">
                        <div className="md:w-3/6 w-full">
                            <img src={callback} alt="callback" />
                            <h3 className='text-pramary font-raleway py-2 font-bold text-xl md:text-base'>REQUEST A CALLBACK</h3>
                            <h2 className='text-black font-raleway font-bold text-2xl md:text-3xl'>We will contact in the shortest time.</h2>
                            <p className='font-raleway font-normal md:text-xl text-base text-navtext'>Monday to Friday, 9am-5pm.</p>
                        </div>
                        <div className="md:w-3/6 w-full">
                            <form action="">
                            <input className='font-raleway mt-6 md:mt-0 w-full py-4 px-6 rounded-xl border-2 border-solid border-border bg-transparent' type="text" placeholder='Name'/>
                            <input className='font-raleway w-full py-4 px-6 rounded-xl my-6 border-2 border-solid border-border bg-transparent' type="emaill" placeholder='Emaill'/>
                            <textarea className='font-raleway w-full py-4 h-36 px-6 rounded-xl mb-6 border-2 border-solid border-border bg-transparent' placeholder='Message' name="" id=""></textarea>
                            <div className="w-full rounded-xl bg-pramary hover:border-2 hover:border-solid hover:bg-transparent hover:border-border text-center mt-2">
                                <a href="#" className="text-white hover:text-black w-full block text-base py-4 px-6 font-raleway font-normal">Send Message <span><RiSendPlaneFill className="inline-block hover:text-black text-white"/></span></a>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Callback