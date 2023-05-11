import Navigation from "@/components/app/Navigation";
import Performence from "@/components/team/Container/Performence";
import Filter from "@/components/team/genUtils/Filter";
import React from "react";

const TeamsPerformence = ({ data }: any) => {
  const [filter, setFilter] = React.useState(false);
  const [currData, setData] = React.useState(data);

  

  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px] relative">
      {filter && (
        <Filter
          cancel={() => {
            setFilter(false);
          }}
        />
      )}
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
            click: (e1, e2) => {
              if (e2 === 0) {
                setFilter(true);
              }
            },
            list: [{ title: "Filter", Icon: "Text" }],
          },
        ]}
      />
      <Performence records={currData.totalRecords} charts={currData} />
    </div>
  );
};

export default TeamsPerformence;
