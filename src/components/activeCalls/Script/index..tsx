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
  onSelectFile,
}: any) => {

  
  //fetch file data from a
  const fetchAdditionalData = async (fileUrl: string) => {
    try {
      const response = await axios.get(fileUrl, {
        responseType: "arraybuffer",
      });
      const blob = new Blob([response.data], { type: "application/pdf" });
      return blob;
    } catch (error) {
      console.error("Error fetching additional data:", error);
      return null;
    }
  };

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
          onClick={async () => {
            try {
              const additionalData = await fetchAdditionalData(file);
              onSelectFile(additionalData); // Pass fetched data to parent component
            } catch (error) {
              console.error("Error fetching additional data:", error);
            }
          }}
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
                .delete(
                  `https://testsalescrm.nextsolutions.in/api/call-script/delete-by-id?id=${id}`
                )
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
  onSelectFile,
}: {
  data: any;
  moredata: ActiveCall;
  refresh: () => void;
  onSelectFile: (additionalData: any) => void;
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

  const mockData = [
    {
      fileUrl: "https://example.com/example-url-1.pdf",
      createdAt: "2023-11-30T10:00:00Z",
      title: "Sample Report",
      size: "5.8 MB",
      id: "1",
    },
    {
      fileUrl: "https://example.com/example-url-2.pdf",
      createdAt: "2023-11-29T09:30:00Z",
      title: "User Manual",
      size: "3.2 MB",
      id: "2",
    },
    {
      fileUrl: "https://example.com/example-url-3.pdf",
      createdAt: "2023-11-28T08:15:00Z",
      title: "Product Brochure",
      size: "1.1 MB",
      id: "3",
    },
    // Add more mock objects as needed
  ];

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
              onSelectFile={onSelectFile}
            />
          );
        })}
      </div>
    </>
  );
};

const Script = ({ data, scripts }: { data: ActiveCall; scripts: any }) => {
  console.log(scripts);
  console.log(data._id);

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

  console.log(scripts);

  const titles = ["SCRIPT"];
  const list = titles.map((title: any, i: any) => ({ id: i, title: title }));

  //for etchinf data in script section

  const [selectedFileData, setSelectedFileData] = useState<any>(null);
  // Function to handle file selection and set data
  const handleFileSelect = async (additionalData: any) => {
    setSelectedFileData(additionalData);
    setSelected(true);
  };

  return (
    <div className="w-full p-[30px]">
      {selected && (
        <>
          <Navigator callback={CallBack} current={0} list={list} />
          {activeTitle === 0 && (
            <div className="w-full h-[900px] bg-[#ccc] p-[30px]">
              <div className="w-full h-full bg-white px-[30px] py-[60px]">
                <p className="text-black font-medium uppercase text-[14px] tracking-wider">
                 {` **Alice**: Hi Bob, how are you doing today? **Bob**: Hello
                  Alice! I'm doing well, thank you. How about you? **Alice**:
                  I'm good too, thanks for asking. Did you get a chance to check
                  out that new movie that released last week? **Bob**: Yes,
                  Alice, I did. It was an interesting movie. I really enjoyed
                  the plot twists. **Alice**: That's great to hear, Bob. I
                  haven't watched it yet. Would you recommend it? **Bob**:
                  Absolutely, Alice. It's a must-watch. The storyline is
                  compelling and the performances are outstanding. **Alice**:
                  Sounds exciting, Bob. I'll definitely watch it over the
                  weekend. **Bob**: That's a good plan, Alice. Let me know what
                  you think of it. **Alice**: Sure, Bob. I'll share my thoughts
                  with you after I watch it. **Bob**: Looking forward to it,
                  Alice. By the way, have you tried the new Italian restaurant
                  in town? **Alice**: Not yet, Bob. Is it good? **Bob**: Yes,
                  Alice. The food is delicious and the ambiance is great. You
                  should try it. **Alice**: Thanks for the recommendation, Bob.
                  I'll check it out soon. **Bob**: You're welcome, Alice. I hope
                  you'll like it. **Alice**: I'm sure I will, Bob. Thanks again.
                  Talk to you later.`}
                </p>
              </div>
            </div>
          )}
        </>
      )}
      <ScriptList
        refresh={refresh}
        data={currScripts}
        moredata={data}
        onSelectFile={handleFileSelect}
      />
    </div>
  );
};

export default Script;
