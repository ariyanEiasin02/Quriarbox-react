
import React from 'react'
import SerRap from './SerRap'
const cardItems = [
    {   
        imageUrl : "/src/assets/iCON.svg",
        header : "Business Services",
        paragharap : "We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.",
        navLink :{
            navLinkOne : "Corporate goods",
            navLinkTwo : "Shipment",
            navLinkThree : "Corporate goods",
        },
        btn : "Learn more"
    },
    {   
        imageUrl : "/src/assets/Icon2.svg",
        header : "Statewide Services",
        paragharap : "Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.",
        navLink :{
            navLinkOne : "Personal items",
            navLinkTwo : "Percels",
            navLinkThree : "Documents",
        },
        btn : "Learn more"
    },
    {   
        imageUrl : "/src/assets/Icon3.svg",
        header : "Personal Services",
        paragharap : "You can trust us to safely deliver your most sensitive documents to the specific area in a short time.",
        navLink :{
            navLinkOne : "Gifts",
            navLinkTwo : "Package",
            navLinkThree : "Documents",
        },
        btn : "Learn more"
    }
]
const ban = cardItems.map((items) => <SerRap userItems={items}></SerRap>)
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
                {ban}
            </div>
        </div>
      </section>
    </>
  )
}

export default Service