import CallsTable from "@/components/View/Tables/calls/upload-calls/Calls";
import React, { Suspense, useState } from "react";
import Search from "../Search/Search";
import Spinner from "@/components/loader/spinner";

const CallsContainer = ({ dummy1, data }: LeadContainerProps) => {
  const [search, setSearch] = useState("");
  const onChange = (e: any) => {
    const val = e.target.value;
    setSearch(val);
  };
  return (
    <div className="w-[100%] bg-white min-h-[70vh] rounded-[18px] relative mb-[40px]">
      <div className="w-[100%] h-[58px] flex items-center  px-[8px]">
        <Search change={onChange} />
        {/* <ButtonDropDown
          light={true}
          text={"Actions"}
          border={true}
          id={1}
          dropdown={true}
          list={[]}
        /> */}
      </div>
      <Suspense fallback={<Spinner />}>
        <CallsTable totalRecords={dummy1.totalRecords} search={search} />
      </Suspense>
    </div>
  );
};

export default CallsContainer;

interface LeadContainerProps {
  dummy1: any;
  dummy2?: any;
  data?: any;
}
