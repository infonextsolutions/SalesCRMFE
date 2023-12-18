import React from "react";
// import star from "../../../assets/star.svg";
// import boy from "../../../assets/boy.png";
// import girl from "../../../assets/girl.png";

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
    <div className="w-[100%] h-[auto] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px]">
      <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
        Leaderboard
      </h1>
      <div className="parent-container color-[black] text-black">
        <div className="container1">
          <div className="best-performer-heading">
            <img src="/Images/Icons/Basic/Star.svg" alt="star" />
            <p> Best Performers</p>
          </div>
          {bestPerformers.map((ele, index) => (
            <div className="best-performer-list" key={index}>
              <img className="img-user" src={""} alt="" />
              <p> {ele}</p>
            </div>
          ))}
        </div>

        <div className="container1">
          <div className="best-performer-heading">
            <img src="/Images/Icons/Basic/Star.svg" alt="star" />
            <p>Needs Coaching</p>
          </div>
          {needsCoaching.map((ele, index) => (
            <div className="best-performer-list" key={index}>
              <img className="img-user" src={""} alt="" />
              <p> {ele}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
