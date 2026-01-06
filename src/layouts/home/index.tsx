import Sidebar from "@/components/app/Sidebar/index";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const HomeLayout = ({ children }: any) => {
  const [width, setWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const resize = () => {
      setWidth(window.innerWidth);
    };
    resize();
    window.addEventListener("resize", resize, false);
    return () => window.removeEventListener("resize", resize, false);
  }, []);
  
  const State = useSelector((state: any) => state.auth);
  const router = useRouter();
  const noSidebarFor = ["/login", "/forgot-password", "/reset-password"];
  
  if (!isClient) {
    return (
      <div className="w-full min-h-screen bg-[#f5f5f5] flex" id="Home">
        <div className="overflow-auto h-screen w-full">
          {children}
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full min-h-screen bg-[#f5f5f5] flex" id="Home">
      {!noSidebarFor.includes(router.pathname) && <Sidebar />}
      <div
        className="overflow-auto h-screen"
        style={{
          width: width !== null ? width - 55 : "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
