import Image from "next/image";
import React, { useState } from "react";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Logo from "@/components/app/Sidebar/SidebarLogo";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInStatus, setUser1 } from "@/store/auth";
import { useRouter } from "next/router";
import { Formik, setIn } from "formik";
import * as Yup from "yup";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { setMenuOptions } from "@/store/UI";
import axios from "axios";
import Link from "next/link";
import { setError, setSuccess } from "@/store/ai";
import { useAppDispatch } from "@/store/store";
import AuthFooter from "@/components/utils/AuthFooter";

const SignupSchema = Yup.object().shape({
  user: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const submit = ({ user }: any) => {
    const finalPayload = {
      email: user.toLowerCase(),
    };
    axios
      .post(
        "https://sales365.trainright.fit/api/master-users/forgotPassword",
        finalPayload
      )
      .then((res) => {
        if (res?.data?.success) {
          dispatch(
            setSuccess({
              show: true,
              success: "Check your email to Reset your password.",
            })
          );
          router.push("/login");
        }
      })
      .catch((err) => {
        dispatch(
          setError({
            show: true,
            error: "Error occurred.",
          })
        );
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white fixed w-[100%] h-[100%] z-1000000 top-0 left-0 ">
      <div className="w-[100%]">
        <div className="bg-white shadow-lg rounded-xl drop-shadow-2xl	 flex flex-col pt-7 items-center w-[100%] h-[94vh] ">
          <div className="w-[50%] rounded-tr-2xl hidden md:flex items-center justify-center rounded-br-2xl py-4 px-12">
            <Image
              src="/Images/Logo/login_image.jpg"
              alt=""
              // fill={true}
              style={{
                objectFit: "contain",
              }}
              width={200}
              height={350}
            />
          </div>
          <Formik
            initialValues={{ user: "", pass: "" }}
            onSubmit={submit}
            validationSchema={SignupSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <form className=" items-center w-[86%] md:w-[30%] rounded-xl ml-8 md:ml-0 pt-4  px-[4%] bg-[#ebb5ae42] ">
                  <div className="">
                    <h2 className="mt-[12px] text-[28px] text-center font-bold tracking-wide text-gray-900">
                      Recover Your Password
                    </h2>
                  </div>
                  <div className="flex flex-col w-[100%] mt-[20px] h-[65px]">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pr-3 pl-2 pt-2 flex items-center text-sm leading-5">
                        <Image
                          src={getBasicIcon("eva_email-outline")}
                          alt="hide-icon"
                          width={18}
                          height={18}
                        />
                      </div>
                      <input
                        type="text"
                        id="username"
                        value={values.user}
                        onBlur={handleBlur("user")}
                        onChange={handleChange("user")}
                        className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[6px] rounded-lg pl-7 tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                        // className="border-b-[2px] text-base font-medium px-2 py-2 bg-white text-black outline-none focus:ring-0 focus:border-gray-600"
                        placeholder="Email"
                      />
                    </div>
                    {errors.user && touched.user && (
                      <p className="block text-[#ff0000] text-start mt-[4px] mb-2 font-medium tracking-wide">
                        *{errors.user}
                      </p>
                    )}
                  </div>
                  <div className="py-1">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                      }}
                      type="submit"
                      className=" w-[100%] py-[7px] inline-block rounded-lg text-white font-semibold bg-bg-red hover:bg-[#ff7d6d] hover:border-bg-[#ff7d6d] "
                    >
                      Recover Password
                    </button>
                  </div>
                  <div className="text-[gray] pt-20 pb-2 flex justify-center">
                    <Link href={"/login"}>
                      Go back to <span className="text-bg-red">Login</span>.
                    </Link>
                  </div>
                </form>
              </>
            )}
          </Formik>
        </div>
        <AuthFooter />
      </div>
    </div>
  );
};

export default ForgotPassword;
