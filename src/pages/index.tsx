import Navigation from "@/components/app/Navigation";
import LeadsContainer from "@/components/leads/open/Container";
import Table from "@/components/View/Tables/Leads";
import axios from "axios";
import React, { useEffect } from "react";
import DUMMY from "@/shared/dummy";
import KanbanContainer from "@/components/View/Kanban";
import { useRouter } from "next/router";

export default function Home({ data }: any) {
  const [view, setView] = React.useState(false);

  // const viewButtinClick = (prev: Number, current: Number) => {
  //   if (current === 1) {
  //     setView(true);
  //   } else {
  //     setView(false);
  //   }
  // };
  const router = useRouter();

  // useEffect(() => {
  //   if (router.pathname === "/") {
  //     router.push("/dashboard");
  //   }
  // }, [router.pathname]);


  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      {/* <Navigation  /> */}
      {/* <Navigation
      title={"Home"}
        buttons={[
          {
            text: "View",
            dropdown: true,
            id: 0,
            click: viewButtinClick,
            light: false,
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
            text: "Add Lead",
            dropdown: true,
            id: 1,
            icon: "Plus",
            light: false,
            list: [
              { title: "Using Form", Icon: "Text" },
              { title: "Import Leads", Icon: "Download" },
            ],
          },
          {
            text: "Export",
            dropdown: true,
            id: 1,
            icon: "Download",
            light: true,
            list: [
              { title: "Print", Icon: "Printer" },
              { title: "Excel", Icon: "Excel" },
              { title: "PDF", Icon: "PDF" },
              { title: "CSV", Icon: "CSV" },
            ],
          },
        ]}
      /> */}
      {/* <LeadsContainer view={view} records={data.totalRecords} list={Dummy}  /> */}
    </div>
  );
}

export async function getServerSideProps({ query, ...params }: any) {
  // const response = await axios.get(
  //   "https://sales365.trainright.fit/api/leads/find-all"
  // );
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      // data: response.data || {},
    }, // will be passed to the page component as props
    redirect: {
      permanent: false,
      destination: "/dashboard"
    }
  };
}
