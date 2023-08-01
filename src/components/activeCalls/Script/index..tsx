import React, { useEffect, useState } from "react";
import Navigator from "@/utils/customNavigator";
import Image from "next/image";
import { getBasicIcon } from "@/utils/AssetsHelper";
import { ActiveCall } from "@/types/active-call";
import axios from "axios";
import Backdrop from "@/components/View/Backdrop/Center";
import Uploads from "@/components/View/uploads/index.jsx";

const ScriptDoc = ({
  title,
  docName,
  List,
  size,
  data,
  file,
  refresh,
  check,
  id,
}: any) => {
  return (
    <div className="w-[100%] mt-[20px]">
      <p className="text-[16px] text-[#595F69] font-medium tracking-wide">
        {title}
      </p>
      <div className="flex items-center mt-[14px]">
        <Image
          src={
            check === 1 ? "/Images/Logo/PDF 1.svg" : "/Images/Logo/DOC 1.svg"
          }
          alt=""
          className="w-[55px] px-[10px] "
          // fill={true}
          style={
            {
              // objectFit:"contain"
            }
          }
          width={55}
          height={40}
        />
        <div className="ml-[10px]">
          <p className="text-[12px] text-[#3F434A] font-medium ">{docName}</p>
          <p className="text-[11px] text-[#8A9099] font-medium">{size}</p>
        </div>
        <div className="flex w-[100px] items-center justify-between ml-auto">
          <Image
            src={getBasicIcon("Download")}
            alt=""
            className="cursor-pointer"
            onClick={() => {
              window.open(file, "_blank");
            }}
            // fill={true}
            style={
              {
                // objectFit:"contain"
              }
            }
            width={20}
            height={20}
          />
          <Image
            src={getBasicIcon("Delete")}
            className="cursor-pointer"
            alt=""
            onClick={(e) => {
              axios
                .delete(`https://testsalescrm.nextsolutions.in/api/call-script/delete-by-id?id=${id}`)
                .then((e) => {
                  console.log(e, "huqbfq");
                  refresh();
                })
                .catch((e) => {
                  console.log(e, "huqbfq");
                });
            }}
            // fill={true}
            style={
              {
                // objectFit:"contain"
              }
            }
            width={20}
            height={20}
          />
          <Image
            src={getBasicIcon("More")}
            alt=""
            // fill={true}
            style={
              {
                // objectFit:"contain"
              }
            }
            width={20}
            height={20}
          />
        </div>
      </div>
      <p className="text-[#8A9099] text-[13px] font-medium mt-[10px]">{data}</p>
    </div>
  );
};

