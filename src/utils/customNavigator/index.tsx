import React, { useState } from 'react';

const Navigator=({list,current,callback}:NavigatorProps)=>{
    // console.log(list);
    const [activeTitle, setActiveTitle] = useState(0);
    const handleOnClick = (id:any) => {
        setActiveTitle(id); 
        callback(id);
    };

    return(
        <>
        <div className='w-[1000px] flex justify-between items-center text-black border-b-2' >
            {list.map((item:any,i:any)=>{
                return (
                    <div 
                    className={`pb-[10px] cursor-pointer text-[14px] leading-[21px] font-medium text-[#595F69] text-bold  ${item.id===activeTitle ? 'text-[#304FFD] border-b border-b-[#304FFD]': ''}`}
                    key={i}
                    onClick={() => handleOnClick(item.id)}
                    >
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
    callback: Function;
}