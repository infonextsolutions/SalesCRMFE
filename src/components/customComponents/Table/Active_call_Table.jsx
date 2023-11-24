import React, { useEffect, useState } from "react";
import Header from "@/components/calls/active-calls/Header/Header";
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

const LeadsTable = ({ totalRecords, search }) => {
  const [pageCount, setpageCount] = useState(0);
  const [pageNumber, setpageNumber] = useState(0);
  const [limit, setLimit] = useState(10);
  const [items, setItems] = useState([]);
  const [totalLeads, settotalLeads] = useState(totalRecords);
  const [selectAll, setSelectAll] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [checked, setChecked] = useState(true);

  const getallItems = async (current) => {
    const res = await axios.get(
      `https://testsalescrm.nextsolutions.in/api/active-call/find-all?limit=${limit}&page=${current}`
    );
    const data = res.data.result;
    return data;
  };

  function convertDatetimeToCustomFormat(dateStr) {
    const dt = new Date(dateStr);
    const referenceDate = new Date("1400-01-01T00:00:00Z");
    const secondsDifference = Math.floor((dt - referenceDate) / 1000);
    return secondsDifference;
  }

  useEffect(() => {
    if (checked) {
      setLoading(true);
      const count = Math.ceil(Number(totalRecords) / limit);
      setpageCount(count);
      if (pageNumber >= count && pageCount !== 0) setpageNumber(0);
      const getItems = async () => {
        const res = await axios.get(
          `https://testsalescrm.nextsolutions.in/api/active-call/find-all`
        );
        const data = res.data.result;

        if (search.length) {
          setpageNumber(0);
          const allItems = await getallItems(pageNumber);
          setItems(allItems);
        }
        const filtered = data.filter((e) => {
          const idss = String(convertDatetimeToCustomFormat(e.updatedAt));
          const leadid = e.leadId?.leadId;
          return (
            idss.includes(search) ||
            leadid.includes(search) ||
            e.call_title.includes(search)
          );
        });
        filtered.reverse();
        settotalLeads(filtered.length);
        const count = Math.ceil(Number(filtered.length) / limit);
        setpageCount(count);
        setItems(
          filtered.slice(pageNumber * limit, pageNumber * limit + limit)
        );
      };
      getItems();
      setLoading(false);
    }
  }, [limit, pageNumber, search]);

  return (
    <>
      <div className="mt-[0px] w-[100%] min-h-[340px] overflow-y-hidden overflow-x-auto custom-scroll pb-[0px]">
        <Header
          // Pass props and functions to Header component if required
        />
        {loading ? (
          <Spinner />
        ) : (
          items != null &&
          items.map((item, i) => {
            return (
              <CallContainer
                key={item._id}
                id={item._id}
                CallData={item}
                last={items.length - 1 === i}
                selectAll={selectAll}
              />
            );
          })
        )}
      </div>
      {pageCount && (
        <div className="mx-[80px] flex justify-between">
          {/* Pagination section */}
        </div>
      )}

      <div className="h-[10px] w-full"></div>
    </>
  );
};

export default LeadsTable;
