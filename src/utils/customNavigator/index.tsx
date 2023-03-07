import React from 'react';

const Navigator=({list,current}:NavigatorProps)=>{

    return(
        <>
        <div className='w-[100%] flex justify-between items-center' >

        </div>
        </>
    )
}

export default Navigator;

interface NavigatorProps{
    list:any[] | any;
    current:Number;
}