const ScriptList = ({
  data,
  moredata,
  refresh,
}: {
  data: any;
  moredata: ActiveCall;
  refresh: () => void;
}) => {
  const [activeTitle, setActiveTitle] = React.useState(0);
  function CallBack(childData: any) {
    setActiveTitle(childData);
  }

  const titles = ["SCRIPT LIST"];
  const list = titles.map((title: any, i: any) => ({ id: i, title: title }));

  const [uploads, setUploads] = useState(false);
  const [bool, setBool] = useState(true);

  const showUploads = () => {
    setUploads(true);
  };
  const cancelUploads = () => {
    setBool(false);
    setTimeout(() => {
      setUploads(false);
      setBool(true);
    }, 500);
  };

  console.log(moredata, "here is more");

  function convertDatetime(inputStr: any) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Parse the input string into a Date object
    const dateObj = new Date(inputStr);

    // Convert UTC time to IST
    const istOffset = 5.5 * 60 * 60 * 1000; // Offset in milliseconds (5 hours and 30 minutes)
    const istTime = new Date(dateObj.getTime() + istOffset);

    // Get the components of the IST date
    const day = istTime.getUTCDate();
    const month = months[istTime.getUTCMonth()];
    const year = istTime.getUTCFullYear();
    const hours = istTime.getUTCHours();
    const minutes = istTime.getUTCMinutes();

    // Format the time part (hours and minutes) in 12-hour clock format with AM/PM indicator
    let timeStr = `${hours % 12 || 12}:${minutes.toString().padStart(2, "0")} ${
      hours >= 12 ? "PM" : "AM"
    }`;

    // Format the date and time as desired
    return `${day} ${month} ${year}, ${timeStr}`;
  }
  
  function getTitleFromURL(url: any) {
    const parts = url.split("/");
    const title = parts[parts.length - 1];

    // Remove any query parameters if present
    const titleWithoutParams = title.split("?")[0];

    // Remove the file extension if present (e.g., ".pdf")
    const titleWithoutExtension = titleWithoutParams.split(".")[0];

    // Replace underscores with spaces and capitalize the words
    const words = titleWithoutExtension.split("_");
    const formattedTitle = words
      .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return formattedTitle;
  }

  function getLastFileNameWithExtension(url: any) {
    const parts = url.split("/");
    const lastPart = parts[parts.length - 1];

    // Remove any query parameters if present
    const fileNameWithoutParams = lastPart.split("?")[0];

    return fileNameWithoutParams;
  }

  function getFileType(url: any) {
    const parts = url.split("/");
    const lastPart = parts[parts.length - 1];

    // Remove any query parameters if present
    const fileNameWithoutParams = lastPart.split("?")[0];

    // Extract the file extension (e.g., ".pdf")
    const fileExtension = fileNameWithoutParams.split(".").pop().toLowerCase();

    if (fileExtension === "doc" || fileExtension === "docx") {
      return 0; // Word file
    } else if (fileExtension === "pdf") {
      return 1; // PDF file
    } else if (fileExtension === "csv") {
      return 2; // CSV file
    } else {
      return 3; // Anything else
    }
  }

  return (
    <>
      {uploads && (
        <Backdrop bool={bool}>
          <Uploads
            refresh={refresh}
            cancel={cancelUploads}
            id={moredata._id}
            leadId={moredata.leadId._id}
            owners={moredata.leadId.owners[0]}
          />
        </Backdrop>
      )}
      <div className="w-[100%] p-[30px]">
        <Navigator callback={CallBack} current={0} list={list} />
        <div className="flex mt-[20px]">
          <button
            className="ml-[400px] ml-auto flex bg-renal-blue pl-[18px] rounded-xl pr-[18px] py-[10px]"
            onClick={() => {
              showUploads();
            }}
          >
            <Image
              src="/Images/Logo/Upload.svg"
              className={`w-[18px] svg-white`}
              alt=""
              width={20}
              height={20}
              style={{
                objectFit: "contain",
              }}
            />
            <p className="whitespace-nowrap font-medium  text-[14px] pl-[5px] pr-[5px] text-[#ffffff] ">
              Upload
            </p>
          </button>
        </div>
        {data.map((item: any, i: any) => {
          console.log(item, "please checck here", i);
          return (
            <ScriptDoc
              key={i}
              check={getFileType(item.fileUrl)}
              title={getTitleFromURL(item.fileUrl)}
              docName={getLastFileNameWithExtension(item.fileUrl)}
              size="5.8 MB"
              id={item._id}
              file={item.fileUrl}
              refresh={refresh}
              data={convertDatetime(item.createdAt)}
            />
          );
        })}
      </div>
    </>
  );
};

const Script = ({ data, scripts }: { data: ActiveCall; scripts: any }) => {
  console.log(scripts);

  const [activeTitle, setActiveTitle] = React.useState(0);

  function CallBack(childData: any) {
    setActiveTitle(childData);
  }
  const [currScripts, setCurrScripts] = useState<any[]>(scripts.result);
  const [selected, setSelected] = useState(false);

  const refresh = () => {
    axios
      .get(
        `https://testsalescrm.nextsolutions.in/api/call-script/active-call?activeCallId=${data._id}`
      )
      .then((e) => {
        console.log(setCurrScripts(e.data.result));
      })
      .catch((e) => {});
  };

  const titles = ["SCRIPT"];
  const list = titles.map((title: any, i: any) => ({ id: i, title: title }));

  return (
    <div className="w-full p-[30px]">
      {selected && (
        <>
          <Navigator callback={CallBack} current={0} list={list} />
          {activeTitle === 0 && (
            <div className="w-full h-[900px] bg-[#ccc] p-[30px]">
              <div className="w-full h-full bg-white px-[30px] py-[60px]">
                <p className="text-black font-medium uppercase text-[14px] tracking-wider">
                  Lorem ipsum dolor sit amet. Qui totam sunt et rerum galisum
                  est aspernatur voluptatem quo eligendi repellat aut tempora
                  quis ut similique facilis. Ut soluta autem eum debitis cumque
                  id maxime dicta qui cupiditate fugiat. Et porro totam in quia
                  debitis ut doloremque fugit. Aut tempore commodi eum beatae
                  quia est tempora molestias sit nobis incidunt et corporis
                  animi est quia quia. Qui quia repellat et dolores accusantium
                  in rerum cupiditate est molestias explicabo. Et quia voluptate
                  qui quam provident ad odio saepe. Eum tempora quia sit eveniet
                  ipsam. Eum temporibus voluptatem id magni delectus qui earum
                  accusantium. Aut minima
                </p>
              </div>
            </div>
          )}
        </>
      )}
      <ScriptList refresh={refresh} data={currScripts} moredata={data} />
    </div>
  );
};

export default Script;
