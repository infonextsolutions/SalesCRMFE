import React from 'react';

const Navigator=({list,current}:NavigatorProps)=>{
    console.log(list);
    return(
        <>
        <div className='w-[100%] flex justify-between items-center text-black' >
            {list.map((item:any,i:any)=>{
                return (
                    <div className='pb-[10px] cursor-pointer active:border-b-4 focus:border-b-4 active:text-sky-400 text-[12px]' key={i}>
                    <p>{item.title}</p>
                    </div>
                )
                
            })

            }
        </div>
        </>
    )
}

export default Navigator;

interface NavigatorProps{
    list:any[] | any;
    current:Number;
}