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
      <div className="parent-container color-[black] text-black">
        <div className="mt-3 flex justify-between">
          <div className="container1">
            <div className="best-performer-heading">
              {/* <img src="/Images/Icons/Basic/Star.svg" alt="star" /> */}
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
                <p className="text-[20px] font-semibold"> {ele}</p>
              </div>
            ))}
          </div>

          <div className="container1">
            <div className="best-performer-heading pl-14">
              {/* <img src="/Images/Icons/Basic/Star.svg" alt="star" /> */}
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
            {needsCoaching.map((ele, index) => (
              <div
                className="best-performer-list flex items-center"
                key={index}
              >
                <img className="img-user" src={""} alt="" />
                <Image
                  className="w-[40px] rounded-full ring-2 ring-white"
                  src={getRoundedAvatar(5, 30)}
                  alt=""
                  width={40}
                  height={40}
                  style={{
                    objectFit: "contain",
                  }}
                />
                <p className="text-[20px] font-semibold"> {ele}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Leaderboard;
