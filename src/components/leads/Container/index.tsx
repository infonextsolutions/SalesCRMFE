import LeadsTable from "@/components/View/Tables/LeadsSearch";
import Lead from "@/types/Leads";
import ButtonDropDown from "@/utils/Button/Button";
import React, { useState } from "react";
import Search from "../Search/Search";
import KanbanContainer from "@/components/View/Kanban";

const LeadsContainer = ({ view,records,list }: LeadContainerProps) => {

  const [search,setSearch] = useState("");
  console.log(search,"check it mf")
  const onChange=(e:any)=>{
    const val = e.target.value;
    setSearch(val);
  }

  return (
    <div className="w-[100%] bg-white min-h-[70vh] rounded-[18px] overflow-hidden mb-[40px]">
      <div className="w-[100%] h-[58px] flex items-center  px-[8px]">
        <Search change={onChange} />
        <ButtonDropDown light={true} text={"Actions"} border={true} id={1} dropdown={true} list={[]} />
      </div>
      {!view ? (
          <LeadsTable totalRecords={records} search={search} />
        ) : (
          <KanbanContainer list={list} />
        )}
    </div>
  );
};

export default LeadsContainer;

interface LeadContainerProps {
  view?:Boolean;
  records:Lead[]|any;
  list:any[];
}
