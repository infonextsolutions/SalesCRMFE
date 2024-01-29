import React, { useEffect, useState } from "react";
import Navigator from "@/utils/customNavigator";
import Image from "next/image";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Comments from "./AudioProfileDetails/Comment";
import Notes from "./AudioProfileDetails/Notes";
import CallInfo from "./AudioProfileDetails/CallInfo";
import Activityhistory from "./activeCallActivity";
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
}: any) => {
  const [activeTitle, setActiveTitle] = useState(0);

  function CallBack(childData: any) {
    setActiveTitle(childData);
  }
  const list = titles.map((title: any, i: any) => ({ id: i, title: title }));

  const [data2, setData] = useState<any>({});
  const [activeCall, setActiveCall] = useState(data1);
  const [accessToken, setAccessToken] = useState<any>("");

  useEffect(() => {
    if (window !== undefined) {
      setAccessToken(localStorage.getItem("access-token"));
    }
  }, []);

  useEffect(() => {
    setActiveCall(data1);
  }, [data1]);

  const UpdateCall = async () => {
    const response = await axios
      .get(
        `https://sales365.trainright.fit/api/active-call/find-by-id?id=${data1?._id}`,
        {
          headers: {
            Authorization: accessToken,
          },
        }
      )
      .then((e) => {
        setActiveCall(e.data.result);
      })
      .catch((e) => {});
  };

  const UpdateData = async () => {
    const response = await axios
      .get(
        `https://sales365.trainright.fit/api/leads/find-by-id?id=${data1?.leadId?._id}`,
        {
          headers: {
            Authorization: accessToken,
          },
        }
      )
      .then((e) => {
        setData(e?.data?.result);
      })
      .catch((e) => {});
  };

  const timestamp = data1?.createdAt;
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

  function getTime(ts: any) {
    const date = new Date(ts);
    let hours = date.getHours();
    let minutes: string | number = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  return (
    <div
      className={`w-[${
        width ? width : "100%"
      }]  bg-[#ffe3e170] rounded-xl p-[15px] pt-[30px]`}
    >
      {live && (
        <div className="h-[440px] bg-[#EDEDED] flex justify-center items-center text-[#000000]">
          <p className="text-[40px] leading-[60px] font-medium">
            LIVE VIDEO MEETING
          </p>
        </div>
      )}
      {data1?.companyId?.company_name && (
        <div className="w-[90%] flex justify-around">
          <div className="flex gap-2 text-[black]">
            <Image
              src={getBasicIcon("buildingIcon")}
              style={{
                zIndex: 10,
              }}
              alt=""
              width={25}
              height={25}
            />
            {data1?.companyId?.company_name}
          </div>
          <div className="flex gap-2 text-[black]">
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
          <div className="flex gap-2 text-[black]">
            <Image
              src={getBasicIcon("Time")}
              style={{
                zIndex: 10,
              }}
              alt=""
              width={25}
              height={25}
            />
            {getTime(data1?.createdAt)}
          </div>
        </div>
      )}
      <hr className="border-t-4 border-red-300 mt-4" />
      <Navigator
        width={false}
        callback={CallBack}
        current={current}
        list={list}
      />
      <div className=" flex justify-between w-[100%] relative overflow-hidden ">
        <div className="text-black w-[100%] text-[14px] leading-[21px] mt-[25px] tracking-wide ">
          {activeTitle === 0 && (
            <CallInfo check={check} data={data} data1={data1} info={info} />
          )}
          {activeTitle === 1 && (
            <Activityhistory data={data1} accessToken={accessToken} />
          )}
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
