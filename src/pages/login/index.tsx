import Image from "next/image";
import React, { useState } from "react";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Logo from "@/components/app/Sidebar/SidebarLogo";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInStatus, setUser1 } from "@/store/auth";
import { useRouter } from "next/router";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [show,setShow] = useState("password");
  const dispatch = useDispatch();
  const router = useRouter();

  const submit = (e: any) => {
    // console.log(user, pass);
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

  const state = useSelector((state: any) => state.auth);
  React.useEffect(() => {
    if (state.isLoggedIn) {
      router.replace("/sales/open");
    }
  });
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
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                className="border  text-base px-2 py-2 bg-white rounded-[6px] text-black focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Enter Username"
              />
            </div>
            <div className="py-1 my-[20px]">
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="block text-black text-base mr-auto mb-2 font-medium tracking-wide"
                >
                  Password
                </label>
                {/* <input
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  type="password"
                  id="password"
                  className="border text-base px-2 py-2 bg-white rounded-[6px] text-black focus:outline-none focus:ring-0 focus:border-gray-600"
                  placeholder="Enter Password"
                /> */}
                <div className="relative">
                  <input placeholder="Enter Password" type={show} className="border text-base px-2 py-2 bg-white rounded-[6px] text-black 
                  focus:outline-none focus:ring-0 focus:border-gray-600 w-full" id="password" onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">

                    {show==="password"&&<svg className="h-6 text-gray-700 cursor-pointer opacity-60 w-[17px] h-[17px]" fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      onClick={()=>{setShow("text");}}
                      >
                      <path fill="currentColor"
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                      </path>
                    </svg>}

                    {show==="text"&&<svg className="h-6 text-gray-700 cursor-pointer opacity-60 w-[17px] h-[17px]" fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      onClick={()=>{setShow("password");}}
                      >
                      <path fill="currentColor"
                        d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z">
                      </path>
                    </svg>}

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
