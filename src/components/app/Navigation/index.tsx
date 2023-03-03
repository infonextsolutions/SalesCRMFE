import Button, { ButtonProps } from "@/utils/Button/Button";
import React from "react";

const Navigation = ({ buttons }: NavigationProps) => {
  const arr = [];
  return (
    <div className="w-[100%] h-[100px] flex items-center ">
      <h1 className="w-[50%] text-[#3F434A] font-medium text-3xl">
        Sales-Manage{">"}Leads
      </h1>
      {buttons?.length && (
        <div className="w-[50%]">{buttons.map((item, i) => {
            return(
                <Button dropdown={false} text={item.text} id={item.id} key={i} />
            )
        })}</div>
      )}
    </div>
  );
};

export default Navigation;

interface NavigationProps {
  buttons:ButtonProps[];
  children?: JSX.Element[] | JSX.Element;
}