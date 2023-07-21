import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Power2 } from "gsap";
import { setError } from "@/store/ai";
import { Tween } from "react-gsap";
import { useAppDispatch } from "@/store/store";

const ApiErrorPrompt = () => {
  const error = useSelector((state:any) => state.ai);

  const [percent, setPercent] = useState(0);

  const dispatch = useAppDispatch();

  function runPercentageEffect() {
    let percentage = 1;
    const targetPercentage = 100;
    const intervalTime = 30; // Update interval in milliseconds
    const duration = 3000; // Total duration in milliseconds

    const updateInterval =
      (targetPercentage - percentage) / (duration / intervalTime);

    const updateState = () => {
      percentage += updateInterval;
      if (percentage >= targetPercentage) {
        percentage = targetPercentage;
        clearInterval(intervalId);
      }
      setPercent(percentage);
      // Your code or effect using the updated percentage value
    };

    const intervalId = setInterval(updateState, intervalTime);
  }

  useEffect(() => {
    if (error.errorShow) {
      runPercentageEffect();
      setTimeout(() => {
        dispatch(setError({ show: false }));
      }, 3000);
      setTimeout(() => {
        setPercent(0);
      }, 3600);
    }
  }, [error.errorShow]);


  return (
    <Tween
      from={{
        x: "-200%",
      }}
      to={{
        x: error.errorShow ? "0" : "-200%",
      }}
      duration={0.5}
      ease={Power2.easeInOut}
    >
      <div
        className="h-[50px] min-w-[100px] px-[20px] text-[13px] good-fonted text-[#fff] font-medium flex items-center  justify-center bg-[#ff0000] absolute bottom-[20px] left-[20px] "
        style={{
          zIndex: 1000000,
        }}
      >
        {error.error ? (error?.error.length===0?"Error":error.error):"Error Occured"}
        <div className="w-[100%] h-[5px] bottom-0 absolute ">
          <div
            className="h-[100%] duration-100 bg-[#00000040]"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    </Tween>
  );
};

export default ApiErrorPrompt;
