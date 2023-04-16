import Navigation from "@/components/app/Navigation";
import Performence from "@/components/team/Container/Performence";
import React from "react";

const TeamsPerformence = ({ data }: any) => {
  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      <Navigation
        title={"Team > Team Activity> My Team"}
        buttons={[
          {
            text: "My Team",
            dropdown: true,
            id: 0,
            light: true,
            list: [
              {
                title: "Table View",
                Icon: "List 2",
              },
              {
                title: "Kanban View",
                Icon: "Grid",
              },
            ],
            value: 0,
          },
          {
            text: "Last 7 days",
            dropdown: true,
            id: 1,
            light: true,
            list: [
              { title: "Using Form", Icon: "Text" },
              { title: "Import Leads", Icon: "Download" },
            ],
          },
        ]}
      />
      <Performence records={data.totalRecords} />
    </div>
  );
};

export default TeamsPerformence;
