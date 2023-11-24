import Navbar from "@/components/app/Navbar/Navbar";
import Sidebar from "@/components/app/Sidebar/index";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };
    resize();
    window.addEventListener("resize", resize, false);
  });
  const State = useSelector((state: any) => state.auth);
  const router = useRouter();
  return (
    <div className="w-full min-h-screen bg-[#f5f5f5] flex" id="Home">
      {router.pathname !== "/login" && <Sidebar />}
      <div
        className="overflow-auto h-screen"
        // style={width?{
        //   width:`${width}px !important`
        // }:{}}
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

interface HomeLayoutProps {
  children: JSX.Element[] | JSX.Element;
}
