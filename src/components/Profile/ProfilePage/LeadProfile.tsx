import React, { useState } from "react";
import {
  getBasicIcon,
  getRoundedAvatar,
  parseDateString,
} from "@/utils/AssetsHelper";
import Image from "next/image";
import { LeadId } from "@/types/leadId";
import Backdrop from "@/components/View/Backdrop/Center";
import EditLead from "@/components/View/EditLead";

const ProfilePage = ({ data }: props) => {
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

  function extractDomain(url: string): string {
  const match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^/?#]+)/);
  if (match) {
    return match[1];
  }
  return ""; // Return an empty string if no match is found
}

const domain = extractDomain(data.companyId.company_website_url);

  const openWebsite = () => {
    window.open("http://" + domain, "_blank");
  };

  console.log("data:",data)
  return (
    <>
      {edit && (
        <Backdrop pad={"50px 0"} bool={true} width={"900px"}>
          <EditLead cancel={cancelEdit} data={data} />
        </Backdrop>
      )}
      <div className="">
        <div className="flex -space-x-2 overflow-hidden">
          <div className="flex items-center w-[100%] border-gray-300 justify-between border-b-[1px] pb-[30px] pt-[20px] ">
            <Image
              className="inline-block w-[60px] translate-y-[-10px] rounded-full ring-2 ring-white"
              src={getRoundedAvatar(5, 30)}
              alt=""
              width={60}
              height={60}
              style={{
                objectFit: "contain",
              }}
            />
            <div className="flex items-center justify-center flex-col pl-[10px] pr-[20px]">
              <h2 className="text-[15px] leading-[20px] text-center  tracking-wide text-[#000] capitalize -900 font-medium">
                {data.lead_title}
              </h2>
              <p className="block cursor-pointer py-2 text-xs leading-[10px ] font-medium ml-[-6px] text-[14px] text-[#8A9099] -600 hover:text-indigo-500">
                LEAD-{data._id}
              </p>
            </div>
            <div className="w-[40px] h-[50%] flex mt-[-25px] justify-center">
              <Image
                src={getBasicIcon("Edit")}
                className={`w-[20px] svg-grey svg-not-selected mt-[-24px] cursor-pointer`}
                alt="Edit"
                width={20}
                height={20}
                onClick={() => {
                  showEdit();
                }}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
        <div className="py-1"></div>
        <h3 className="text-sm font-medium mt-5 ml-2 text-black">
          COMPANY INFO
        </h3>
        <ul className="mt-2 mb-10 ml-[1px]">
          <li className="px-2 mt-4">
            <strong className="font-medium text-[12px]  mr-1 text-[#8A9099] -500">
              COMPANY NAME
            </strong>
            <p className="block text-black">{data.companyId.company_name}</p>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-sm mr-1 text-[#000] -500">
              WEBSITE LINK
            </strong>
            <span className="block text-black">


              {/* made website link to be open in new tab  */}
              <p> 
                {/* <a href={extractDomain(data.companyId.company_website_url)} target="_blank">{(data.companyId.company_website_url)}
              </a> */}
              
                  <button onClick={openWebsite}>{data.companyId.company_website_url}</button>
                </p>
            </span>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-sm mr-1 text-[#000] -500">
              INDUSTRY TYPE
            </strong>
            <a href="industry:" className="block text-black">
              -
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-sm mr-1 text-[#000] -500">
              SOCIAL MEDIA
            </strong>
            <div className="flex mt-[5px]">
              <Image
                src={getBasicIcon("Twitter")}
                className={`w-[20px] svg-grey mr-2`}
                alt=""
                width={20}
                height={20}
                style={{
                  objectFit: "contain",
                }}
              />
              <Image
                src="/Images/Icons/Basic/Linked.svg"
                className={`w-[20px] svg-grey`}
                alt=""
                width={20}
                height={20}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </li>
        </ul>
        <div className="mx-auto w-[100%] border-b border-gray-300 my-3"></div>
        <div className="py-1"></div>
        <h3 className="text-sm font-medium mt-5 ml-3 text-black">LEAD INFO</h3>
        <ul className="mt-2 mb-10 ml-1">
          <li className="px-2 mt-4">
            <strong className="font-medium mr-1 text-black">Lead Stage</strong>
            <p className="block text-[#000] ">{data.leadStage}</p>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium mr-1 text-black">Lead Status</strong>
            <p className="block text-[#000] ">{data.leadStatus}</p>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium mr-1 text-black">Lead Source</strong>
            <p className="block text-[#000] ">{data.source}</p>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium mr-1 text-black">
              Lead Owner(Primary)
            </strong>
            <span className="block text-[#000] ">
              <p>{data.owners[0].name}</p>
            </span>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium mr-1 text-black">
              Lead Owner(Secondary)
            </strong>
            <p className="block text-[#000] "> {data.owners[1].name}</p>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium mr-1 text-black">
              Lead Created By
            </strong>
            <p className="block text-[#000] ">{data.created_by}</p>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium mr-1 text-black">
              Lead Updated on
            </strong>
            <p className="block text-[#000] ">-</p>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium mr-1 text-black">
              Activity History
            </strong>
          </li>
          <div
            className={`flex h-[20px] items-center justify-between mt-[5px] px-2 mt-[10px] shrink-0`}
            style={{ width: "width", marginLeft: "left" }}
          >
            <div className="flex">
              <Image
                src={getBasicIcon("Phone")}
                alt=""
                className="mr-[3px] svg-grey cursor-pointer"
                width={20}
                height={30}
                style={{
                  objectFit: "contain",
                }}
              />
              <p className="text-black">-</p>
            </div>
            <div className="flex">
              <Image
                src={getBasicIcon("Attachment")}
                alt=""
                className="mr-[3px] svg-grey cursor-pointer"
                width={20}
                height={30}
                style={{
                  objectFit: "contain",
                }}
              />
              <p className="text-black">-</p>
            </div>
            <div className="flex">
              <Image
                src={getBasicIcon("Chat")}
                alt=""
                className="mr-[3px] svg-grey cursor-pointer"
                width={20}
                height={30}
                style={{
                  objectFit: "contain",
                }}
              />
              <p className="text-black">-</p>
            </div>
            <div className="flex">
              <Image
                src={getBasicIcon("Mail")}
                alt=""
                className="mr-[3px] svg-grey cursor-pointer"
                width={20}
                height={30}
                style={{
                  objectFit: "contain",
                }}
              />
              <p className="text-black">-</p>
            </div>
            <div className="flex">
              <Image
                src={getBasicIcon("Calendar")}
                alt=""
                width={20}
                height={30}
                style={{
                  objectFit: "contain",
                }}
                className="mr-[3px] svg-grey cursor-pointer"
              />
              <p className="text-black">-</p>
            </div>
            <div className="flex">
              <Image
                src={getBasicIcon("Tasks")}
                alt=""
                width={20}
                height={30}
                style={{
                  objectFit: "contain",
                }}
                className="mr-[3px] svg-grey cursor-pointer"
              />
              <p className="text-black">-</p>
            </div>
          </div>
        </ul>
        <div className="mx-auto w-[100%] border-b border-gray-300 my-3"></div>
        <div className="py-1"></div>
        <h3 className="text-sm font-medium mt-5 ml-2 text-black">
          PRIMARY CLIENT POC
        </h3>
        <div className="flex items-center w-[100%] pb-[30px] pt-[20px] ">
          <Image
            className="h-12 w-10 rounded-full ml-1"
            src={getRoundedAvatar(2, 30)}
            alt=""
            width={64}
            height={48}
            style={{
              objectFit: "contain",
            }}
          />
          <div className="ml-3">
            <h2 className="text-base text-[14px] whitespace-nowrap leading-7 tracking-wide text-[#000] -900 font-normal">
              {data.customerId.name}
            </h2>
            <a
              href="#0"
              className="block text-xs text-[14px] text-[#000] -500 tracking-wide hover:text-indigo-500"
            >
              {data.customerId.designation}
            </a>
          </div>
        </div>
        <h3 className="text-sm font-medium mt-1 ml-2 text-black">INFO</h3>
        <ul className="mt-2 mb-10 ml-auto">
          <li className="px-2 mt-4">
            <strong className="font-medium text-sm mr-1 text-[#000] -500">
              GENDER
            </strong>
            <a href="tel:+821023456789" className="block text-black">
              -
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-sm mr-1 text-[#000] -500">
              PHONE
            </strong>
            <span className="block text-black">{data.customerId.contact}</span>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-sm mr-1 text-[#000] -500">
              E-MAIL
            </strong>
            <a href="mailto:" className="block text-black">
              {/* aspiringfe@helloworld.com */}
              {data.customerId.email}
            </a>
          </li>
          <li className="px-2 mt-4">
            <strong className="font-medium text-sm mr-1 text-[#000] -500">
              SOCIAL MEDIA
            </strong>
            <div className="flex">
              <Image
                src={getBasicIcon("Twitter")}
                className={`w-[20px] svg-grey mr-2`}
                alt=""
                width={20}
                height={20}
                style={{
                  objectFit: "contain",
                }}
              />
              <Image
                src="/Images/Icons/Basic/Linked.svg"
                className={`w-[20px] svg-grey`}
                alt=""
                width={20}
                height={20}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </li>
        </ul>
        <div className="mx-auto w-[100%] border-b border-gray-300 my-3"></div>
        <div className="py-1"></div>
        <div className="flex items-center justify-between mt-2 ml-3">
          <h3 className="text-sm font-medium text-black">OTHER CONTACTS</h3>
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
        <div className="py-3"></div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <li>
            <div className="flex items-center gap-x-3 mr-3">
              <Image
                className="h-12 w-10 rounded-full ml-2"
                src={getRoundedAvatar(6, 30)}
                alt=""
                width={64}
                height={48}
                style={{
                  objectFit: "contain",
                }}
              />
              <div>
                <h4 className="text-base text-[12px] leading-7 tracking-wide text-black">
                  -
                </h4>
                <a
                  href="#0"
                  className="block text-xs font-small text-[#000] -500 hover:text-indigo-500"
                >
                  -
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div className="mx-auto w-[100%] border-b border-gray-300 my-6"></div>
      </div>
    </>
  );
};

export default ProfilePage;

interface props {
  data: LeadId;
}
