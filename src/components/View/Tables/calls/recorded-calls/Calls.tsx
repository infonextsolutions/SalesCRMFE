import React from "react";
import Call from "@/types/Calls";
import Header from "@/components/calls/recorded-calls/Header/Header";
import CallContainer from "@/components/calls/recorded-calls/Call/Call";
import ButtonDropDown from "@/utils/Button/Button";
import SmallButton from "@/utils/Button/SmallButton";

const CallsTable = ({ result, totalRecords }: TableProps) => {
  const totalLeads = totalRecords;
  const Leads = result;

  return (
    <>
      <div className="mt-[0px] w-[100%] h-[540px]  overflow-x-auto  hide-scrollbar">
        <Header />
        {Leads.map((item: Call, i: any) => {
          return (
            <CallContainer
              key={item._id}
              id={item._id}
              company={item.companyId}
              customer={item.customerId}
              leadStage={item.leadStage}
              leadStatus={item.leadStatus}
              custom={item.customer_name}
              CallData={item}
              last={Leads.length - 1 === i}
            />
          );
        })}
      </div>
      <div className="flex h-[80px] items-center justify-between ">
        <div className="flex items-center">
          <ButtonDropDown
            width={80}
            text={"10"}
            id={1}
            light={true}
            dropdown={true}
            list={[
              { title: 10 },
              { title: 11 },
              { title: 12 },
              { title: 13 },
              { title: 14 },
              { title: 15 },
              { title: 16 },
              { title: 17 },
              { title: 18 },
              { title: 19 },
              { title: 20 },
            ]}
            border={true}
            height={40}
            dropDirection={true}
            tight={true}
          />
          <p className="ml-[12px] text-norm text-[14px] font-medium tracking-wider">
            Showing 1-10 of 100
          </p>
        </div>
        <div className="flex mr-[10%]">
          <SmallButton leftDblIcon={true} theme={2} left={10} />
          <SmallButton leftIcon={true} theme={2} left={10} />
          <SmallButton text={"1"} theme={1} left={10} />
          <SmallButton text={"2"} theme={3} />
          <SmallButton text={"3"} theme={3} />
          <SmallButton text={"..."} theme={3} />
          <SmallButton text={"5"} theme={3} />
          <SmallButton RightDblIcon={true} theme={4} left={10} />
          <SmallButton RightIcon={true} theme={4} left={10} />
        </div>
      </div>
      <div className="h-[10px] w-full"></div>
    </>
  );
};

export default CallsTable;

interface TableProps {
  result: Call[] | any;
  totalRecords: Number;
}
