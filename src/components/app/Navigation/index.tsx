import Button from "@/utils/Button/Button";
import { Logout } from "@mui/icons-material";
import React from "react";

const Navigation = ({ buttons, title, leftBtns, leftChildren }: any) => {
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
        </div>
      </div>
      {buttons?.length > 0 && (
        <div className="w-[50%] flex justify-end ">
          {leftChildren}

          {buttons.map((item: any, i: any) => {
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
