import React from "react";
import { getBasicIcon, getRoundedAvatar } from "@/utils/AssetsHelper";
import { useAppDispatch } from "@/store/store";
import { triggerMenu } from "@/store/UI";
import Image from "next/image";
import ButtonDropDown from "@/utils/Button/Button";
import { logout, setLoggedInStatus } from "@/store/auth";
import { useSelector } from "react-redux";

const Navbar = () => {

  const dispatch = useAppDispatch();
  const state = useSelector((state: any) => state.auth);

  return (
    <div className="w-full h-[60px] border-b-[1px] border-[#eaebec]  bg-white flex items-center justify-between">
      <Image
        src={getBasicIcon("Menu")}
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
      <div className="flex w-[220px] h-[100%] pt-[14px] pb-[10px] justify-between mr-[50px]">
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
        <div className="flex w-[400px] justify-between items-center border-l-[1px] ml-[10px] border-[#dcd4d4] ">
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
          />
          <div className="shrink-0 ml-[20px]">
            <p className="text-black  cursor-pointer">
              {state.user.name.split("@")[0]}
            </p>
            {/* <p className="text-black  cursor-pointer">Jane C.</p> */}
          </div>
          <ButtonDropDown
            dropdown={true}
            list={[{ title: "Logout" }]}
            click={() => {
              dispatch(logout());
              dispatch(setLoggedInStatus(false));
              localStorage.clear();
            }}
            text={""}
            id={0}
            light={true}
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
