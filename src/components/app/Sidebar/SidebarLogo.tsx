import React from "react";

const Logo = () => {
  return (
    <div className="cursor-pointer w-[200px] bg-white flex items-center  ">
      <img
        src="./Images/Logo/Compact.svg"
        alt=""
        className="w-[55px] px-[10px] "
      />
      <p className="tracking-wide text-[#3F434A] ml-[10px] font-bold text-[16px] poppins">
        Product X
      </p>
    </div>
  );
};

export default Logo;
