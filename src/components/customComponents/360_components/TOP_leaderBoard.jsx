import { getBasicIcon } from "@/utils/AssetsHelper";
import { Card } from "@mui/material";
import Image from "next/image";
import React from "react";
// import star from "../../../assets/star.svg";
// import boy from "../../../assets/boy.png";
// import girl from "../../../assets/girl.png";

export const getRoundedAvatar = (index, size) => {
  return `/Images/Avatars/Round/${size}px/${index}.svg`;
};

const Leaderboard = () => {
  const bestPerformers = [
    "Nikhil Jha",
    "Roshni Singhal",
    "Priya Sharma",
    "Neha Sharma",
    "Riya Sharma",
  ];

  const needsCoaching = [
    "Piyush Chouhan",
    "Priya Sharma",
    "Roshan Singhal",
    "Riya Sharma",
    "Abhishek Kapoor",
  ];
  return (
    <Card className="w-[580px] h-[auto] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px]">
      <h1 className="text-[24px] font-semibold text-[#3F434A] tracking-wide">
        Leaderboard
      </h1>
      <div className="pt-4 flex justify-between items-center w-[88%]">
        <div className="flex flex-col gap-5">
          <div className="flex ">
            <Image
              src={getBasicIcon("star_yellow")}
              className="mr-3"
              alt=""
              style={{
                objectFit: "contain",
              }}
              width={20}
              height={40}
            />
            <p className="text-[20px]"> Best Performers</p>
          </div>
          <div className="container1">
            {bestPerformers.map((ele, index) => (
              <div
                className="best-performer-list flex items-center"
                key={index}
              >
                {/* <img className="img-user" src={""} alt="" /> */}
                <Image
                  className=""
                  src={getRoundedAvatar(5, 30)}
                  alt=""
                  width={40}
                  height={40}
                  style={{
                    objectFit: "contain",
                  }}
                />
                <p className="text-[18px] font-semibold"> {ele}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex">
            <Image
              src={getBasicIcon("star_red")}
              className="mr-3"
              alt=""
              style={{
                objectFit: "contain",
              }}
              width={20}
              height={40}
            />
            <p className="text-[20px]">Needs Coaching</p>
          </div>
          <div className="container1">
            {needsCoaching.map((ele, index) => (
              <div
                className="best-performer-list flex items-center"
                key={index}
              >
                {/* <img className="img-user" src={""} alt="" /> */}
                <Image
                  className=""
                  src={getRoundedAvatar(5, 30)}
                  alt=""
                  width={40}
                  height={40}
                  style={{
                    objectFit: "contain",
                  }}
                />
                <p className="text-[18px] font-semibold"> {ele}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Leaderboard;
