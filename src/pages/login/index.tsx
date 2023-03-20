import Image from "next/image";
import React, { useState } from "react";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Logo from "@/components/app/Sidebar/SidebarLogo";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInStatus, setUser1 } from "@/store/auth";
import { useRouter } from "next/router";

const Login = () => {
  const [user,setUser] = useState("");
  const [pass,setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const submit=(e:any)=>{
    console.log(user,pass)
    e.preventDefault();
    if (user === "Admin@gmail.com" && pass === "1234") {
      dispatch(setUser1({ _id: 1, User: user, admin: true }));
      dispatch(setLoggedInStatus(true));
      router.push("/sales/open");
    } else if (user === "User@gmail.com" && pass === "1234") {
      dispatch(setUser1({ _id: 1, User: user, admin: false }));
      dispatch(setLoggedInStatus(true));
      router.push("/sales/open");
    }
  };

  const state = useSelector((state:any)=>state.auth)
  React.useEffect(()=>{
      if(state.isLoggedIn){
        router.replace("/sales/open");
      }
  })
  const pressShow = (e:any)=>{
    e.preventDefault();
    setShowPassword(!showPassword);
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-500 fixed w-[100%] h-[100%] z-1000000 top-0 left-0 ">
      <main className="flex flex-col items-center justify-center w-full flex-2 px-20 text-center">
        <div className="bg-white shadow-lg rounded-3xl shadow-3xl flex w-3/4 max-w-5xl">
          <form className="w-[50%] p-3 px-[10%]">
            <div className="text-left font-bold"></div>
            <div className="py-7">
              <h2 className="mt-4 text-center text-xl font-bold font-mono tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <div className="flex flex-col w-[100%] mt-[20px] ">
              <label
                htmlFor="username"
                className="block text-base mr-auto mb-2 text-[#000] font-medium tracking-wide"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                onChange={(e)=>{
                  setUser(e.target.value)
                }}
                className="border  text-base px-2 py-2 bg-white rounded-[6px] text-black focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Enter Username"
              />
            </div>
            <div className="py-1 my-[20px] relative">
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="block text-black text-base mr-auto mb-2 font-medium tracking-wide"
                >
                  Password
                </label>
                <button
                onClick={e => pressShow(e)}
                className="absolute right-1 bottom-1 focus:text-gray-500 text-sm font-semibold">{showPassword ? 'Hide' : 'show'}</button>
                <button className="absolute right-1 bottom-1 focus:text-gray-500 text-sm font-semibold" form="toggle">Hide</button>
               
             <input
                  type="showPassword ? text : password"
                  id="password"
                  className="border  text-base px-2 py-2 bg-white rounded-[6px] text-black focus:outline-none focus:ring-0 focus:border-gray-600"
                  placeholder="Enter Password"
                />
                <div className="py-1">
                  <div className="flex justify-between w-64 mb-5">
                    <a href="#" className="text-xs">
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </div>
              <button
                onClick={submit}
                className=" mt-[35px] w-[100%] rounded-[6px] py-[10px] inline-block text-white font-semibold bg-renal-blue hover:bg-[#5f6dc1] hover:border-[#5f6dc1] "
              >
                Sign In
              </button>
              <p className="text-[14px] tracking-wide my-2 text-[#000] font-medium ">
                  Don{"'"}t have an account?
                  <span className="text-blue-500 tracking-widest">
                    {" "}
                    SignUp
                  </span>
                </p>
            </div>
          </form>
          <div className="w-[50%] bg-gray-200 rounded-tr-2xl flex items-center justify-center rounded-br-2xl py-24 px-12">
            <Image
              src="/Images/Logo/Compact.svg"
              alt=""
              // fill={true}
              style={{
                objectFit: "contain",
              }}
              width={300}
              height={300}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;