import Button, { ButtonProps } from "@/utils/Button/Button";
import { Logout } from "@mui/icons-material";
import React from "react";

const Navigation = ({ buttons, title, leftBtns, leftChildren }: NavigationProps) => {
  console.log(buttons);
  const arr = [];
  return (
    <div className="w-[100%] min-h-[100px] flex items-center justify-between">
      <div className="flex items-center gap-[30px]">
        <h1 className="w-[50%] text-[#3F434A] font-medium text-3xl">{title}</h1>
        <div className="w-[50%] flex justify-end ">
          {leftBtns?.map((item: any, i: number) => {
            return (
              <Button
                dropdown={item.dropdown}
                click={item.click}
                value={item.value}
                list={item.list}
                icon={item.icon}
                text={item?.text}
                id={item.id}
                onClick1={item.onClick1}
                key={i}
                light={item.light}
                dark={item.dark}
              />
            );
          })}
          {leftChildren}
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

export default Navigation;

interface NavigationProps {
  buttons: ButtonProps[];
  children?: JSX.Element[] | JSX.Element;
  title: String;
  leftBtns?: any;
  leftChildren?: any
}
