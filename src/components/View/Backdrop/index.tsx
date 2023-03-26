import React from "react";

const Backdrop = ({ children }: any) => {

  return (
    <>
      <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-black opacity-[0.3]">{children}</div>
    </>
  );
};

export default Backdrop;
