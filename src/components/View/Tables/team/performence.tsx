import Lead from "@/types/Leads";
import ButtonDropDown from "@/utils/Button/Button";
import SmallButton from "@/utils/Button/SmallButton";
import React, { useEffect, useState } from "react";
import LeadContainer from "@/components/team/Performence/Performence";
import Header from "@/components/team/Header/Header";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import {
  getBasicIcon,
  LeftArrow,
  LeftDoubleArrow,
  RightArrow,
} from "@/utils/AssetsHelper";
import axios from "axios";
import Root from "@/types/teams";
const PerformenceTable = ({ totalRecords }: TableProps) => {
  // console.log(totalRecords);
  const [pageCount, setpageCount]: any = useState(0);
  const [pageNumber, setpageNumber]: any = useState(0);
  const [limit, setLimit]: any = useState(10);
  const [items, setItems]: any = useState([]);

  useEffect(() => {
    const count = Math.ceil(Number(totalRecords) / limit);
    // console.log(`count is ${count}`);
    setpageCount(count);
    // console.log(count);
    // console.log(`pageNumber is ${pageNumber} and pageCount is ${pageCount}`);
    if (pageNumber >= count && pageCount != 0) setpageNumber(0);
    // console.log(`pageNumber is ${pageNumber} and pageCount is ${pageCount}`);
    const getItems = async () => {
      // const res = await fetch(
      //   `https://testsalescrm.nextsolutions.in/api/leads/find-all?limit=${limit}&page=${pageNumber}`
      // );
      const res = await axios.get(
        `https://testsalescrm.nextsolutions.in/api/lead-report/find-all?limit=${limit}&page=${pageNumber}`
      );
      // const data = await res.json();
      // console.log(data);

      setItems(res.data.result);
      // console.log(data);
      // console.log(`total records is ${items.totalRecords} and limit is ${limit}`);

      // if(pageCount==0) setpageCount(7);
      // console.log(`page count is ${pageCount}`);
    };

    getItems();
  }, [limit, pageNumber, pageCount, totalRecords]);

  // console.log(items.result);
  const fetchItems = async (current: any) => {
    // const res = await fetch(
    //   `https://testsalescrm.nextsolutions.in/api/leads/find-all?limit=${limit}&page=${current}`
    // );
    const res = await axios.get(
      `https://testsalescrm.nextsolutions.in/api/lead-report/find-all?limit=${limit}&page=${current}`
    );
    // console.log(res.data,"only check this!");
    // const data = await res.json();
    return res.data.result;
  };

  const handleChange = (e: any) => {
    setLimit(e.target.value);
  };

  const setFirstPage = async () => {
    setpageNumber(0);
    const allItems = await fetchItems(pageNumber);
    setItems(allItems);
  };

  const setLastPage = async () => {
    setpageNumber(pageCount - 1);
    const allItems = await fetchItems(pageNumber);
    setItems(allItems);
  };

  const handlePageClick = async (data: any) => {
    // console.log(data.selected);
    let current = data.selected;
    setpageNumber(current);
    const allItems = await fetchItems(current);
    setItems(allItems);
  };

  const Leads = items;
  // console.log(Leads);

  return (
    <>
      <div className="mt-[0px] w-[100%] h-[540px]  overflow-x-auto  hide-scrollbar">
        <Header />
        {Leads != null &&
          Leads.map((item: Root, ind: Number) => {
            return (
              <LeadContainer
                selectAll={false}
                key={item._id}
                id={item._id}
                index={ind}
                LeadData={item}
                last={ind === Leads.length - 1}
              />
            );
          })}
      </div>
      <div className="mx-[80px] flex justify-between">
        <div className="flex items-center">
          <select
            onChange={handleChange}
            name="limit"
            id="limit"
            className="bg-[#fff] border border-[#8A9099] rounded-[10px] text-black p-[5px] px-[8px]"
          >
            <option value="10" selected>
              10
            </option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
          </select>
          <p className="ml-[12px] text-norm text-[14px] font-medium tracking-wider">
            {`Showing 1-${limit} of ${totalRecords}`}
          </p>
        </div>
        <div className="flex justify-center my-[45px] ">
          <div
            className={`flex justify-center mr-[8px] h-[40px] w-[40px] cursor-pointer rounded-[10px] ${
              pageNumber === 0 ? "bg-[#f5f5f5]" : "bg-[#e8ebfd]"
            }`}
            onClick={setFirstPage}
          >
            <Image
              src={getBasicIcon("Arrow-Right 2")}
              className={`${
                pageNumber != 0 ? "svg-blue" : ""
              } rotate-180 translate-x-[6px]`}
              alt=""
              width={18}
              height={18}
            />
            <Image
              src={getBasicIcon("Arrow-Right 2")}
              className={`${
                pageNumber != 0 ? "svg-blue" : ""
              } rotate-180 translate-x-[-6px]`}
              alt=""
              width={18}
              height={18}
            />
          </div>
          <ReactPaginate
            previousLabel={
              <Image
                src={getBasicIcon("Arrow-Right 2")}
                className={`${pageNumber != 0 ? "svg-blue" : ""} rotate-180`}
                alt=""
                width={20}
                height={20}
                style={{
                  objectFit: "contain",
                }}
              />
            }
            nextLabel={
              <Image
                src={getBasicIcon("Arrow-Right 2")}
                className={`${pageNumber != pageCount - 1 ? "svg-blue" : ""}`}
                alt=""
                width={16}
                height={16}
                style={{
                  objectFit: "contain",
                }}
              />
            }
            breakLabel={"..."}
            pageCount={pageCount == 0 ? 7 : pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={0}
            onPageChange={handlePageClick}
            containerClassName={"text-black flex justify-center gap-[8px]"}
            pageClassName={`px-[15px] py-[8px] text-[15px] text-[#3F434A]`}
            pageLinkClassName={``}
            previousClassName={`flex justify-center  px-[10px] py-[7px] rounded-[10px] ${
              pageNumber === 0 ? "bg-[#f5f5f5]" : "bg-[#e8ebfd]"
            }`}
            previousLinkClassName={`flex justify-center ${
              pageNumber != 0 ? "text-[#304FFD]" : "cursor-auto"
            }`}
            nextClassName={`flex justify-center  px-[10px] py-[7px] rounded-[10px] ${
              pageNumber === pageCount - 1 ? "bg-[#f5f5f5]" : "bg-[#e8ebfd]"
            }`}
            nextLinkClassName={`flex justify-center ${
              pageNumber === pageCount - 1 ? "cursor-auto" : ""
            }`}
            breakClassName={""}
            breakLinkClassName={""}
            forcePage={pageNumber}
            activeClassName={`bg-renal-blue text-[#fff] rounded-[10px]`}
          />
          <div
            className={`flex justify-center ml-[8px] h-[40px] w-[40px] cursor-pointer rounded-[10px] ${
              pageNumber === pageCount - 1 ? "bg-[#f5f5f5]" : "bg-[#e8ebfd]"
            }`}
            onClick={setLastPage}
          >
            <Image
              src={getBasicIcon("Arrow-Right 2")}
              className={`${
                pageNumber != pageCount - 1 ? "svg-blue" : ""
              } translate-x-[6px]`}
              alt=""
              width={18}
              height={18}
            />
            <Image
              src={getBasicIcon("Arrow-Right 2")}
              className={`${
                pageNumber != pageCount - 1 ? "svg-blue" : ""
              } translate-x-[-6px]`}
              alt=""
              width={18}
              height={18}
            />
          </div>
        </div>
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

export default PerformenceTable;

interface TableProps {
  totalRecords: Number;
  [key: string]: any;
  icon?: String;
  search?: String;
}
