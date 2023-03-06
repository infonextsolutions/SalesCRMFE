import Button, { ButtonProps } from "@/utils/Button/Button";
import React from "react";

const Navigation = ({ buttons }: NavigationProps) => {
  const arr = [];
  return (
    <div className="w-[100%] h-[100px] flex items-center justify-between ">
      <h1 className="w-[50%] text-[#3F434A] font-medium text-3xl">
        Sales-Manage{">"}Leads
      </h1>
      {buttons?.length && (
        <div className="w-[50%] flex justify-end ">
          {buttons.map((item, i) => {
            return (
              <Button dropdown={item.dropdown} click={item.click} value={item.value} list={item.list} icon={item.icon} text={item.text} id={item.id} key={i} light={item.light} />
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
}