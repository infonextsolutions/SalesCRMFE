import { getBasicIcon } from '@/utils/AssetsHelper';
import Navigator from '@/utils/customNavigator'
import React, { useState } from 'react'

const LeadProfileContainer = () => {
    const [activeTitle, setActiveTitle] = useState(0);
  function CallBack (childData:any){
        setActiveTitle(childData); 
        console.log(childData);
  }

  return (
    <div className="bg-white rounded-xl p-[25px] px-[35px] pt-[30px]">
        <Navigator
            callback = {CallBack}
            current={0}
            list={[
            {
                id:0,
                title:"DEAL INFO"
            },
            {
                id:1,
                title:"ACTIVITY HISTORY"
            },
            {
                id:2,
                title:"ATTACHMENTS"
            },
            {
                id:3,
                title:"COACHING"
            }
            ]}
        />
        <div className='flex justify-between'>
            <div className='text-black text-[14px] leading-[21px] mt-[25px] tracking-wide '>
                {activeTitle===0 && (
                    <div className=''>
                        <p className='mt-[20px] text-[#3F434A] font-medium'>Last Activity</p>
                        <p className='text-[#595F69]'>Email sent on 25 January 2023 4:55 PM</p>
                        <p className='mt-[20px] text-[#3F434A] font-medium'>Inquiry type</p>
                        <p className='text-[#595F69]'>Demo Requested</p>
                        <p className='mt-[20px] text-[#3F434A] font-medium'>Product/Service Type</p>
                        <p className='text-[#595F69]'>Product A</p>
                        <p className='mt-[20px] text-[#3F434A] font-medium'>Potential Deal Size</p>
                        <p className='text-[#595F69]'>Rs.11000</p>
                        <p className='mt-[20px] text-[#3F434A] font-medium'>Existing Budget</p>
                        <p className='text-[#595F69]'>Rs.8000</p>
                        <p className='mt-[20px] text-[#3F434A] font-medium'>Win Probability</p>
                        <p className='text-[#595F69]'>60%</p>
                        <p className='mt-[20px] text-[#3F434A] font-medium'>Next Action</p>
                        <p className='text-[#595F69]'>Requested Demo Meeting</p>
                        <p className='mt-[20px] text-[#3F434A] font-medium'>Interested Product/Service Type</p>
                        <p className='text-[#595F69]'>Product A as on 23 January 2023</p>
                    </div>
                )
                }
            </div>
            <div>
                <img
                    src={getBasicIcon("Edit")}
                    className={`w-[16px] h-[16px] cursor-pointer mt-[35px] mr-[30px]`}
                    alt=""
                />
            </div>
        </div>
    </div>
  )
}

export default LeadProfileContainer