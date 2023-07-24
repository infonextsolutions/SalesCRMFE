// import LeadsTable from "@/components/View/Tables/LeadsSearch";
import Lead from "@/types/Leads";
import ButtonDropDown from "@/utils/Button/Button";
import React, { useState, Suspense } from "react";
import Search from "../../genUtils/Search";
// import KanbanContainer from "@/components/View/Kanban";
import { useSelector } from "react-redux";
import Spinner from "@/components/loader/spinner";
import KanbanTable from "@/components/View/Tables/open/Kanban";

const LeadsTable = React.lazy(
  () => import("@/components/View/Tables/open/LeadsSearch")
);
const KanbanContainer = React.lazy(() => import("@/components/View/Kanban"));
// const About = lazy(() => import("./pages/About"));

const LeadsContainer = ({ view, records, list }: LeadContainerProps) => {
  const [search, setSearch] = useState("");
  const onChange = (e: any) => {
    const val = e.target.value;
    setSearch(val);
  };

  const state = useSelector((state: any) => state.auth);

  return (
    <div className="w-[100%] bg-white min-h-[70vh] rounded-[18px] relative mb-[40px]">
      <div className="w-[100%] h-[58px] flex items-center  px-[8px] ">
        <Search change={onChange} view={view} />
        {/* <ButtonDropDown
          light={true}
          text={"Actions"}
          border={true}
          id={1}
          dropdown={true}
          list={[
            { title: "Assign Lead", Icon: "Printer" },
            { title: "change SR", Icon: "Excel" },
            { title: "Edit lead", Icon: "PDF" },
            { title: "Delete Lead", Icon: "CSV" },
            { title: "Active/InActive Lead", Icon: "CSV" },
          ]}
        /> */}
        {/* {view && (
          <ButtonDropDown
            light={false}
            text={"Add Stage"}
            icon={"Plus"}
            border={true}
            id={1}
            dropdown={true}
            list={[
              { title: "Assign Lead", Icon: "Printer" },
              { title: "change SR", Icon: "Excel" },
              { title: "Edit lead", Icon: "PDF" },
              { title: "Delete Lead", Icon: "CSV" },
              { title: "Active/InActive Lead", Icon: "CSV" },
            ]}
          />
        )} */}
      </div>
      {!view ? (
        <Suspense fallback={<Spinner />}>
          <LeadsTable totalRecords={records} search={search} />
        </Suspense>
      ) : (
        <Suspense fallback={<Spinner />}>
          {/* <KanbanContainer list={list} /> */}
          <KanbanTable totalRecords={records} search={search} />
        </Suspense>
      )}
    </div>
  );
};

export default LeadsContainer;

interface LeadContainerProps {
  view?: Boolean;
  records: Lead[] | any;
  list: any[];
}