import Image from "next/image";
import React from "react";
import { getBasicIcon } from "@/utils/AssetsHelper";


const Login=()=>{

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-500">
        <main className="flex flex-col items-center justify-center w-full flex-2 px-20 text-center">
           <div className="bg-white shadow-lg rounded-3xl shadow-3xl flex w-3/4 max-w-5xl">
               <div className="w-3/5 p-3">
                  <div className="text-left font-bold">
                  </div>
                  <div className="py-7">
                  <h2 className="mt-4 text-center text-xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                  </div>
                  <div className="flex flex-col items-center">
                  <label htmlFor="username" className="block text-base mr-auto mb-2">Username</label>
                  <input type="text" id="username" className="border w-64 text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username" />
                   </div>
                   <div className="py-1">
                   <div className="flex flex-col items-center">
                   <label htmlFor="password" className="block text-base mr-auto mb-2">Password</label>
                   <input type="text" id="password" className="border w-64 text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password" />
                     <div className="py-1">
                     <div className="flex justify-between w-64 mb-5">
                       <label className="flex itemscenter text-xs"><input type={"checkbox"} name={"remember"}
                       className="mr-1"/>Remember me</label>
                       <a href="#" className="text-xs">Forgot Password?</a>
                     </div>
                     <button className="border-2 border-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500">
                       Sign In
                       </button>
                     </div>
                     <p className="text-xs my-2">Don't have an account?<a href="#" className="text-blue-500"> SignUp</a></p>
                     </div>
                  </div>
                  </div>
               <div className="w-2/5 bg-gray-200 rounded-tr-2xl rounded-br-2xl py-36 px-12">
               <Image
                 className="flex w-full "
                 src="https://i.pinimg.com/originals/f0/a3/53/f0a35355f71fd745735066e19aaf1ba9.jpg"
                 width={500}
                 height={600}
                 alt=""
               />
                   </div>
           </div>
       
        </main>
       </div>
       )
   }

export default Login;