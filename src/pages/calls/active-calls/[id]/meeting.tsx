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
import { setError, setSuccess } from "@/store/ai";
import { useAppDispatch } from "@/store/store";
import NavbarWithButton from "@/components/app/Navbar/NavbarWithButton";
import EmailPage from "@/components/View/Email";
import Notes from "@/components/View/Notes";
import Messages from "@/components/View/messages";
//Manya will make this page

const MeetingProfile = ({ data, scripts }: any) => {
    const titles = ["LEAD INFO", "ACTIVITY HISTORY", "NOTES"];

    const [make, setCall] = useState(false);
    const [bool, setBool] = useState(true);
    const [audioFile, setAudioFile] = useState(null);
    const [makeCallModal, setCallModal] = useState(false);
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
            // console.log("email");
        } else if (e1 === 1) {
            // console.log("meeting");
        } else if (e1 === 2) {
            // console.log("task");
        }
        if (e1 === 3) {
            // console.log("message");
        }
    };

    const handleFileChange = (event: any) => {
        setAudioFile(event?.target?.files[0]);
    };
    const handleRecSubmit = () => {
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
        formData.append("leadId", data1.result?.leadId?._id);
        formData.append("activeCallId", data1.result?._id);
        formData.append("file", audioFile);
        axios
            .post("https://sales365.trainright.fit/api/recording/add-rc", formData)
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

    const checkCallStatus = (callRes: any) => {
        const payload = {
            sid: callRes?.Sid,
            leadId: callRes?.leadId,
        };
        axios.post(`api/calling/call-status`, payload)
            .then((res: any) => {
            })
            .catch((err: any) => {
                dispatch(
                    setError({
                        show: true,
                        error: "Error Checking Status!",
                    })
                );
            });
    };

    const handleCallSubmit = () => {
        const payload = {
            callTo: data?.result?.call_new_participant_number,
            id: data?.result?._id,
            leadId: data?.result?.leadId?._id
        }
        axios.post(
            `https://sales365.trainright.fit/api/calling/make-call?`, payload
        )
            .then((res: any) => {
                const callData = res.data;
            })
            .catch((err: any) => {
                dispatch(
                    setError({
                        show: true,
                        error: "Error Occured!",
                    })
                );
            });
    };

    const [notes, setNotes] = React.useState(false);
    const [events, setEvents] = React.useState(false);
    const [notes1, setNotes1] = React.useState(false);
    const [emails, setEmail] = React.useState(false);
    const [messages, setMessages] = React.useState(false);

    const showNotes = () => {
        setNotes(true);
    };
    const showEmail = () => {
        setEmail(true);
    };
    const showMessages = () => {
        setMessages(true);
    };

    const cancelEmails = () => {
        setBool(false);
        setTimeout(() => {
            setEmail(false);
            setBool(true);
        }, 500);
    };
    const cancelNotes = () => {
        setBool(false);
        setTimeout(() => {
            setNotes(false);
            setBool(true);
        }, 1700);
    };
    const cancelMessages = () => {
        setBool(false);
        setTimeout(() => {
            setMessages(false);
            setBool(true);
        }, 1700);
    };
    const AddLead = (e: any, e1: any) => {
        if (e1 === 0) {
            showEmail();
        } else if (e1 === 1) {
            showNotes();
        } else if (e1 === 2) {
            showMessages();
        }
    };
    const [data1, setData] = useState(data);

    const UpdateData = async () => {
        const response = await axios
            .get(
                `https://sales365.trainright.fit/api/leads/find-by-id?id=${data.result._id}`
            )
            .then((e) => {
                setData(e.data);
            })
            .catch(() => { });
    };
    return (
        <>
            <NavbarWithButton
                mainTitle="Calls > Active Calls"
                title="Scheduled Calls"
                src="Phone"
                buttons={[
                    {
                        text: "Make a call",
                        dropdown: true,
                        id: 2,
                        light: false,
                        dark: false,
                        // icon: "",
                        list: [],
                        onClick1: async () => {
                            setCallModal(true);
                        },
                    },
                    {
                        text: "Upload",
                        dropdown: true,
                        id: 2,
                        light: false,
                        dark: false,
                        // icon: "",
                        list: [],
                        onClick1: async () => {
                            setUploadModalStatus(true);
                        },
                    },
                    {
                        text: "Action",
                        dropdown: true,
                        id: 0,
                        click: AddLead,
                        light: false,
                        dark: true,
                        list: [
                            {
                                title: "Email",
                                Icon: "Mail",
                            },
                            {
                                title: "Note",
                                Icon: "Tasks",
                            },
                            {
                                title: "Message",
                                Icon: "Chat",
                            },
                        ],
                        value: 0,
                    },
                ]}
            />
            <div className="w-[100%] min-h-[90vh] pl-[10px] pr-[10px] pt-4">
                {make && (
                    <Backdrop bool={bool}>
                        <MakeCall cancel={cancelCall} data={data.result} />
                    </Backdrop>
                )}
                {/* <MakeCall cancel={cancelCall} data={data.result} /> */}
                {makeCallModal && (
                    <Backdrop bool={bool}>
                        <div className="p-4">
                            <h1 className="mx-auto text-left mt-4 pl-3 text-3xl font-semibold">
                                Make a Call
                            </h1>
                            <p className="mx-auto text-left mt-4 pl-3 text-lg text-gray-400">
                                Call To :
                            </p>
                            <input
                                type="text"
                                name=""
                                disabled
                                className="border w-[80%] pl-4 ml-3 mt-2 py-2 rounded-lg"
                                value={data?.result?.call_new_participant_number}
                            />
                            <p className="mx-auto text-left mt-4 pl-3 text-lg text-gray-400">
                                Designation :
                            </p>
                            <p className="mx-auto text-left mt-4 pl-3 text-lg text-black">
                                {data?.result?.call_new_participant_designation}
                            </p>
                            <div className="flex gap-4 justify-end mr-4 mt-6">
                                <button
                                    onClick={() => setCallModal(false)}
                                    className="bg-[#F5F5F5]  text-black px-[20px] py-[10px] rounded-xl font-medium text-[14px]"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCallSubmit}
                                    className="bg-bg-red hover:bg-[#ff7d6d] text-white px-[40px] py-[10px] rounded-xl font-medium text-[14px]"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </Backdrop>
                )}
                {uploadModalStatus && (
                    <Backdrop bool={bool}>
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
                                    onClick={handleRecSubmit}
                                    className="bg-bg-red hover:bg-[#ff7d6d] text-white px-[40px] py-[10px] rounded-xl font-medium text-[14px]"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </Backdrop>
                )}
                {emails && (
                    <Backdrop bool={bool} pad={"50px 0"}>
                        <EmailPage
                            refresh={(e: any) => {
                                UpdateData();
                            }}
                            cancel={cancelEmails}
                            data={data.result}
                            leadIdResult={data.result._id}
                        />
                    </Backdrop>
                )}
                {notes && (
                    <Backdrop bool={bool}>
                        <Notes
                            cancel={cancelNotes}
                            update={UpdateData}
                            leadid={data.result._id}
                        />
                    </Backdrop>
                )}
                {messages && (
                    <Backdrop bool={bool} pad={"50px 0"}>
                        <Messages cancel={cancelMessages} />
                    </Backdrop>
                )}
                <div className="w-[100%] flex gap-[8px] mb-[100px] ">
                    {/* <AudioProfileContainer
          width={"50%"}
          titles={titles}
          check={false}
          current={0}
          info={dummy.audioCallDetails}
        /> */}
                    <RecordProfile
                        width={"42%"}
                        titles={titles}
                        check={false}
                        current={0}
                        info={dummy.audioCallDetails}
                        data1={data?.result}
                    />
                    <div className="w-[58%] min-h-[50vh] bg-white rounded-xl">
                        <Script data={data?.result} scripts={scripts} />
                    </div>
                </div>
                {/* write your code here for profile page manya! */}
            </div>
        </>
    );
};

export default MeetingProfile;

export async function getServerSideProps({ query, params }: any) {
    // "https://sales365.trainright.fit/api/active-call/find-all"
    try {
        const response = await axios.get(
            `https://sales365.trainright.fit/api/meeting/find-by-id?id=${params.id}`
        );
        // const another = await axios.get(
        //   `https://sales365.trainright.fit/api/meeting-script/active-call?activeCallId=${response?.data?.result?._id}`
        // );
        return {
            props: {
                // TODO: Can do better error handling here by passing another property error in the component
                data: response.data || {},
                // scripts: another.data || {},
            }, // will be passed to the page component as props
        };
    } catch (error) {
        return {
            props: {
                // TODO: Can do better error handling here by passing another property error in the component
                // data: response.data || {},
                // scripts: another.data || {},
            }, // will be passed to the page component as props
        };
    }
}
