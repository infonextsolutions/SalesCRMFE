import { getBasicIcon } from "@/utils/AssetsHelper";
import Button, { ButtonProps } from "@/utils/Button/Button";
import { Logout } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

const NavigationWithEditAndDeleteButtons = ({
  buttons,
  title,
}: NavigationProps) => {
  console.log(buttons);
  const arr = [];
  return (
    <div className="w-[100%] min-h-[100px] flex items-center justify-between">
      <div className="flex w-[50%] gap-6 items-center">
        <h1 className=" text-[#3F434A] font-medium text-3xl">{title}</h1>
        <div className="flex gap-1">
          <Image
            className="cursor-pointer"
            src={getBasicIcon("Edit")}
            alt=""
            // fill={true}
            width={25}
            height={25}
            style={{
              objectFit: "contain",
            }}
          />{" "}
          <Image
            className="cursor-pointer"
            src={getBasicIcon("Delete")}
            alt=""
            // fill={true}
            width={25}
            height={25}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      {buttons?.length > 0 && (
        <div className="w-[50%] flex justify-end ">
          {buttons.map((item, i) => {
            return (
              <Button
                dropdown={item.dropdown}
                click={item.click}
                value={item.value}
                list={item.list}
                icon={item.icon}
                text={item.text}
                id={item.id}
                onClick1={item.onClick1}
                key={i}
                light={item.light}
                dark={item.dark}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavigationWithEditAndDeleteButtons;

interface NavigationProps {
  buttons: ButtonProps[];
  children?: JSX.Element[] | JSX.Element;
  title: String;
}
