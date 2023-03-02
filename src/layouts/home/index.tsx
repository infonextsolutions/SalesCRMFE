import Navbar from "@/components/app/Navbar/Navbar";
import Sidebar from "@/components/app/Sidebar/Sidebar";
import React from "react";

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="w-full min-h-screen bg-[#f5f5f5]">
      <Sidebar />
      <div>
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default HomeLayout;

interface HomeLayoutProps {
  children: JSX.Element[] | JSX.Element;
}