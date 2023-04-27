import React from "react";
import ScriptBuilding from "./Charts/ScriptBuilding";
import Selling from "./Charts/Selling";
import Emotion from "./Charts/Emotion";
import TreeMap from "./Tree";

const CallAnalysis = () => {
  return (
    <div className="w-[100%] mt-[20px] min-h-[100vh] overflow-x-auto custom-scroll">
      <div className="w-[100%] flex mb-[50px]">
        <ScriptBuilding />
        <Selling />
      </div>
      <Emotion />
      <TreeMap/>
    </div>
  );
};

export default CallAnalysis;
