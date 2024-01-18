import Button from "@/utils/Button/Button";
import { Logout } from "@mui/icons-material";
import React from "react";

const NavigationWithoutTitle = ({ buttons }: any) => {
  return (
    <div className=" w-[18%] min-h-[40px] flex justify-end">
      {buttons?.length > 0 && (
        <div className="flex justify-end ">
          {buttons.map((item: any, i: number) => {
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

export default NavigationWithoutTitle;
