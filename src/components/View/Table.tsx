import React from "react";
import Dashboard from "../leads/Dashboard/Dashboard";
import Header from "../leads/Header/Header";

const Table = ({ list }: TableProps) => {
  const arr = [1,2,3,4,5,6,7,8,9,10];

  return (
    <>
      <div className="mt-[0px] w-[100%]  overflow-x-auto  hide-scrollbar">
        <Header />
        {arr.map(() => {
          return <Dashboard />;
        })}
      </div>
    </>
  );
};

export default Table;

interface TableProps {
  list: {}[];
}
