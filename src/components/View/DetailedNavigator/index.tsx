import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React from "react";

const DetailedItem=({icon,title}:any)=>{
    return(
        <div className="flex mr-[40px] items-center" >
            <Image src={getBasicIcon(icon)} alt="" style={{objectFit:"contain"}} width={18} height={18} />
            <p className="text-text-norm text-[16px] font-medium ml-[8px]" >{title}</p>
        </div>
    )
}

const DetailedNavigator=()=>{

    return(
        <div className="w-[100%] h-[50px] flex translate-y-[-30px]" >
            <DetailedItem icon="corp" title="ABC Corp." />
            <DetailedItem icon="Calendar" title="January 24th 2023" />
            <DetailedItem icon="Time" title="3:00 PM" />
            <DetailedItem icon="time-1" title="30 Min." />
        </div>
    )
}

export default DetailedNavigator;