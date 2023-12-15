import React, { useEffect, useState } from "react";
import Navigator from "@/utils/customNavigator";
import Image from "next/image";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Comments from "./AudioProfileDetails/Comment";
import Notes from "./AudioProfileDetails/Notes";
import CallInfo from "./AudioProfileDetails/CallInfo";
import Activityhistory from "./ProfileDetails/Lead/activity";
import Questionnaire from "../View/Questionnaire/Index";
import { data } from "../analysis/Call/Tree/data";
import axios from "axios";
import Navigation from "../app/Navigation";

const RecordProfile = ({
  titles,
  current,
  info,
  check,
  live,
  data1,
  width,
}: AudioProfileContainerProps) => {
  const [activeTitle, setActiveTitle] = useState(0);

  function CallBack(childData: any) {
    setActiveTitle(childData);
  }
  const list = titles.map((title: any, i: any) => ({ id: i, title: title }));

  const [data2, setData] = useState<any>({});
  const [activeCall, setActiveCall] = useState(data1);

  const UpdateCall = async () => {
    const response = await axios
      .get(
        `https://salescrmbe.onrender.com/api/active-call/find-by-id?id=${data1?._id}`
      )
      .then((e) => {
        setActiveCall(e.data.result);
      })
      .catch((e) => {
        console.log(e, "error occured");
      });
  };

  const UpdateData = async () => {
    const response = await axios
      .get(
        `https://salescrmbe.onrender.com/api/leads/find-by-id?id=${data1?.leadId?._id}`
      )
      .then((e) => {
        setData(e.data.result);
      })
      .catch((e) => {
        console.log(e, "error occured");
      });
  };

  const timestamp = data1.createdAt;
  const date = new Date(timestamp);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!checked) {
      UpdateData();
      setChecked(true);
    }
  });

  return (
    <div
      className={`w-[${
        width ? width : "100%"
      }]  bg-[#ffe3e170] rounded-xl p-[25px] px-[35px] pt-[30px]`}
    >
      {live && (
        <div className="h-[440px] bg-[#EDEDED] flex justify-center items-center text-[#000000]">
          <p className="text-[40px] leading-[60px] font-medium">
            LIVE VIDEO MEETING
          </p>
        </div>
      )}
      {data2?.companyId?.company_name && (
        <div className="w-[90%] flex justify-around">
          <div className="flex gap-2">
            <Image
              src={getBasicIcon("buildingIcon")}
              style={{
                zIndex: 10,
              }}
              alt=""
              width={25}
              height={25}
            />
            {info[0].data?.companyName}
          </div>
          <div className="flex gap-2">
            <Image
              src={getBasicIcon("Calendar")}
              style={{
                zIndex: 10,
              }}
              alt=""
              width={25}
              height={25}
            />
            {new Date(data1.createdAt).toDateString()}
          </div>
          <div className="flex gap-2">
            <Image
              src={getBasicIcon("Time")}
              style={{
                zIndex: 10,
              }}
              alt=""
              width={25}
              height={25}
            />
            {formattedTime}
          </div>
        </div>
      )}
      <hr className="border-t-4 border-red-300 mt-4" />
      <Navigator callback={CallBack} current={current} list={list} />
      <div className="flex justify-between w-[100%] relative overflow-hidden ">
        <div className="text-black w-[100%] text-[14px] leading-[21px] mt-[25px] tracking-wide ">
          {activeTitle === 0 && (
            <CallInfo check={check} data={data} data1={data1} info={info} />
          )}
          {activeTitle === 1 && <Activityhistory data={data2} />}
          {activeTitle === 2 && (
            <Notes data={activeCall} refresh={UpdateCall} />
          )}
          {/* {activeTitle === 3 && <Questionnaire data={data1} data1={data2} />} */}
        </div>
      </div>
    </div>
  );
};

export default RecordProfile;

interface AudioProfileContainerProps {
  titles: any[] | any;
  current: Number;
  [key: string]: any;
  check: Boolean;
  live?: any;
}
