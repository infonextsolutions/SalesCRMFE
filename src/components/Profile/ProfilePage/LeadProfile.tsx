import React from "react";
import { getRoundedAvatar,getBasicIcon } from "@/utils/AssetsHelper";

const ProfilePage=()=>{

    return(
        <div className="flex flex-col" >
            <h1 className="text-black" >Manya will work here!</h1>
            <img src={getRoundedAvatar(1,30)} alt="" />
            <img src={getBasicIcon("Phone")} alt="" />
        </div>
    )
}

export default ProfilePage;