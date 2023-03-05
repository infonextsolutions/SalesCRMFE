import Navigation from "@/components/app/Navigation";
import LeadsContainer from "@/components/leads/Container";
import Table from "@/components/View/Table";
import axios from "axios";
import React from "react";

const dummyItem={};

const Dummy = [
  { id: 1, type: "enquiry",data:dummyItem },
  { id: 2, type: "enquiry",data:dummyItem },
  { id: 3, type: "enquiry",data:dummyItem },
  { id: 4, type: "interaction",data:dummyItem },
  { id: 5, type: "interaction",data:dummyItem },
  { id: 6, type: "interaction",data:dummyItem },
  { id: 7, type: "interaction",data:dummyItem },
  { id: 8, type: "proposal",data:dummyItem },
  { id: 9, type: "proposal",data:dummyItem },
  { id: 10, type: "proposal",data:dummyItem },
  { id: 11, type: "win",data:dummyItem },
  { id: 12, type: "win",data:dummyItem },
  { id: 13, type: "win",data:dummyItem },
  { id: 14, type: "Lost",data:dummyItem },
  { id: 15, type: "Dead",data:dummyItem },
  { id: 16, type: "Dead",data:dummyItem },
  { id: 17, type: "Dead",data:dummyItem },
  { id: 18, type: "Dead",data:dummyItem },
];

export default function Home() {
  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      {/* <Navigation  /> */}
      <Navigation
        buttons={[
          { text: "View", dropdown: false, id: 0, light: false },
          {
            text: "Add Lead",
            dropdown: false,
            id: 1,
            icon: "Plus",
            light: false,
          },
          {
            text: "Export",
            dropdown: false,
            id: 1,
            icon: "Download",
            light: true,
          },
        ]}
      />
      <LeadsContainer>
        <Table list={Dummy} />
      </LeadsContainer>
    </div>
  );
}

export async function getServerSideProps({ query,...params }:any) {
  console.log(params.limit,params.page);
  const response = await axios.get("https://testsalescrm.nextsolutions.in/api/leads/find-all");
  console.log(response);
  return {
      props: {
        // TODO: Can do better error handling here by passing another property error in the component
        data: {},
      }, // will be passed to the page component as props
    };
}