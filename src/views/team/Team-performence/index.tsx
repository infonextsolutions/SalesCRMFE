import Navigation from "@/components/app/Navigation";
import Performence from "@/components/team/Container/Performence";
import Filter from "@/components/team/genUtils/Filter";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const TeamsPerformence = ({ data }: any) => {
  const router = useRouter();

  useEffect(() => {
    const handleBeforeHistoryChange = () => {
      router.events.on("beforeHistoryChange", handleBeforeHistoryChange);
      router.beforePopState(() => {
        router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
        return true;
      });
    };

    handleBeforeHistoryChange();

    return () => {
      router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
    };
  }, []);

  const [filter, setFilter] = React.useState<any>(null);
  const [currData, setData] = React.useState(data);

  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px] relative">
      <Navigation
        title={"Team > Team Activity> My Team"}
        buttons={[
          {
            text: "My Team",
            dropdown: true,
            id: 0,
            light: true,
            dark: false,
            list: [
              {
                title: "My Team",
                Icon: "List 2",
              },
              {
                title: "Aarav Patel",
                Icon: "Grid",
              },
              {
                title: "Anika Sharma",
                Icon: "Grid",
              },
            ],
            value: 0,
          },
          {
            text:
              filter === null
                ? "date filter"
                : filter === 0
                ? "last 7 days"
                : filter === 1
                ? "last 15 days"
                : filter && "last 30 days",
            dropdown: true,
            id: 1,
            light: true,
            dark: false,
            click: (e1: any, e2: any) => {
              if (e2 === 0) {
                setFilter(0);
              } else if (e2 === 1) {
                setFilter(1);
              } else if (e2 === 2) {
                setFilter(2);
              } else if (e2 === 3) {
                setFilter(null);
              }
            },
            list: [
              { title: "last 7 days", Icon: "Text" },
              { title: "last 15 days", Icon: "Text" },
              { title: "last 30 days", Icon: "Text" },
              { title: "remove filter", Icon: "Text" },
            ],
          },
        ]}
      />
      <Performence
        records={currData.totalRecords}
        charts={currData}
        filter={filter}
      />
    </div>
  );
};

export default TeamsPerformence;
