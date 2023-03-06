import Navigation from "@/components/app/Navigation";
import LeadsContainer from "@/components/leads/Container";
import Table from "@/components/View/Table";
import axios from "axios";
import React from "react";
import DUMMY from "@/shared/dummy";

export default function Home() {
  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      {/* <Navigation  /> */}
      <Navigation
        buttons={[
          {
            text: "View",
            dropdown: true,
            id: 0,
            light: false,
            list: [
              { title: "Table View", Icon: "List 2" },
              { title: "Kanban View", Icon: "Grid" },
            ],
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
      />
      <LeadsContainer>
        <Table result={DUMMY.result} totalRecords={DUMMY.totalRecords} />
      </LeadsContainer>
    </div>
  );
}

export async function getServerSideProps({ query, ...params }: any) {
  console.log(params.limit, params.page);
  const response = await axios.get(
    "https://testsalescrm.nextsolutions.in/api/leads/find-all"
  );
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: {},
    }, // will be passed to the page component as props
  };
}
