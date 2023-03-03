import Navbar from "@/components/app/Navbar/Navbar";
import Sidebar from "@/components/app/Sidebar/Sidebar";
import React from "react";

const HomeLayout = ({ children }: HomeLayoutProps) => {

  const [width,setWidth] = React.useState(0);

  React.useEffect(()=>{
    const resize=()=>{
      console.log(window.innerWidth)
      setWidth(window.innerWidth);
    }
    resize();
    window.addEventListener("resize",resize,false);
  })

  return (
    <div className="w-full min-h-screen bg-[#f5f5f5] flex">
      <Sidebar />
      <div className="overflow-auto "
        // style={width?{
        //   width:`${width}px !important`
        // }:{}}
        style={{
          width:((width!==null)?(width-55):1)
        }}
      >
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