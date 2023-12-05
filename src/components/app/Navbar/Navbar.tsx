import React, { useState, useRef } from "react";
import { getBasicIcon, getRoundedAvatar } from "@/utils/AssetsHelper";
import { useAppDispatch } from "@/store/store";
import { triggerMenu } from "@/store/UI";
import Image from "next/image";
import ButtonDropDown from "@/utils/Button/Button";
import { logout, setLoggedInStatus } from "@/store/auth";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import useUI from "@/hooks/useUI";
import { title } from "process";

const Search = ({ change }: any) => {
  const ref: any = useRef();
  return (
    <>
      <div
        className="h-[40px] relative border-[#ccc] border-[1px] rounded-[12px]  flex items-center"
        ref={ref}
      >
        <div className="grow h-[32px] px-[12px] ">
          <input
            type="text"
            onChange={change}
            className="w-[100%] h-[32px] bg-white outline-0 text-black "
            placeholder="Search Here..."
          />
        </div>
        <div className="h-[100%] w-[40px] px-[12px] flex items-center justify-center cursor-pointer ">
          <Image
            className="w-[100%] "
            src={getBasicIcon("Search")}
            alt=""
            // fill={true}
            width={30}
            height={30}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </>
  );
};

const Navbar = ({ mainTitle, title, src }: any) => {
  const { menuOpen } = useUI();
  const [view, setView] = React.useState(false);
  const dispatch = useAppDispatch();
  const state = useSelector((state: any) => state.auth);
  const router = useRouter();

  const [search, setSearch] = useState("");

  return (
    <div className="w-full h-[60px] border-b-[1px] border-[#eaebec]  bg-white flex items-center justify-between">
      <div className=" w-4/12 flex ">
        <div className="pr-9 flex justify-between gap-3">
          <Image
            src={src ? getBasicIcon(src) : getBasicIcon("Grid")}
            className="ml-[20px] cursor-pointer"
            alt=""
            // fill={true}
            style={{
              objectFit: "contain",
            }}
            width={20}
            height={40}
          />
          <div className="flex gap-2">
            <h1 className="text-lg font-semibold">{mainTitle}</h1>
            {title && (
              <div className="flex gap-2">
                <h1 className="text-lg font-semibold">{">"}</h1>
                <h1 className="text-lg font-semibold capitalize text-text-red">
                  {title}
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "w-6/12 flex justify-end items-center"
            : "w-9/12 flex justify-end items-center"
        }
      >
        <Search
          placeHolder="Search Here..."
          change={({ e }: any) => setSearch(e.target.value)}
          view={view}
        />
        <Image
          src={getBasicIcon("Bell")}
          className="ml-[20px] cursor-pointer"
          alt=""
          onClick={() => {
            dispatch(triggerMenu());
          }}
          // fill={true}
          style={{
            objectFit: "contain",
          }}
          width={20}
          height={40}
        />
      </div>
      <div className="flex w-[80px] h-[100%] pt-[14px] pb-[10px] justify-between mr-[50px]">
        {/* <Image
          src={getBasicIcon("Search")}
          className="pt-[7px] pb-[7px] cursor-pointer mx-[10px]"
          alt=""
          // fill={true}
          style={{
            objectFit: "contain",
          }}
          width={20}
          height={40}
        />
        <Image
          src={getBasicIcon("Bell-Notification")}
          className="pt-[7px] pb-[7px] cursor-pointer mx-[10px]"
          alt=""
          // fill={true}
          style={{
            objectFit: "contain",
          }}
          width={20}
          height={40}
        /> */}
        <div className="flex w-[400px] justify-around items-center border-l-[1px] ml-[10px] border-[#dcd4d4] ">
          <Image
            className="ml-[20px] h-[100%] cursor-pointer"
            src={getRoundedAvatar(1, 30)}
            alt=""
            // fill={true}
            style={{
              objectFit: "contain",
            }}
            width={30}
            height={40}
            // onClick={() => {
            //   dispatch(logout());
            //   dispatch(setLoggedInStatus(false));
            //   router.replace("/login");
            //   localStorage.clear();
            // }}
          />
          {/* <p className="text-black  cursor-pointer">Jane C.</p> */}
          {/* <div className="shrink-0 ml-[20px]">
            <p className="text-black  cursor-pointer">
              {state.user.name.split("@")[0]}
            </p>
          </div> */}
          <ButtonDropDown
            dropdown={true}
            list={[{ title: "Logout" }]}
            click={() => {
              dispatch(logout());
              dispatch(setLoggedInStatus(false));
              router.replace("/login");
              localStorage.clear();
            }}
            text={""}
            id={0}
            light={true}
            dark={false}
          />
          {/* <Image
            src={getBasicIcon("Arrow Down 1")}
            className="cursor-pointer"
            alt=""
            // fill={true}
            style={{
              objectFit: "contain",
            }}
            width={15}
            height={20}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
