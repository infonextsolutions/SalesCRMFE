import React, { useEffect, useState } from "react";
import Navigator from "@/utils/customNavigator";
import Image from "next/image";
import { getBasicIcon } from "@/utils/AssetsHelper";
import { ActiveCall } from "@/types/active-call";
import axios from "axios";
import Backdrop from "@/components/View/Backdrop/Center";
import Uploads from "@/components/View/uploads";

const ScriptDoc = ({ title, docName, List, size, data }: any) => {
  return (
    <div className="w-[100%] mt-[20px]">
      <p className="text-[16px] text-[#595F69] font-medium tracking-wide">
        {title}
      </p>
      <div className="flex items-center mt-[14px]">
        <Image
          src="/Images/Logo/DOC 1.svg"
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
}: {
  data: any;
  moredata: ActiveCall;
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

  return (
    <>
      {uploads && (
        <Backdrop bool={bool}>
          <Uploads
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
          return (
            <ScriptDoc
              key={i}
              title={"Demo product A documents for customer"}
              docName="Wireframe UI Kit.doc"
              size="5.8 MB"
              data="23 January 2023, 3:00PM"
            />
          );
        })}
      </div>
    </>
  );
};

const Script = ({ data, scripts }: { data: ActiveCall; scripts: any }) => {
  const [activeTitle, setActiveTitle] = React.useState(0);

  function CallBack(childData: any) {
    setActiveTitle(childData);
  }
  console.log(scripts.results);
  const [currScripts, setCurrScripts] = useState<any[]>(scripts.result);
  const [selected, setSelected] = useState(false);
  console.log(currScripts);

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
      <ScriptList data={currScripts} moredata={data} />
    </div>
  );
};

export default Script;
