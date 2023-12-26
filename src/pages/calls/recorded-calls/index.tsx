import Navigation from "@/components/app/Navigation";
import DUMMY from "@/shared/dummy";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import dummy from "@/shared/dummy";
import { useRouter } from "next/router";
import Navbar from "@/components/app/Navbar/Navbar";
import CallsRecordingContainer from "@/components/calls/recorded-calls/Container/CallsRecordingContainer";
import MeetingRecordingContainer from "@/components/calls/recorded-calls/Container/MeetingRecordingContainer";

const dummyItem = {
  companyName: "ABC Corp",
  companyAddress: "Noida, UP",
  poc: "Shraddha P.",
  pocJob: "Sales Manager",
  names: "Anil L., Paul G., Rekha",
  lastActivity: "Email sent on 23 Jan 2023",
  dealSize: "11000",
  product: "Product A",
  calls: 5,
  docs: 2,
  chats: 5,
  mails: 5,
  meetings: 5,
  tasks: 5,
};

const Dummy = [
  { id: 1, type: "enquiry", data: dummyItem },
  { id: 2, type: "enquiry", data: dummyItem },
  { id: 3, type: "enquiry", data: dummyItem },
  { id: 4, type: "interaction", data: dummyItem },
  { id: 5, type: "interaction", data: dummyItem },
  { id: 6, type: "interaction", data: dummyItem },
  { id: 7, type: "interaction", data: dummyItem },
  { id: 8, type: "proposal", data: dummyItem },
  { id: 9, type: "proposal", data: dummyItem },
  { id: 10, type: "proposal", data: dummyItem },
  { id: 11, type: "win", data: dummyItem },
  { id: 12, type: "win", data: dummyItem },
  { id: 13, type: "win", data: dummyItem },
  { id: 14, type: "Lost", data: dummyItem },
  { id: 15, type: "Dead", data: dummyItem },
  { id: 16, type: "Dead", data: dummyItem },
  { id: 17, type: "Dead", data: dummyItem },
  { id: 18, type: "Dead", data: dummyItem },
];

const Calls = ({ data }: any) => {
  const [recodedCalls, setRecordedCalls] = useState(true);
  const [recodedMeeting, setRecodedMeeting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleBeforeHistoryChange = () => {
      router.events.on("beforeHistoryChange", handleBeforeHistoryChange);
      router.beforePopState(() => {
        router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
        return true;
      });
    };

    handleBeforeHistoryChange();

    return () => {
      router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
    };
  }, []);

  const gotoCallRecording = () => {
    setRecordedCalls(true);
    setRecodedMeeting(false);
  };

  const gotoMeetingRecording = () => {
    setRecordedCalls(false);
    setRecodedMeeting(true);
  };

  return (
    <>
      <Navbar mainTitle="Calls" title="Recorded Calls" src="Phone" />
      <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
        <div className="flex justify-between items-center mt-6 pb-5">
          <button
            onClick={gotoCallRecording}
            className={
              recodedCalls
                ? "focus:outline-none text-black bg-[#fe5043ad] hover:bg-[#fe50437a] font-medium rounded-lg text-md px-16 py-1.5 mt-2 mb-2"
                : "text-black font-medium text-md hover:bg-[#fe5043ad] hover:rounded-lg hover:py-1.5 hover:px-16 hover:mt-2 hover:mb-2"
            }
          >
            Call Recordings
          </button>
          <div className="w-[40%]">
            <button
              onClick={gotoMeetingRecording}
              // className="bg-bg-red w-[70%]"
              className={
                recodedMeeting
                  ? "focus:outline-none text-black bg-[#fe5043ad] hover:bg-[#fe50437a] font-medium rounded-lg text-md px-16 py-1.5 mt-2 mb-2"
                  : "text-black font-medium text-md hover:bg-[#fe5043ad] hover:rounded-lg hover:py-1.5 hover:px-16 hover:mt-2 hover:mb-2"
              }
            >
              Metting Recordings
            </button>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 mb-4" />
        {recodedCalls && (
          <CallsRecordingContainer data={data} dummy1={DUMMY} dummy2={dummy} />
        )}
        {recodedMeeting && (
          <MeetingRecordingContainer
            data={data}
            dummy1={DUMMY}
            dummy2={dummy}
          />
        )}
      </div>
    </>
  );
};

export async function getServerSideProps({ query, ...params }: any) {
  const response = await axios.get(
    "https://sales365.trainright.fit/api/recording/find-all"
  );
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: response.data || {},
    }, // will be passed to the page component as props
  };
}

export default Calls;
