import React from 'react';

const Navigation=({children}:NavigationProps)=>{
    return(
        <div className='w-[100%] h-[50px]' >
            <h1 className='w-[30%]' >Routes</h1>
            <div className='w-50%' >{children}</div>
        </div>
    )
}

export default Navigation;

interface NavigationProps {
    children: JSX.Element[] | JSX.Element;
}