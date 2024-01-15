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
import { useAppDispatch } from "@/store/store";
import { setError, setSuccess } from "@/store/ai";
import AuthFooter from "@/components/utils/AuthFooter";

const SignupSchema = Yup.object().shape({
  user: Yup.string().email("Invalid email").required("Required"),
  pass: Yup.string().required("No password provided."),
});

const ResetPassword = () => {
  const [show, setShow] = useState("password");
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");
  const [invalid, setInvalid] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { token } = router.query;

  const setLocalData = (id, Name, role, accessToken) => {
    localStorage.setItem("user-id", id);
    localStorage.setItem("user-name", Name);
    localStorage.setItem("user-role", role);
    localStorage.setItem("logged", "loggedIn");
    localStorage.setItem("access-token", accessToken);
  };

  const [logged] = useLocalStorage("logged", "loading");
  const [id] = useLocalStorage("user-id", "not-loaded");
  const [name] = useLocalStorage("user-name", "not-loaded");
  const [role] = useLocalStorage("user-role", "not-loaded");
  const [accessToken] = useLocalStorage("access-token", "no-token");

  const appDispatch = useAppDispatch();

  const submit = ({ user, pass, confirmPass }) => {
    setInvalid(false);
    const finalPayload = {
      email: user,
      newPassword: pass,
      confirmPassword: confirmPass,

      token: token,
    };
    axios
      .post(
        "https://sales365.trainright.fit/api/master-users/reset_password",
        finalPayload, { headers: { Authorization: accessToken } }
      )
      .then((res) => {
        if (res?.data?.success) {
          appDispatch(
            setSuccess({
              show: true,
              success: "Password updated successfully!",
            })
          );
          router.push("/login");
          // dispatch(
          //     setUser1({ _id: res.data?._id, User: res.data?.name, Role: res?.data?.role, accessToken: res?.data?.accessToken })
          // );
          // dispatch(setLoggedInStatus(true));
          // setLocalData(res.data?._id, res.data?.name, res?.data?.role, res?.data?.accessToken);
        } else {
          dispatch(
            setError({
              show: true,
              error: "Error occurred.",
            })
          );
        }
      })
      .catch((err) => {
        setInvalid(true);
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
            initialValues={{ user: "", pass: "", confirmPass: "" }}
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
                <form className=" items-center w-[86%] md:w-[28%] rounded-xl ml-8 md:ml-0  px-[3%] bg-[#ebb5ae42] ">
                  <div className="">
                    <h2 className="mt-[15px] text-[28px] let text-center font-bold tracking-wide text-gray-900">
                      Reset Your Password
                    </h2>
                  </div>
                  <div className="flex flex-col w-[100%] mt-[20px] h-[45px]">
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
                      <p className="block text-[#ff0000] text-start mt-[4px] mb-2 font-medium tracking-wide">
                        *{errors.user}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-[100%] mt-[10px] h-[45px]">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pr-3 pl-2 pt-3 flex items-center text-sm leading-5">
                        <Image
                          src={getBasicIcon("mdi_password-outline")}
                          alt="hide-icon"
                          width={18}
                          height={18}
                        />
                      </div>
                      <input
                        type={show}
                        id="password"
                        value={values.pass}
                        onBlur={handleBlur("pass")}
                        onChange={handleChange("pass")}
                        className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] pl-7 tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                        // className="border-b-[2px] text-base font-medium px-2 py-2 bg-white text-black outline-none focus:ring-0 focus:border-gray-600"
                        placeholder="Password"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 pt-2 flex items-center text-sm leading-5">
                        {show === "password" && (
                          <Image
                            src={getBasicIcon("Hide")}
                            alt="hide-icon"
                            width={25}
                            height={25}
                            onClick={() => {
                              setShow("text");
                            }}
                          />
                        )}

                        {show === "text" && (
                          <Image
                            src={getBasicIcon("Show")}
                            alt="hide-icon"
                            width={25}
                            height={25}
                            onClick={() => {
                              setShow("password");
                            }}
                          />
                        )}
                      </div>
                    </div>
                    {errors.user && touched.user && (
                      <p className="block text-[#ff0000] text-start mt-[4px] mb-2 font-medium tracking-wide">
                        *{errors.user}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-[100%] mt-[10px] h-[45px]">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pr-3 pl-2 pt-3 flex items-center text-sm leading-5">
                        <Image
                          src={getBasicIcon("mdi_password-outline")}
                          alt="hide-icon"
                          width={18}
                          height={18}
                        />
                      </div>
                      <input
                        type={showConfirmPassword}
                        id="confirmpassword"
                        value={values.confirmPass}
                        onBlur={handleBlur("confirmPass")}
                        onChange={handleChange("confirmPass")}
                        className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] pl-7 tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                        // className="border-b-[2px] text-base font-medium px-2 py-2 bg-white text-black outline-none focus:ring-0 focus:border-gray-600"
                        placeholder="Confirm Password"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 pt-2 flex items-center text-sm leading-5">
                        {showConfirmPassword === "password" && (
                          <Image
                            src={getBasicIcon("hide")}
                            alt="hide-icon"
                            width={25}
                            height={25}
                            onClick={() => {
                              setShowConfirmPassword("text");
                            }}
                          />
                        )}

                        {showConfirmPassword === "text" && (
                          <Image
                            src={getBasicIcon("show")}
                            alt="hide-icon"
                            width={25}
                            height={25}
                            onClick={() => {
                              setShowConfirmPassword("password");
                            }}
                          />
                        )}
                      </div>
                    </div>
                    {errors.user && touched.user && (
                      <p className="block text-[#ff0000] text-start mt-[4px] mb-2 font-medium tracking-wide">
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
                      Sign In
                    </button>
                  </div>
                  <div className="text-[gray] text-center pt-8 pb-2">
                    <Link href={"/login"}>
                      Go back to{" "}
                      <span
                        className="text-bg-red
                "
                      >
                        Login
                      </span>
                      .
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

export default ResetPassword;
