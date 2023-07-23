import Lead from "@/types/Leads";
import ButtonDropDown from "@/utils/Button/Button";
import SmallButton from "@/utils/Button/SmallButton";
import React, { useEffect, useState, Suspense } from "react";
import LeadContainer from "@/components/leads/open/Lead/Lead";
import Header from "@/components/leads/open/Header/Header";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import {
  getBasicIcon,
  LeftArrow,
  LeftDoubleArrow,
  RightArrow,
} from "@/utils/AssetsHelper";
import axios from "axios";
import Spinner from "@/components/loader/spinner";
const LeadsTable = ({ totalRecords, search,filter }: TableProps) => {
  const [pageCount, setpageCount]: any = useState(0);
  const [pageNumber, setpageNumber]: any = useState(0);
  const [limit, setLimit]: any = useState(10);
  const [items, setItems]: any = useState([]);
  const [totalLeads, settotalLeads]: any = useState(totalRecords);

  const getallItems = async (current: any) => {
    const res = await axios.get(
      `https://testsalescrm.nextsolutions.in/api/leads/find-all?limit=${limit}&page=${current}&leadStatus=Open`
    );
    const data = res.data.result; 
    return data;
  };
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    setLoading(true);
    const count = Math.ceil(Number(totalRecords) / limit);
    setpageCount(count);
    if (pageNumber >= count && pageCount != 0) setpageNumber(0);
    const getItems = async () => {
      const res = await axios.get(
        `https://testsalescrm.nextsolutions.in/api/leads/find-all?leadStatus=Open`
      );
      // console.log(res, "only check here");
      const data = res.data.result;

      if (search.length) {
        setpageNumber(0);
        const allItems = await getallItems(pageNumber);
        console.log(allItems)
        setItems(allItems);
      }
      const filtered = data.filter(
        (e: Lead) =>
          e.leadId?.includes(search) ||
          e.lead_title?.includes(search) ||
          e.companyId.company_name?.includes(search) ||
          e.customer_name?.includes(search)
      );

      // const filtered = data;
      // console.log(filtered);
      settotalLeads(filtered.length);
      // console.log(data, search);
      const count = Math.ceil(Number(filtered.length) / limit);
      setpageCount(count);
      setItems(filtered.slice(pageNumber * limit, pageNumber * limit + limit));
    };

    getItems();
    setLoading(false);
    console.log("Filter",filter)
  }, [limit, pageNumber, search]);

  const fetchItems = async (current: any) => {
    const res = await axios.get(
      `https://testsalescrm.nextsolutions.in/api/leads/find-all?limit=${limit}&page=${current}`
    );
    const data = res.data.result;
    const filtered = data.filter(
      (e: Lead) =>
        e.leadId?.includes(search) ||
        e.lead_title?.includes(search) ||
        e.companyId.company_name?.includes(search) ||
        e.customer_name?.includes(search)
    );
    settotalLeads(filtered.length);
    return filtered;
  };

  const handleChange = (e: any) => {
    setLimit(e.target.value);
  };

  const setFirstPage = async () => {
    setLoading(true);
    setpageNumber(0);
    const allItems = await fetchItems(pageNumber);
    // console.log(allItems);
    setItems(allItems);
    setLoading(false);
  };

  const setLastPage = async () => {
    setLoading(true);
    setpageNumber(pageCount - 1);
    const allItems = await fetchItems(pageNumber);
    // console.log(allItems);
    setItems(allItems);
    setLoading(false);
  };
  const handlePageClick = async (data: any) => {
    setLoading(true);
    let current = data.selected;
    setpageNumber(current);
    const allItems = await fetchItems(current);
    setItems(allItems);
    setLoading(false);
  };
  const Leads = items;
  // console.log("allitems ",Leads)
  // console.log(Leads);
  // console.log(`limit is ${limit}`);
  const [selectAll, setSelectAll] = useState(false);

  function sortArray(arr: any) {
    return arr.sort((a: any, b: any) => a - b);
  }

  const [sortWins, setWins] = useState<any>(null);
  const [sortDeals, setDeals] = useState<any>(null);
  const [sortBudget, setBudget] = useState<any>(null);

  const sortwins = (arr: any) => {
    const sh = arr.sort((a: any, b: any) => {
      let A = a.win_probability;
      A = A.slice(0, -1);
      let B = b.win_probability;
      B = B.slice(0, -1);
      return Number(A) - Number(B);
    });
    if (sortWins === null) {
      setWins(true);
      return sh;
    } else {
      if (sortWins) {
        setWins(false);
        const rev = [];
        for (let i = sh.length - 1; i >= 0; i--) {
          rev.push(sh[i]);
        }
        return rev;
      } else {
        setWins(true);
        return sh;
      }
    }
  };

  const sortdeals = (arr: any) => {
    const sh = arr.sort((a: any, b: any) => {
      let A = a.potential_deal_size;
      let B = b.potential_deal_size;
      return Number(A) - Number(B);
    });
    if (sortDeals === null) {
      setDeals(true);
      return sh;
    } else {
      if (sortDeals) {
        setDeals(false);
        const rev = [];
        for (let i = sh.length - 1; i >= 0; i--) {
          rev.push(sh[i]);
        }
        return rev;
      } else {
        setDeals(true);
        return sh;
      }
    }
  };

  const sortbudget = (arr: any) => {
    const sh = arr.sort((a: any, b: any) => {
      let A = a.existing_budget;
      let B = b.existing_budget;
      return Number(A) - Number(B);
    });
    if (sortBudget === null) {
      setBudget(true);
      return sh;
    } else {
      if (sortBudget) {
        setBudget(false);
        const rev = [];
        for (let i = sh.length - 1; i >= 0; i--) {
          rev.push(sh[i]);
        }
        return rev;
      } else {
        setBudget(true);
        return sh;
      }
    }
  };

  return (
    <>
      <div className="mt-[0px] w-[100%] min-h-[340px] overflow-y-hidden overflow-x-auto custom-scroll pb-[0px]">
        <Header
          selectAll={() => {
            setSelectAll(!selectAll);
          }}
          win={() => {
            const wins = [];
            for (let i = 0; i < Leads.length; i++) {
              const str = Leads[i].win_probability;
              let strr = "";
              for (let j = 0; j < str.length - 1; j++) {
                strr += str[j];
              }
              wins.push(Number(strr));
            }
            setItems(sortwins(Leads));
          }}
          deal={() => {
            const deals = [];
            for (let i = 0; i < Leads.length; i++) {
              const str = Leads[i].potential_deal_size;
              deals.push(Number(str));
            }
            setItems(sortdeals(Leads));
          }}
          budget={() => {
            const budget = [];
            for (let i = 0; i < Leads.length; i++) {
              const str = Leads[i].existing_budget;
              budget.push(Number(str));
            }
            setItems(sortbudget(Leads));
          }}
        />
        {loading ? (
          <Spinner />
          ) : (
            // ) : (

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
                owners ={item.owners}
                last={Leads.length - 1 === ind}
              />
            );
          })
        )}
      </div>
      {pageCount && (
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
              {`Showing ${totalLeads === 0 ? 0 : pageNumber * limit + 1}-${
                (pageNumber + 1) * limit > totalLeads
                  ? totalLeads
                  : (pageNumber + 1) * limit
              } of ${totalLeads}`}
            </p>
          </div>
          <div className="flex justify-center my-[45px] ">
            <div
              className={`flex justify-center mr-[8px] h-[40px] w-[40px] rounded-[10px] ${
                pageNumber === 0
                  ? "bg-[#f5f5f5] opacity-30 cursor-auto"
                  : "bg-[#e8ebfd] cursor-pointer"
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
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={0}
              onPageChange={handlePageClick}
              containerClassName={"text-black flex justify-center gap-[8px]"}
              pageClassName={`px-[15px] py-[8px] text-[15px] text-[#3F434A]`}
              pageLinkClassName={``}
              previousClassName={`flex justify-center  px-[10px] py-[7px] rounded-[10px] ${
                pageNumber === 0 ? "bg-[#f5f5f5] opacity-30" : "bg-[#e8ebfd]"
              }`}
              previousLinkClassName={`flex justify-center ${
                pageNumber != 0 ? "text-[#304FFD]" : "cursor-auto"
              }`}
              nextClassName={`flex justify-center  px-[10px] py-[7px] rounded-[10px] ${
                pageNumber === pageCount - 1
                  ? "bg-[#f5f5f5] opacity-30"
                  : "bg-[#e8ebfd]"
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
              className={`flex justify-center ml-[8px] h-[40px] w-[40px] rounded-[10px] ${
                pageNumber === pageCount - 1
                  ? "bg-[#f5f5f5] opacity-30 cursor-auto"
                  : "bg-[#e8ebfd] cursor-pointer"
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
      )}

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

export default LeadsTable;

interface TableProps {
  totalRecords: Number;
  [key: string]: any;
  icon?: String;
  search: String | any;
}
