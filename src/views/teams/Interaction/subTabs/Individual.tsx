import React, { useState } from "react";
import Table from "../../Table";
import Pagination from "../../Pagination";

const Individual = () => {
  const columns = [
    {
      width: 200,
      left: 40,
      text: "Team Member",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Talk Ratio",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Longest Monologue",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Longest Customer Story",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Interactivity",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Patience",
      checked: true,
    },
    {
      width: 120,
      left: 20,
      text: "Question Rate",
      checked: true,
    },
  ];

  const [rows, setRows] = useState([
    [
      {
        text: "Sagar",
        // subText: "Sales Manager",
      },
      {
        text: "950",
      },
      {
        text: "2100",
      },
      {
        text: "$1,00,000",
      },
      {
        text: "$1,00,000",
      },
      {
        text: "930",
      },
      {
        text: "1060",
      },
    ],
  ]);

  const [totalItem, setTotalItems] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currPage, setCurrPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);

  const getData = (page = currPage) => {
    try {
    } catch (error) {}
  };

  const handlePageChange = (payload: any) => {
    if (currPage !== payload?.selected) {
      setCurrPage(payload?.selected || 0);
      getData(payload?.selected);
    }
  };

  const handleItemsPerPageChange = (val: any) => {
    setLimit(val);
  };

  return (
    <div className="w-[100%]">
      <div className="bg-[#ffe3e170] py-5 px-2 rounded-lg">
        <Table columns={columns} rows={rows} />
      </div>
      <Pagination
        itemsPerPage={limit}
        totalItems={totalItem}
        totalPages={totalPages}
        currPage={currPage}
        updatePage={handlePageChange}
        updateItemsPerPage={handleItemsPerPageChange}
      />
    </div>
  );
};

export default Individual;
