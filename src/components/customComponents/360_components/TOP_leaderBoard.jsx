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
    <>
      <div className="parent-container">
        <div className="container1">
          <div className="best-performer-heading">
            {/* <img src={boy} alt="" /> */}
            <p> Best Performers</p>
          </div>
          {bestPerformers.map((ele, index) => (
            <div className="best-performer-list" key={index}>
              {/* <img className="img-user" src={boy} alt="" /> */}
              <p> {ele}</p>
            </div>
          ))}
        </div>

        <div className="container1">
          <div className="best-performer-heading">
            {/* <img src={star} alt="" /> */}
            <p>Needs Coaching</p>
          </div>
          {needsCoaching.map((ele, index) => (
            <div className="best-performer-list" key={index}>
              {/* <img className="img-user" src={boy} alt="" /> */}
              <p> {ele}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
