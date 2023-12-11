import React, { useState } from "react";
import Navigation from "@/components/app/Navigation";
import ProfilePage from "@/components/Profile/ProfilePage/LeadProfile";
import AudioProfileContainer from "@/components/Profile/AudioProfileContainer";
import dummy from "@/shared/dummy";
import Script from "@/components/activeCalls/Script/index.";
import RecordProfile from "@/components/Profile/RecordProfile";
import axios from "axios";
import Backdrop from "@/components/View/Backdrop/Center";
import MakeCall from "@/components/View/makeCall/index";
import Navbar from "@/components/app/Navbar/Navbar";
import { setError, setSuccess } from "@/store/ai";
import { useAppDispatch } from "@/store/store";
//Manya will make this page

const AudioProfile = ({ data, scripts }: any) => {
  const titles = ["LEAD INFO", "ACTIVITY HISTORY", "NOTES"];

  const [make, setCall] = useState(false);
  const [bool, setBool] = useState(true);
  const [audioFile, setAudioFile] = useState(null);
  const [uploadModalStatus, setUploadModalStatus] = useState(false);
  const dispatch = useAppDispatch();
  const cancelCall = () => {
    setBool(false);
    setTimeout(() => {
      setCall(false);
      setUploadModalStatus(false);
      setBool(true);
    }, 500);
  };

  const takeAction = (e: any, e1: any) => {
    if (e1 === 0) {
      console.log("email");
    } else if (e1 === 1) {
      console.log("meeting");
    } else if (e1 === 2) {
      console.log("task");
    }
    if (e1 === 3) {
      console.log("message");
    }
  };

  // console.log(data.result, scripts);
  console.log("asdasdasd", data.result);
  const handleFileChange = (event: any) => {
    setAudioFile(event.target.files[0]);
  };
  const handleSubmit = () => {
    if (!audioFile) {
      setUploadModalStatus(false);
      return;
    }

    const formData = new FormData();

    // const payload = {
    //   call_title: data.result?.call_title,
    //   leadId: data.result?.leadId?._id,
    //   companyId: data.result?.companyId?._id,
    //   customerId: data.result?.customerId?._id,
    //   call_start_time: data.result?.call_start_time,
    //   call_discription: data.result?.call_discription,
    //   call_type: data.result?.call_type,
    //   call_date: data.result?.call_date,
    //   owner: data.result?.owner?._id,
    //   participants: data.result?.customerId?._id,
    //   call_new_participant_number: data.result?.call_new_participant_number,
    //   call_new_participant_title: data.result?.call_new_participant_title,
    //   call_new_participant_name: data.result?.call_new_participant_name,
    //   call_new_participant_designation:
    //     data.result?.call_new_participant_designation,
    //   callId: data.result?.callId,
    //   file: audioFile,
    // };
    // formData.append("call_title", data.result?.call_title);

    // formData.append("companyId", data.result?.companyId?._id);
    // formData.append("customerId", data.result?.customerId?._id);
    // formData.append("call_start_time", data.result?.call_start_time);
    // formData.append("call_discription", data.result?.call_discription);
    // formData.append("call_type", data.result?.call_type);
    // formData.append("call_date", data.result?.call_date);
    // formData.append("owner", data.result?.owner?._id);
    // formData.append("participants", data.result?.customerId?._id);
    // formData.append(
    //   "call_new_participant_number",
    //   data.result?.call_new_participant_number
    // );
    // formData.append(
    //   "call_new_participant_title",
    //   data.result?.call_new_participant_title
    // );
    // formData.append(
    //   "call_new_participant_name",
    //   data.result?.call_new_participant_name
    // );
    // formData.append(
    //   "call_new_participant_designation",
    //   data.result?.call_new_participant_designation
    // );
    // formData.append("callId", data.result?.callId);
    formData.append("leadId", data.result?.leadId?._id);
    formData.append("activeCallId", data.result?._id);
    formData.append("file", audioFile);
    console.log("audioFile");
    axios
      .post("https://salescrmbe.onrender.com/api/recording/add-rc", formData)
      .then((e: any) => {
        setUploadModalStatus(false);
        dispatch(
          setSuccess({
            show: true,
            success: "Call Uploaded Successfully!",
          })
        );
      })
      .catch((e) => {
        dispatch(
          setError({
            show: true,
            error: "Error Occured!",
          })
        );
      });
  };
  return (
    <>
      <Navbar mainTitle="Calls" title="Active Calls" src="Phone" />
      <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
        {make && (
          <Backdrop bool={bool}>
            <MakeCall cancel={cancelCall} data={data.result} />
          </Backdrop>
        )}
        {uploadModalStatus && (
          <Backdrop bool={bool}>
            {/* <MakeCall cancel={cancelCall} data={data.result} /> */}
            <div>
              <h1 className="mx-auto text-center mt-4 text-3xl font-semibold">
                Upload A Call
              </h1>
              <div className="flex items-center justify-center h-[350px]">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleFileChange}
                />
              </div>

              <div className="flex gap-4 justify-end mr-4">
                <button
                  onClick={() => setUploadModalStatus(false)}
                  className="bg-[#F5F5F5]  text-black px-[20px] py-[10px] rounded-xl font-medium text-[14px]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-bg-red hover:bg-[#ff7d6d] text-white px-[40px] py-[10px] rounded-xl font-medium text-[14px]"
                >
                  Save
                </button>
              </div>
            </div>
          </Backdrop>
        )}
        <Navigation
          title="Calls > Active Calls > Scheduled Calls"
          buttons={[
            // {
            //   text: "Refresh",
            //   dropdown: true,
            //   id: 1,
            //   light: false,
            //   list: [],
            //   onClick1: async () => {
            //     const url =
            //       "https://salescrmbe.onrender.com/api/calling/call-status";
            //     axios.post(url, {
            //       sid: "8af470ce2b4befc3f0e8292d237e175b",
            //     }).then((e)=>{
            //       console.log(e.data);
            //     })
            //   },
            // },
            {
              text: "Make Call",
              dropdown: true,
              id: 1,
              light: false,
              dark: true,
              list: [],
              onClick1: async () => {
                // const response = await axios.post(
                //   "https://salescrmbe.onrender.com/api/calling/make-call",
                //   {
                //     callTo: "7669481778",
                //   }
                // );
                setCall(true);
              },
            },
            {
              text: "Action",
              dropdown: true,
              id: 2,
              light: false,
              dark: false,
              icon: "Plus",
              list: [],
              onClick1: async () => {
                setUploadModalStatus(true);
              },
            },

            // {
            //   text: "Take Action ",
            //   click: takeAction,
            //   dropdown: true,
            //   id: 1,
            //   icon: "Plus",
            //   light: false,
            //   list: [
            //     { title: "Email", Icon: "Mail" },
            //     { title: "Meeting", Icon: "Calendar" },
            //     { title: "Notes", Icon: "Tasks" },
            //     { title: "Message", Icon: "Chat" },
            //   ],
            // },
          ]}
        />

        <div className="w-[100%] flex gap-[25px] mb-[100px] ">
          {/* <AudioProfileContainer
          width={"50%"}
          titles={titles}
          check={false}
          current={0}
          info={dummy.audioCallDetails}
        /> */}
          <RecordProfile
            width={"50%"}
            titles={titles}
            check={false}
            current={0}
            info={dummy.audioCallDetails}
            data1={data.result}
          />
          <div className="w-[50%] min-h-[50vh] bg-white rounded-xl">
            <Script data={data.result} scripts={scripts} />
          </div>
        </div>
        {/* write your code here for profile page manya! */}
      </div>
    </>
  );
};

export default AudioProfile;

export async function getServerSideProps({ query, params }: any) {
  // "https://salescrmbe.onrender.com/api/active-call/find-all"
  const response = await axios.get(
    `https://salescrmbe.onrender.com/api/active-call/find-by-id?id=${params.id}`
  );
  const another = await axios.get(
    `https://salescrmbe.onrender.com/api/call-script/active-call?activeCallId=${response?.data?.result?._id}`
  );
  console.log(another);
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: response.data || {},
      scripts: another.data || {},
    }, // will be passed to the page component as props
  };
}
