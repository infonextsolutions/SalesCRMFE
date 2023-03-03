import Navbar from "@/components/app/Navbar/Navbar";
import Sidebar from "@/components/app/Sidebar/Sidebar";
import React from "react";

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="w-full min-h-screen bg-[#f5f5f5] flex">
      <Sidebar />
      <div className="grow" >
        <Navbar />
      {children}
      </div>
    </div>
  );
};

export default HomeLayout;

interface HomeLayoutProps {
  children: JSX.Element[] | JSX.Element;
}