import ButtonDropDown from "@/utils/Button/Button";
import SmallButton from "@/utils/Button/SmallButton";
import React from "react";
import Dashboard from "../leads/Dashboard/Dashboard";
import Header from "../leads/Header/Header";

const Table = ({ list }: TableProps) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="mt-[0px] w-[100%] h-[540px]  overflow-x-auto  hide-scrollbar">
        <Header />
        {arr.map(() => {
          return <Dashboard />;
        })}
      </div>
      <div className="flex h-[80px] items-center justify-between ">
        <div className="flex items-center">
          <ButtonDropDown
            width={80}
            text={"10"}
            id={1}
            light={true}
            dropdown={true}
            border={true}
            height={40}
            tight={true}
          />
          <p className="ml-[12px] text-norm text-[14px] font-medium tracking-wider">
            Showing 1-10 of 100
          </p>
        </div>
        <div className="flex mr-[10%]">
          <SmallButton leftDblIcon={true} theme={2} left={10} />
          <SmallButton leftIcon={true} theme={2} left={10} />
          <SmallButton text={"1"} theme={1} left={10} />
          <SmallButton text={"2"} theme={3}  />
          <SmallButton text={"3"} theme={3}  />
          <SmallButton text={"..."} theme={3} />
          <SmallButton text={"5"} theme={3} />
          <SmallButton RightIcon={true} theme={4} left={10} />
          <SmallButton RightDblIcon={true} theme={4} left={10} />
        </div>
      </div>
      <div className="h-[10px] w-full"></div>
    </>
  );
};

export default Table;

interface TableProps {
  list: {}[];
}
