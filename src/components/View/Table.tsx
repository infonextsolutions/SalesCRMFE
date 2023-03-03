import React from "react";
import Dashboard from "../leads/Dashboard/Dashboard";
import Header from "../leads/Header/Header";

const Table = ({ list }: TableProps) => {
  return (
    <div className="mt-[10px] w-[100%]  overflow-x-auto hide-scrollbar">
      <div  className="flex" >
        <Header />
      </div>
      <div  className="flex" >
        <Dashboard/>
      </div>
      <div  className="flex" >
        <Dashboard/>
      </div>
      <div  className="flex" >
        <Dashboard/>
      </div>
      <div  className="flex" >
        <Dashboard/>
      </div>
      <div  className="flex" >
        <Dashboard/>
      </div>
      <div  className="flex" >
        <Dashboard/>
      </div>
      <div  className="flex" >
        <Dashboard/>
      </div>
      <div  className="flex" >
        <Dashboard/>
      </div>
      <div  className="flex" >
        <Dashboard/>
      </div>
    </div>
  );
};

export default Table;

interface TableProps {
  list: {}[];
}
