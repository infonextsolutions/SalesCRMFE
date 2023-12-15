import React, { useState } from "react";
import { getBasicIcon, getRoundedAvatar } from "@/utils/AssetsHelper";
import Image from "next/image";
import Backdrop from "@/components/View/Backdrop/Center";
import EditLead from "@/components/View/EditLead";
import axios from "axios";

const ClientPocProfile = ({ data1, refresh }: any) => {
  const [edit, setEdit] = useState(false);
  const [bool, setBool] = useState(true);

  const showEdit = () => {
    setEdit(true);
  };

  const cancelEdit = () => {
    setBool(false);
    setTimeout(() => {
      setEdit(false);
      setBool(true);
    }, 500);
  };
  //client profile
  const [data, setData] = useState(data1);

  const UpdateData = async () => {
    const response = await axios
      .get(
        `https://salescrmbe.onrender.com/api/leads/find-by-id?id=${data1.result._id}`
      )
      .then((e) => {
        setData(e.data);
        refresh(e.data.result.customerId.name);
      })
      .catch((e) => {
        console.log(e, "error occured");
      });
  };
  console.log("data4:", data.result);
  const contacted: any = data.result.customerId;
  const contacts = contacted?.contacts ? contacted?.contacts : [];
  return (
    <>
      {edit && (
        <Backdrop pad={"50px 0"} bool={true} width={"900px"}>
          <EditLead
            update={UpdateData}
            cancel={cancelEdit}
            data={data.result}
            title={"Edit Client"}
          />
        </Backdrop>
      )}
      <div className="w-[100%] bg-white min-h-[250vh] rounded-[18px] overflow-hidden">
        <div className="flex -space-x-2 overflow-hidden">
          <div className="flex items-center w-[100%] border-gray-300 border-b-[1px] pb-[30px] pt-[20px] ">
            <Image
              className="inline-block w-[50px] rounded-full ring-2 ring-white"
              src={getRoundedAvatar(2, 30)}
              alt=""
              width={60}
              height={60}
              style={{
                objectFit: "contain",
              }}
            />
            <div className="ml-3 items-center ">
              <h2 className="text-xl font-small whitespace-nowrap leading-7 tracking-wide text-black">
                {data?.result?.customerId?.customer_name}
              </h2>

              <a
                href="#0"
                className="block ml-1 text-sm text-[12px] text-gray-500 hover:text-indigo-500"
              >
                {data?.result?.customerId?.customer_designation}
              </a>
            </div>
            <div className="h-[80%] ml-auto ">
              <Image
                src={getBasicIcon("Edit")}
                className={`cursor-pointer`}
                alt="Edit"
                width={20}
                height={20}
                style={{
                  objectFit: "contain",
                }}
                onClick={() => {
                  showEdit();
                }}
              />
            </div>
          </div>
        </div>
        <div className="py-2"></div>
        <h3 className="text-sm font-medium text-black mt-5 ml-4">INFO</h3>
        <ul className="mt-2 mb-10 ml-2">
          <li className="px-2 mt-4">
            <strong className="font-medium text-sm mr-1 text-gray-500 ">
              GENDER
            </strong>
            <p className="block text-black capitalize">
              {data?.result?.customerId?.customer_gender}
            </p>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-sm mr-1 text-gray-500">
              PHONE
            </strong>
            <p className="block text-black">{data?.result?.customerId?.customer_contact}</p>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-sm text-gray-500 mr-1">
              EMAIL
            </strong>
            <a href="mailto:" className="block text-black">
              {data?.result?.customerId?.customer_email}
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-sm text-gray-500 mr-1">
              SOCIAL MEDIA
            </strong>
            <div className="flex mt-[4px]">
              {data?.result?.customerId?.customer_socialMedia1 && (
                <a href={data?.result?.customerId?.customer_socialMedia1Url} target="_blank">
                  <Image
                    src={getBasicIcon(data?.result?.customerId?.customer_socialMedia1)}
                    className={`w-[20px] svg-grey mr-2`}
                    alt={data?.result?.customerId?.customer_socialMedia1}
                    width={20}
                    height={20}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </a>
              )}
              {data?.result?.customerId?.customer_socialMedia2 && (
                <a href={data?.result?.customerId?.customer_socialMedia2Url} target="_blank">
                  <Image
                    src={getBasicIcon(data?.result?.customerId?.customer_socialMedia2)}
                    className={`w-[20px] svg-grey`}
                    alt={data?.result?.customerId?.customer_socialMedia2}
                    width={20}
                    height={20}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </a>
              )}
            </div>
          </li>
        </ul>
        <div className="mx-auto w-[100%] border-b border-gray-300 my-3"></div>
        <div className="py-1"></div>
        <h3 className="text-sm font-medium mt-5 text-black ml-4">
          COMPANY INFO
        </h3>
        <ul className="mt-2 mb-10 ml-2">
          <li className="px-2 mt-4">
            <strong className="font-medium text-sm text-gray-500 mr-1">
              COMPANY NAME
            </strong>
            <a href="name" className="block text-black">
              {data?.result?.companyId?.company_name}
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-sm text-gray-500 mr-1">
              COMPANY ADDRESS
            </strong>
            <p className="block text-black">
              {data?.result?.companyId?.company_address || data?.result?.companyId?.company_location}
            </p>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-sm text-gray-500 mr-1">
              WEBSITE LINK
            </strong>
            <span className="block text-black">
              <a
                target="_blank"
                href={`${data?.result?.companyId?.company_website_url}`}
              >
                {data?.result?.companyId?.company_website_url}
              </a>
            </span>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-sm text-gray-500 mr-1">
              INDUSTRY TYPE
            </strong>
            <a href="industry:" className="block text-black">
              {data?.result?.companyId?.company_product_category}
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-sm text-gray-500 mr-1">
              SOCIAL MEDIA
            </strong>
            <div className="flex mt-[5px]">
              {data?.result?.companyId?.company_socialMedia1 && (
                <a href={data?.result?.companyId?.company_socialMedia1Url} target="_blank">
                  <Image
                    src={getBasicIcon(data?.result?.companyId?.company_socialMedia1)}
                    className={`w-[20px] svg-grey mr-2`}
                    alt={data?.result?.companyId?.company_socialMedia1}
                    width={20}
                    height={20}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </a>
              )}
              {data?.result?.companyId?.company_socialMedia2 && (
                <a href={data?.result?.companyId?.company_socialMedia2Url} target="_blank">
                  <Image
                    src={getBasicIcon(data?.result?.companyId?.company_socialMedia2)}
                    className={`w-[20px] svg-grey`}
                    alt={data?.result?.companyId?.company_socialMedia2}
                    width={20}
                    height={20}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </a>
              )}
            </div>
          </li>
        </ul>
        <div className="mx-auto w-[100%] border-b border-gray-300 my-3"></div>
        <div className="py-1"></div>
        <div className="flex items-center justify-between mt-2 ml-4">
          <h3 className="text-sm text-black font-medium">OTHER CONTACTS</h3>
          <Image
            src={getBasicIcon("Plus")}
            className="w-5 h-5 ml-2 mr-2"
            alt=""
            width={20}
            height={20}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="py-2"></div>
        {data?.result?.customerId?.contacts?.[0] && Object.keys(data?.result?.customerId?.contacts?.[0]).length !== 0 && (
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div className="flex items-center gap-x-2 mr-4">
                <Image
                  className="h-12 w-12 rounded-full "
                  src={getRoundedAvatar(6, 30)}
                  alt=""
                  width={54}
                  height={48}
                  style={{
                    objectFit: "contain",
                  }}
                />
                <div>
                  <h4 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {data?.result?.customerId?.contacts?.[0]?.customer_name}
                  </h4>
                  <a
                    href="#0"
                    className="block text-sm font-small text-gray-500 hover:text-indigo-500"
                  >
                    {data?.result?.customerId?.contacts?.[0]?.designation}
                  </a>
                </div>
              </div>
            </li>
          </ul>
        )}
        <div className="py-2"></div>
        {data?.result?.customerId?.contacts?.[0] && Object.keys(data?.result?.customerId?.contacts?.[0]).length !== 0 && (
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div className="flex items-center gap-x-2 mr-4">
                <Image
                  className="h-12 w-12 rounded-full "
                  src={getRoundedAvatar(6, 30)}
                  alt=""
                  width={54}
                  height={48}
                  style={{
                    objectFit: "contain",
                  }}
                />
                <div>
                  <h4 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {data?.result?.customerId?.contacts?.[1]?.customer_name}
                  </h4>
                  <a
                    href="#0"
                    className="block text-sm font-small text-gray-500 hover:text-indigo-500"
                  >
                    {data?.result?.customerId?.contacts?.[1]?.designation}
                  </a>
                </div>
              </div>
            </li>
          </ul>
        )}
        <div className="mx-auto w-[100%] border-b border-gray-300 my-6"></div>
      </div>
    </>
  );
};

export default ClientPocProfile;
