import gsap, { Power4 } from "gsap";
import React, { useRef, useState } from "react";
import { Tween } from "react-gsap";
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
      transform: open ? "inset(0px 0px 100% 1px)" : "inset(0px 0px 0% 1px)",
      duration: 1.5,
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
        className="fixed top-0 left-0 w-[100%] h-[100%] z-100 overflow-hidden "
        style={{
          zIndex: 1000,
        }}
      >
        <div
          className="w-[100%] h-[100vh] absolute top-0 left-0 bg-black z-10"
          style={{
            zIndex: 100,
            opacity: 0,
          }}
          onClick={() => {}}
          ref={backdrop}
        ></div>
        <div
          className="w-[100%] h-[100vh] top-0 z-100 absolute flex justify-center py-[5vh] overflow-hidden"
          style={{
            zIndex: 1000,
          }}
        >
          <Tween
            from={{
              clipPath: "inset(0px 0px 100% 1px)",
            }}
            to={{
              clipPath: !open
                ? "inset(0px 0px 100% 1px)"
                : "inset(0px 0px 0% 1px)",
            }}
            duration={1.7}
            ease={Power4.easeInOut}
          >
            <div className={`w-[600px] h-[90vh] bg-[#fff] rounded-3xl `}>
              {children}
            </div>
          </Tween>
        </div>
      </div>
    </>
  );
};

export default Backdrop;
