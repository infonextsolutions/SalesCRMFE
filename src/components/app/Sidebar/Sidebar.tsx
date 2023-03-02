import React from "react";

const Logo = ({eventHandler}:any) => {
  return (
    <div className="cursor-pointer w-[200px] bg-white flex items-center" onClick={eventHandler} >
      <img src="./Images/Logo/Compact.svg" alt="" className="w-[35px]" />
      <p className="tracking-wide text-[#3F434A] ml-[10px] font-medium text-[16px] font-poppins">
        Product X
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
      className={`overflow-x-hidden  ease-in duration-200 h-screen bg-white px-[10px] pt-[13px] ${
        sidebar ? "w-[220px]" : "w-[55px]"
      }`}
    >
        <Logo eventHandler={sideClick} />
      <div className="cursor-pointer w-[200px] bg-white flex items-center">
        <img src="./Images/sidebar/Dashboard.svg" alt="" className="w-[35px]" />
        <p className="tracking-wide text-[#3F434A] ml-[10px] font-medium text-[16px] font-poppins">
          Product X
        </p>
      </div>
      <div className="cursor-pointer w-[200px] bg-white flex items-center">
        <img src="./Images/sidebar/Sales.svg" alt="" className="w-[35px]" />
        <p className="tracking-wide text-[#3F434A] ml-[10px] font-medium text-[16px] font-poppins">
          Product X
        </p>
      </div>
      <div className="cursor-pointer w-[200px] bg-white flex items-center">
        <img src="./Images/sidebar/Coaching.svg" alt="" className="w-[35px]" />
        <p className="tracking-wide text-[#3F434A] ml-[10px] font-medium text-[16px] font-poppins">
          Product X
        </p>
      </div>
      <div className="cursor-pointer w-[200px] bg-white flex items-center">
        <img src="../Images/sidebar/Calling.svg" alt="" className="w-[35px]" />
        <p className="tracking-wide text-[#3F434A] ml-[10px] font-medium text-[16px] font-poppins">
          Product X
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
