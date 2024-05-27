import React from 'react'
import AwardsRap from './AwardsRap'
const AwardsItems =[
    {  
      iconUrl : "/src/assets/LINE---COLOR.png", 
      number : "26+",
      awardHeter : "Awards won"      
    },
    {  
      iconUrl : "/src/assets/IconSpace_Map_24Px.png", 
      number : "65+",
      awardHeter : "States covered"      
    },
    {  
      iconUrl : "/src/assets/iconspace_Man_25px.png", 
      number : "689k+",
      awardHeter : "Happy clients"      
    },
    {  
      iconUrl : "/src/assets/iconspace_Cement Truck_25px.png", 
      number : "130M+",
      awardHeter : "Goods delivered"      
    },
    {  
      iconUrl : "/src/assets/iconspace_Business Bag_25px.png", 
      number : "130M+",
      awardHeter : "Business hours"      
    },
    {  
      iconUrl : "/src/assets/IconSpace_Map_24Px.png", 
      number : "65M+",
      awardHeter : "Business hours"      
    }
]
const Award = AwardsItems.map((items) => <AwardsRap awardItems={items}></AwardsRap>)
const Awards = () => {
  return (
    <div>
        <section id='awards' className='md:py-16 py-12'>
            <div className="max-w-container mx-auto">
                <div className="flex flex-wrap justify-between">
                    {Award}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Awards