import CallAnalysis from "@/components/analysis/Call";
import Navigation from "@/components/app/Navigation";
import React from "react";

const Dashboard = () => {
  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      <Navigation title={"Call Analysis"} buttons={[]} />
      <CallAnalysis />
    </div>
  );
};

export default Dashboard;
