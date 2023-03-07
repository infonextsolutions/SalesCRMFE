import React from "react";
import { getBasicIcon } from "@/utils/AssetsHelper";



const ProfilePage=()=>{

    return(
        <div>
            <div className="w-[25%] bg-white min-h-[175vh] rounded-[18px] overflow-hidden">
      <div className="w-[100%] h-[58px] flex items-center  px-[8px]"></div>
            <div className="flex -space-x-4 overflow-hidden">
            <div className="relative inline-flex items-start mr-10">
          </div> 
          <div className="flex items-center justify-between"></div>
          <div className="flex items-center">
         
    <img
        className="inline-block h-20 w-15 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
       alt=""
        />
         <div className="ml-2">
         <h2 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h2>
        <a href="#0" className="block text-sm font-medium hover:text-indigo-500">@Leslie Alexander</a>
        </div>
        </div>
        </div>
        <div className="mx-auto w-[90%] border-b border-gray-300 my-3"></div>
        <div className="py-1"></div>
        <h3 className="text-sm font-medium mt-5 ml-6">INFO</h3>
  <ul className="mt-2 mb-10 ml-4">
    <li className="px-2 mt-4"><strong className="font-medium mr-1">Phone</strong><a href="tel:+821023456789" className="block">+82 10 2345 6789</a></li>
    <li className="px-2 mt-4"><strong className="font-medium mr-1">E-mail</strong><a href="mailto:" className="block">aspiringfe@helloworld.com</a></li>
    <li className="px-2 mt-4"><strong className="font-medium mr-1">Location</strong><span className="block">Seoul, South Korea</span></li>
    <li className="px-2 mt-4"><strong className="font-medium mr-1">Social Media</strong>
    <div className="flex">
    <img
      src={getBasicIcon("Instagram")}
      className={`w-[20px] svg-grey mr-2`}
      alt=""
    />
    <img
      src={getBasicIcon("Twitter")}
      className={`w-[20px] svg-grey`}
      alt=""
    />
  </div>
        </li>
    </ul>
    <div className="mx-auto w-[90%] border-b border-gray-300 my-3"></div>
        <div className="py-1"></div>
        <h3 className="text-sm font-medium mt-5 ml-6">COMPANY INFO</h3>
  <ul className="mt-2 mb-10 ml-4">
    <li className="px-2 mt-4"><strong className="font-medium mr-1">Company Name</strong><a href="name" className="block">XYZ</a></li>
    <li className="px-2 mt-4"><strong className="font-medium mr-1">Comapny Address</strong><a href="address:" className="block">nothing</a></li>
    <li className="px-2 mt-4"><strong className="font-medium mr-1">Website Link</strong><span className="block"><a href="https://www.example.com">www.example.com</a></span></li>
    <li className="px-2 mt-4"><strong className="font-medium mr-1">Industry Type</strong><a href="industry:" className="block">IT Solutions</a></li>
    <li className="px-2 mt-4"><strong className="font-medium mr-1">Social Media</strong>
    <div className="flex">
    <img
      src={getBasicIcon("Facebook")}
      className={`w-[20px] svg-grey mr-2`}
      alt=""
    />
    <img
      src={getBasicIcon("Twitter")}
      className={`w-[20px] svg-grey`}
      alt=""
    />
  </div>
        </li>
    </ul>
    <div className="mx-auto w-[90%] border-b border-gray-300 my-3"></div>
        <div className="py-1"></div>
        <div className="flex items-center justify-between mt-2 ml-6">
  <h3 className="text-sm font-medium">OTHER CONTACTS</h3>
  <img
    src={getBasicIcon("Plus")}
    className="w-5 h-5 ml-2 mr-2"
    alt=""
  />
</div>
        </div>
        </div>
        
        

                  
                 
                 
             
                

        
            
            
       
       
        
        
    )
}

export default ProfilePage;