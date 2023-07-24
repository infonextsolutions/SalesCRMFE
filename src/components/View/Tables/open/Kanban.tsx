import Lead from "@/types/Leads";
import React, { useEffect, useState, Suspense } from "react";
import Header from "@/components/leads/open/Header/Header";
import Image from "next/image";
import { getBasicIcon } from "@/utils/AssetsHelper";
import axios from "axios";
import Spinner from "@/components/loader/spinner";
import KanbanItem from "./KanbanItems";

const KanbanTable = ({ totalRecords, search }: TableProps) => {
  const [items, setItems]: any = useState([]);
  const [totalLeads, settotalLeads]: any = useState(totalRecords);

  //   const getallItems = async (current: any) => {
  //     const res = await axios.get(
  //       `https://testsalescrm.nextsolutions.in/api/leads/find-all?limit=${limit}&page=${current}&leadStatus=Open"`
  //     );
  //     const data = res.data.result;
  //     return data;
  //   };
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    setLoading(true);
    const getItems = async () => {
      const res = await axios.get(
        `https://testsalescrm.nextsolutions.in/api/leads/find-all?leadStatus=Open`
      );
      // console.log(res, "only check here");
      const data = res.data.result;
      const filtered = data.filter(
        (e: Lead) =>
          e.companyId?.company_name.includes(search) ||
          e.customerId?.contact?.includes(search) ||
          e.potential_deal_size?.includes(search) ||
          e.leadStatus?.includes(search) ||
          e.leadStage?.includes(search) ||
          e.customerId?.email?.includes(search) ||
          e.companyId?.company_website_url?.includes(search)
      );

      // const filtered = data;
      // console.log(filtered);
      settotalLeads(filtered.length);
      // console.log(data, search);
      setItems(filtered);
    };

    getItems();
    setLoading(false);
  }, [search]);

  const Leads = items;
  // console.log(Leads);
  // console.log(`limit is ${limit}`);
  const [selectAll, setSelectAll] = useState(false);

  const stages = ["Enquiry", "Interaction", "Proposal", "win", "Lost", "Dead"];
  const titles = ["ENQUIRY", "INTERACTION", "PROPOSAL", "WIN", "LOST", "DEAD"];
  console.log(items, "please check here");
  useEffect(() => {
    items.map((e: any, i: any) => {
      console.log(e.leadStage, i, "ccc");
    });
  }, [items]);
  return (
    <>
      <div className="px-[20px] mt-[10px] text-[#ffffff] flex gap-[20px] h-[1200px] overflow-x-auto custom-scroll">
        {/* {loading ? (
          <Spinner />
        ) : (
          Leads != null &&
          Leads.map((item: Lead, ind: any) => {
            return (
              <LeadContainer
                selectAll={selectAll}
                key={item._id}
                index={ind}
                id={item._id}
                company={item.companyId}
                customer={item.customerId}
                leadStage={item.leadStage}
                leadStatus={item.leadStatus}
                custom={item.customer_name}
                LeadData={item}
                last={Leads.length - 1 === ind}
              />
            );
          })
        )} */}

        {stages.map((col, i) => {
          const toBeFilter = items;
          const res = items.filter((obj: any) => {
            return obj.leadStage.includes(stages[i]);
          });
          if (res.length) {
            return (
              <div className="flex gap-[20px]" key={i}>
                <div className="w-[270px] shrink-0 ">
                  <div className="leadName flex mb-[10px]">
                    <div className="w-[76%] bg-renal-blue h-[45px] rounded-xl pl-[15px] pr-[15px] flex items-center justify-between">
                      <div className="enq-header font-medium flex items-center ml-[10px] text-[13px] flex gap-[8px] items-center">
                        <p className="">{titles[i]}</p>
                        <div className="text-[10px] h-[19px] justify-center w-[20px] font-medium text-[#fff] flex items-center bg-slate-400 px-[4px] h-[13px] rounded-[4px]">
                          {res.length}
                        </div>
                      </div>
                      <a href="#" className="flex items-center">
                        ...
                      </a>
                    </div>
                    <div className="pl-[30px] h-[45px] bg-renal-blue rounded-xl flex items-center justify-center cursor-pointer ml-[15px] pr-[20px] relative p-[5px]">
                      {
                        <div className="absolute left-3  w-[28px]">
                          <div className={`w-[100%] p-[3px] rounded-md }`}>
                            <Image
                              src={getBasicIcon("Plus")}
                              className={`w-[24px] svg-white`}
                              alt=""
                              width={24}
                              height={24}
                              style={{
                                objectFit: "contain",
                              }}
                            />
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                  {res.map((Item: any, i: any) => {
                    const item = {
                      data: {
                        companyName: "ABC Corp",
                        companyAddress: "Noida, UP",
                        poc: "Shraddha P.",
                        pocJob: "Sales Manager",
                        names: "Anil L., Paul G., Rekha",
                        lastActivity: "Email sent on 23 Jan 2023",
                        dealSize: "11000",
                        product: "Product A",
                        calls: 5,
                        docs: 2,
                        chats: 5,
                        mails: 5,
                        meetings: 5,
                        tasks: 5,
                      },
                    };
                    return <KanbanItem i={i} key={i} item={item} Item={Item} />;
                  })}
                </div>
              </div>
            );
          }
          return <React.Fragment key={i}></React.Fragment>;
        })}
      </div>

      {/* <div className="flex h-[80px] items-center justify-between ">
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
              { title: 13},
              { title: 14},
              { title: 15 },
              { title: 16 },
              { title: 17},
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
      </div> */}
      <div className="h-[10px] w-full"></div>
    </>
  );
};

export default KanbanTable;

interface TableProps {
  totalRecords: Number;
  [key: string]: any;
  icon?: String;
  search: String | any;
}
