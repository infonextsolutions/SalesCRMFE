import React, { useState } from "react";
import Navigation from "@/components/app/Navigation";
import AudioProfileContainer from "@/components/Profile/AudioProfileContainer";
import dummy from "@/shared/dummy";
import Audio from "@/components/activeCalls/audio";
import axios from "axios";
import { useSelector } from "react-redux";
import Backdrop from "@/components/View/Backdrop/Center";
import FullCall from "@/components/View/full-call";
import CallSnippet from "@/components/View/call-snippet";
import Navbar from "@/components/app/Navbar/Navbar";
import NavbarWithButton from "@/components/app/Navbar/NavbarWithButton";
import { useAppDispatch } from "@/store/store";
import { setError, setSuccess } from "@/store/ai";
//Manya will make this page

const CallProfile = ({ data, data1, data2 }: any) => {
  const titles = ["CALL INFO", "COMMENTS & NOTES", "COACHING"];
  const [fullCall, setFullCall] = useState(false);
  const [snippet, setSnippet] = useState(false);
  const [bool, setBool] = useState(true);

  const [userId, setUserId] = useState(window !== undefined ? localStorage.getItem("user-id") : "");
  const [userRole, setUserRole] = useState(window !== undefined ? localStorage.getItem("user-role") : "");

  const state = useSelector((state: any) => state.ui);
  const appDispatch = useAppDispatch();

  const showFull = () => {
    setFullCall(true);
  };
  const showSnippet = () => {
    setSnippet(true);
  };
  const cancelSnippet = () => {
    setBool(false);
    setTimeout(() => {
      setSnippet(false);
      setBool(true);
    }, 500);
  };
  const cancelFull = () => {
    setBool(false);
    setTimeout(() => {
      setFullCall(false);
      setBool(true);
    }, 500);
  };

  const addCall = (e: any, e1: any) => {
    if (e1 === 0) {
      showFull();
    } else if (e1 === 1) {
      showSnippet();
    }
  };

  const handleRequestFeedback = () => {
    axios.post(
      `https://sales365.trainright.fit/api/qa/requestFeedBack`,
      {
        qaId: userId,
        qamId: "",
        callId: data?.result?._id,
      }
    )
      .then((res: any) => {
        console.log('--------- res : request feedback ---------', res);
        appDispatch(setSuccess({
          show: true,
          succes: "Feedback requested successfully.",
        }))
      })
      .catch((err: any) => {
        appDispatch(setError({
          show: true,
          error: "Feedback request failed."
        }))
      });
  };

  return (
    <>
      <NavbarWithButton
        buttons={[
          {
            text: "Request Feedback",
            dropdown: true,
            id: 2,
            light: false,
            dark: false,
            // icon: "",
            list: [],
            onClick1: handleRequestFeedback,
          },
          {
            text: "Share",
            dropdown: true,
            id: 1,
            icon: "Share",
            light: false,
            dark: true,
            click: addCall,
            list: [
              { title: "Full Call", Icon: "Phone" },
              { title: "Call Snippet", Icon: "Mail" },
            ],
          },
        ]}
        mainTitle="Calls"
        title="Recorded Calls"
        src="Phone"
      />
      <div className="w-[100%] min-h-[90vh] pl-[10px] pr-[10px] pt-6">
        {fullCall && (
          <Backdrop bool={bool} width={"60%"} pad={"50px 0"}>
            <FullCall cancel={cancelFull} data={data.result} />
          </Backdrop>
        )}
        {snippet && (
          <Backdrop bool={bool} width={"60%"} pad={"50px 0"}>
            <CallSnippet cancel={cancelSnippet} />
          </Backdrop>
        )}
        <div className="w-[100%] flex gap-[8px] mb-[100px] ">
          <AudioProfileContainer
            data={data.result}
            width={"42%"}
            titles={titles}
            check={true}
            current={0}
            data1={data1.result}
            info={dummy.audioCallDetails}
          />
          <div className="w-[58%] min-h-[50vh] ">
            <Audio data={data.result} data1={data1.result} data2={data2.result} />
          </div>
        </div>
        {/* write your code here for profile page manya! */}
      </div>
    </>
  );
};

export default CallProfile;

export async function getServerSideProps({ query, params }: any) {
  const response = await axios.get(
    `https://sales365.trainright.fit/api/calling/find-by-id?id=${params.id}`
  );

  const response1 = await axios.get(
    `https://sales365.trainright.fit/api/leads/find-by-id?id=${response.data.result.leadId._id}`
  );

  const response2 = await axios.post(
    `https://sales365.trainright.fit/api/calling/call-status`, { sid: response.data.result.Sid, leadId: response.data.result.leadId._id }
  );

  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: response.data || {},
      data1: response1.data || {},
      data2: response2.data || {},
    }, // will be passed to the page component as props
  };
}
