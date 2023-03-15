import Navigation from "@/components/app/Navigation";
import LeadsContainer from "@/components/leads/Container";
import Table from "@/components/View/Tables/Leads";
import axios from "axios";
import React from "react";
import DUMMY from "@/shared/dummy";
import KanbanContainer from "@/components/View/Kanban";
import { useRouter } from "next/router";
const dummyItem={
  companyName:"ABC Corp",
  companyAddress:"Noida, UP",
  poc:"Shraddha P.",
  pocJob:"Sales Manager",
  names:"Anil L., Paul G., Rekha",
  lastActivity:"Email sent on 23 Jan 2023",
  dealSize:"11000",
  product:"Product A",
  calls:5,
  docs:2,
  chats:5,
  mails:5,
  meetings:5,
  tasks:5
};

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

export default function Home({data}:any) {
  const [view, setView] = React.useState(false);

  const viewButtinClick = (prev: Number, current: Number) => {
    // console.log(prev,current);
    if (current === 1) {
      setView(true);
    } else {
      setView(false);
    }
  };

  const router = useRouter();

  React.useEffect(()=>{
    router.push("/login");
  })

  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      {/* <Navigation  /> */}
      <Navigation
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
      />
      <LeadsContainer view={view} records={data.totalRecords} list={Dummy}  />
    </div>
  );
}

export async function getServerSideProps({ query, ...params }: any) {
  console.log(params.limit, params.page);
  const response = await axios.get(
    "https://testsalescrm.nextsolutions.in/api/leads/find-all"
  );
  console.log(response.data);
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: response.data || {},
    }, // will be passed to the page component as props
  };
}