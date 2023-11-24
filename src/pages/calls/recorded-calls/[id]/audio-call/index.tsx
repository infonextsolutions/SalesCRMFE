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
//Manya will make this page

const CallProfile = ({ data, data1 }: any) => {
  const titles = ["CALL INFO", "COMMENTS", "NOTES", "COACHING"];
  const [fullCall, setFullCall] = useState(false);
  const [snippet, setSnippet] = useState(false);
  const [bool, setBool] = useState(true);

  const state = useSelector((state: any) => state.ui);

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

  console.log(data1, "here is audio");

  return (
    <>
      <Navbar title="Calls > Recorded Calls" src="Phone" />
      <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
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
        <Navigation
          title="Calls>Recorded Calls>Discussion on PX features"
          buttons={[
            {
              text: "Share",
              dropdown: true,
              id: 1,
              icon: "Share",
              light: false,
              click: addCall,
              list: [
                { title: "Full Call", Icon: "Phone" },
                { title: "Call Snippet", Icon: "Mail" },
              ],
            },
          ]}
        />
        <div className="w-[100%] flex gap-[25px] mb-[100px] ">
          <div className="w-[50%] min-h-[50vh] bg-white rounded-xl">
            <Audio data={data.result} data1={data1.result} />
          </div>
          <AudioProfileContainer
            data={data.result}
            width={"50%"}
            titles={titles}
            check={true}
            current={0}
            data1={data1.result}
            info={dummy.audioCallDetails}
          />
        </div>
        {/* write your code here for profile page manya! */}
      </div>
    </>
  );
};

export default CallProfile;

export async function getServerSideProps({ query, params }: any) {
  const response = await axios.get(
    `https://testsalescrm.nextsolutions.in/api/calling/find-by-id?id=${params.id}`
  );

  console.log(response.data.result.leadId._id);
  const response1 = await axios.get(
    `https://testsalescrm.nextsolutions.in/api/leads/find-by-id?id=${response.data.result.leadId._id}`
  );

  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: response.data || {},
      data1: response1.data || {},
    }, // will be passed to the page component as props
  };
}
