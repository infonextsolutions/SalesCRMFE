import { getBasicIcon } from '@/utils/AssetsHelper';
import Image from 'next/image';
import React from 'react'
import ReactPaginate from "react-paginate";

const Pagination = ({
    currPage = 0,
    itemsPerPage = 10,
    totalItems = 0,
    totalPages = 1,
    updateItemsPerPage,
    updatePage,
}: {
    itemsPerPage?: number,
    totalItems?: number,
    totalPages?: number,
    updateItemsPerPage?: any,
    currPage?: number,
    updatePage?: any
}) => {
    const handlePageChange = (payload: any) => {
        updatePage(payload);
    };

    const handleItemsPerPageChange = (e: any) => {
        updateItemsPerPage(e.target.value);
    };

    const setFirstPage = () => {
        handlePageChange({ selected: 0 });
    };

    const setLastPage = () => {
        handlePageChange({ selected: totalPages - 1 });
    };

    return (
        <div className="mx-[80px] flex justify-between">
            <div className="flex items-center">
                <select
                    onChange={handleItemsPerPageChange}
                    name="limit"
                    id="limit"
                    className="bg-[#fff] border border-[#8A9099] rounded-[10px] text-black p-[5px] px-[8px]"
                >
                    <option value="10" selected>10</option>
                    {/* <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option> */}
                </select>
                <p className="ml-[12px] text-norm text-[14px] font-medium tracking-wider">
                    {`Showing ${totalItems === 0 ? 0 : currPage * itemsPerPage + 1}-${(currPage + 1) * itemsPerPage > totalItems
                        ? totalItems
                        : (currPage + 1) * itemsPerPage
                        } of ${totalItems}`}
                </p>
            </div>
            <div className="flex justify-center my-[45px] ">
                <div
                    className={`flex justify-center mr-[8px] h-[40px] w-[40px] rounded-[10px] ${currPage === 0 ? "" : "bg-[#ffccbb] cursor-pointer"
                        }`}
                    onClick={setFirstPage}
                >
                    <Image
                        src={getBasicIcon("Arrow-Right 2")}
                        className={`${currPage != 0 ? "svg-red" : ""
                            } rotate-180 translate-x-[6px]`}
                        alt=""
                        width={18}
                        height={18}
                    />
                    <Image
                        src={getBasicIcon("Arrow-Right 2")}
                        className={`${currPage != 0 ? "svg-red" : ""
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
                            className={`${currPage != 0 ? "svg-red" : ""} rotate-180`}
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
                            className={`${currPage != totalPages - 1 ? "svg-red" : ""}`}
                            alt=""
                            width={16}
                            height={16}
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    }
                    breakLabel={"..."}
                    pageCount={totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={0}
                    onPageChange={handlePageChange}
                    containerClassName={"text-black flex justify-center gap-[8px]"}
                    pageClassName={`px-[15px] py-[8px] text-[15px] text-[#3F434A]`}
                    pageLinkClassName={``}
                    previousClassName={`flex justify-center  px-[10px] py-[7px] rounded-[10px] ${currPage === 0 ? "" : "bg-[#ffad9f]"
                        }`}
                    previousLinkClassName={`flex justify-center ${currPage != 0 ? "text-[#304FFD]" : "cursor-auto"
                        }`}
                    nextClassName={`flex justify-center  px-[10px] py-[7px] rounded-[10px] ${currPage === totalPages - 1 ? "" : "bg-[#ffad9f]"
                        }`}
                    nextLinkClassName={`flex justify-center ${currPage === totalPages - 1 ? "cursor-auto" : ""
                        }`}
                    breakClassName={""}
                    breakLinkClassName={""}
                    forcePage={currPage}
                    activeClassName={`bg-bg-red text-[#fff] rounded-[10px]`}
                />
                <div
                    className={`flex justify-center ml-[8px] h-[40px] w-[40px] rounded-[10px] ${currPage === totalPages - 1
                        ? ""
                        : "bg-[#ffccbb] cursor-pointer"
                        }`}
                    onClick={setLastPage}
                >
                    <Image
                        src={getBasicIcon("Arrow-Right 2")}
                        className={`${currPage != totalPages - 1 ? "svg-red" : ""
                            } translate-x-[6px]`}
                        alt=""
                        width={18}
                        height={18}
                    />
                    <Image
                        src={getBasicIcon("Arrow-Right 2")}
                        className={`${currPage != totalPages - 1 ? "svg-red" : ""
                            } translate-x-[-6px]`}
                        alt=""
                        width={18}
                        height={18}
                    />
                </div>
            </div>
        </div>
    )
}

export default Pagination