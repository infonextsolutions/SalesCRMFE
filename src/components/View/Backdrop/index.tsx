import gsap from "gsap";
import React, { useRef, useState } from "react";
const Backdrop = ({ children, bool }: any) => {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 500);
  });

  const container: any = useRef();
  const backdrop: any = useRef();

  React.useEffect(() => {
    gsap.to(container.current, {
      transform: open ? "translateX(0px)" : "translateX(10000px)",
      duration: 0.5,
    });
    gsap.to(backdrop.current, {
      opacity: open ? 0.3 : 0,
      duration: 0.5,
    });
  }, [open]);

  const close = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (!bool) {
      close();
    }
  }, [bool]);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-[100%] h-[100%] z-100 overflow-y-auto "
        style={{
          zIndex: 1000,
        }}
      >
        <div
          className="w-[100%] h-[118vh] absolute top-0 left-0 bg-black z-10"
          style={{
            zIndex: 100,
            opacity: 0,
          }}
          onClick={() => {}}
          ref={backdrop}
        ></div>
        <div
          ref={container}
          className={`w-[600px] h-[100vh] top-0 right-0 absolute z-100 bg-[#fff] `}
          style={{
            zIndex: 100000,
            transform: "translateX(10000px)",
          }}
        >
          {" "}
          {children}
        </div>
      </div>
    </>
  );
};

export default Backdrop;
