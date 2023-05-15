import CallAnalysis from "@/components/analysis/Call";
import Navigation from "@/components/app/Navigation";
import React from "react";

const Dashboard = ({ data }: any) => {
  console.log(data.first);
  console.log(data.second);
  console.log(data.third);
  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      <Navigation title={"Call Analysis"} buttons={[]} />
      <CallAnalysis
        script={data.second.result}
        emotion={data.third.result}
        tree={data.first.result}
      />
    </div>
  );
};

export default Dashboard;
