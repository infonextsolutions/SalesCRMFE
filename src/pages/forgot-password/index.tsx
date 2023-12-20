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
                "https://salescrmbe.onrender.com/api/master-users/forgotPassword",
                finalPayload
            )
            .then((res) => {
                console.log("================= forgot password ===============", res.data);
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
                console.log(err);
                dispatch(
                    setError({
                        show: true,
                        error: "Error occurred.",
                    })
                );
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white fixed w-[100%] h-[100%] z-1000000 top-0 left-0 ">
            <main className="flex flex-col items-center justify-center w-full flex-2 px-20 text-center"></main>
            <div className="bg-white shadow-lg rounded-xl drop-shadow-2xl	 flex flex-row items-center w-[100%] h-[100vh] ">
                <div className="w-[50%] rounded-tr-2xl hidden md:flex items-center justify-center rounded-br-2xl py-4 px-12">
                    <Image
                        src="/Images/Logo/login_image.jpg"
                        alt=""
                        // fill={true}
                        style={{
                            objectFit: "contain",
                        }}
                        width={400}
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
                            <form className=" items-center w-[86%] md:w-[36%] rounded-xl ml-8 md:ml-0  px-[4%] bg-[#ebb5ae42] ">
                                <div className="">
                                    <h2 className="mt-[15px] text-[20px] text-start whitespace-nowrap font-bold tracking-wide text-gray-900">
                                        Recover Your Password
                                    </h2>
                                </div>
                                <div className="flex flex-col w-[100%] mt-[20px] h-[95px]">
                                    <label
                                        htmlFor="username"
                                        className="block text-base mr-auto mb-2 text-[#000] font-medium tracking-wide"
                                    >
                                        Email
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pr-3 pl-2 pt-3 flex items-center text-sm leading-5">
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
                                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] pl-7 tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                                            // className="border-b-[2px] text-base font-medium px-2 py-2 bg-white text-black outline-none focus:ring-0 focus:border-gray-600"
                                            placeholder="Enter Username"
                                        />
                                    </div>
                                    {errors.user && touched.user && (
                                        <p className="block text-[#ff0000] text-start mt-[4px] mb-6 font-medium tracking-wide">
                                            *{errors.user}
                                        </p>
                                    )}
                                </div>
                                <div className="py-1 my-[10px]">
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleSubmit();
                                        }}
                                        type="submit"
                                        className=" mt-[30px] w-[100%] py-[10px] inline-block rounded-[15px] text-white font-semibold bg-bg-red hover:bg-[#ff7d6d] hover:border-bg-[#ff7d6d] "
                                    >
                                        Recover Password
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </Formik>
                <div className="text-[gray]">
                    <Link href={"/login"}>Go back to <span className="text-bg-red">Login</span>.</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
