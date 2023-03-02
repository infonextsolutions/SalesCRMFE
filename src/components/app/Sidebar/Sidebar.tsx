import React from "react";

const Logo = ({ clickHandler }: any) => {
  return (
    <div
      className="cursor-pointer w-[200px] bg-white flex items-center"
      onClick={clickHandler}
    >
      <img src="./Images/Logo/Compact.svg" alt="" className="w-[35px]" />
      <p className="tracking-wide text-[#3F434A] ml-[10px] font-bold text-[16px] poppins">
        Product X
      </p>
    </div>
  );
};

const SideItem = ({img,title}:any) => {
  return (
    <div className={"cursor-pointer w-[200px] bg-white flex items-center mt-[12px]"}>
      <img src={img} alt="" className={"w-[35px] p-[6px]"} />
      <p className="tracking-wider text-[#3F434A] ml-[10px] font-medium text-[14px] poppins">
        {title}
      </p>
    </div>
  );
};

const Sidebar = () => {
  const [sidebar, setSidebar] = React.useState(false);

  const sideClick = () => {
    setSidebar(!sidebar);
  };

  return (
    <div
      className={`overflow-x-hidden  ease-in duration-200 h-screen bg-white px-[10px] pt-[13px] border-r-[1px] border-[#eaebec] ${
        sidebar ? "w-[220px]" : "w-[55px]"
      }`}
    >
      <Logo clickHandler={sideClick} />
      <SideItem img={"./Images/sidebar/Dashboard.svg"} title={"Dashboard"} />
      <SideItem img={"./Images/sidebar/Sales.svg"} title={"Sales"} />
      <SideItem img={"./Images/sidebar/Coaching.svg"} title={"Coaching"} />
      <SideItem img={"./Images/sidebar/Calling.svg"} title={"Calling"} />
    </div>
  );
};

export default Sidebar;
