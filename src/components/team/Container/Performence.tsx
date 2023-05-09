// import LeadsTable from "@/components/View/Tables/LeadsSearch";
import Lead from "@/types/Leads";
import ButtonDropDown from "@/utils/Button/Button";
import React, { useState, Suspense } from "react";
import Search from "../Search/Search";
// import KanbanContainer from "@/components/View/Kanban";
import { useSelector } from "react-redux";
import Spinner from "@/components/loader/spinner";
import Charts from "../Charts";

const LeadsTable = React.lazy(
  () => import("@/components/View/Tables/team/performence")
);
// const About = lazy(() => import("./pages/About"));

const Performence = ({ records ,results}: any) => {
  const [search, setSearch] = useState("");
  const onChange = (e: any) => {
    const val = e.target.value;
    setSearch(val);
  };


  const state = useSelector((state: any) => state.auth);

  return (
    <>
      <Charts results={results} />
      <div className="w-[100%] bg-white min-h-[70vh] pt-[30px] rounded-[18px] overflow-hidden mb-[40px]">
        <Suspense fallback={<Spinner />}>
          <LeadsTable totalRecords={records} search={search} />
        </Suspense>
      </div>
    </>
  );
};

export default Performence;
