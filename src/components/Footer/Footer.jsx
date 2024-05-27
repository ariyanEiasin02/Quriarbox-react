import React from 'react'
import footer from '../../assets/Logo (1).png'
const Footer = () => {
  return (
    <div>
        <section className='py-16 bg-footer'>
            <div className="max-w-container mx-auto">
                <div className="flex flex-wrap justify-between px-4 md:px-0">
                <div className="md:w-2/5 w-2/4">
                    <img className='md:w-[160px] w-[120px]' src={footer} alt="footer" />
                    <p className='mt-2 font-raleway w-4/5 md:w-[45%] font-normal text-base text-border mt-6 md:mt-0'>The most trusted Courier company in your area.</p>
                </div>
                    
                <div className="md:w-1/5 w-2/4  mt-4 md:mt-0">
                    <h3 className='font-raleway font-bold text-xl text-white'>Other links</h3>
                    <ul className='mt-4'>
                    <li className='mt-2'><a href="#" className='text-raleway font-normal text-base text-border'>Blogs</a></li>
                    <li className='mt-2'><a href="#" className='text-raleway font-normal text-base text-border'>Movers website</a></li>
                    <li className='mt-2'><a href="#" className='text-raleway font-normal text-base text-border'>Traffic Update</a></li>
                    </ul>
                </div>
                <div className="md:w-1/5 w-2/4 mt-4 md:mt-0">
                                <h3 className='font-raleway font-bold text-xl text-white'>Services</h3>
                                <ul className='mt-4'>
                                    <li className='mt-2'><a href="#" className='text-raleway font-normal text-base text-border'>Corporate goods</a></li>
                                    <li className='mt-2'><a href="#" className='text-raleway font-normal text-base text-border'>Artworks</a></li>
                                    <li className='mt-2'><a href="#" className='text-raleway font-normal text-base text-border'>Documents</a></li>
                                </ul>
                </div>
                 <div className="md:w-1/5 w-2/4 mt-4 md:mt-0">
                                <h3 className='font-raleway font-bold text-xl text-white'>Customer Care</h3>
                                <ul className='mt-4'>
                                    <li className='mt-2'><a href="#" className='text-raleway font-normal text-base text-border'>About Us</a></li>
                                    <li className='mt-2'><a href="#" className='text-raleway font-normal text-base text-border'>Contact US</a></li>
                                    <li className='mt-2'><a href="#" className='text-raleway font-normal text-base text-border'>Get Update</a></li>
                                </ul>
                </div>
            </div>
        </div>
                
        </section>
        {/* All rights Reserved © Your Company, 2021 */}
        <section className='py-4 bg-get'>
            <div className="max-w-container mx-auto">
               <div className="md:flex justify-between px-4 md:px-0">
                <div>
                    <p className='font-raleway font-normal text-base text-border'>All rights Reserved © Your Company, 2021</p>
                </div>
                <div className='pt-2 md:pt-0'>
                    <a href="#" className='font-raleway font-normal text-base text-border'>Made with heart by <span className='text-pramary'>ThemeWagon</span></a>
                </div>
               </div>
            </div>
        </section>
        {/* All rights Reserved © Your Company, 2021 */}
    </div>
  )
}

export default Footer