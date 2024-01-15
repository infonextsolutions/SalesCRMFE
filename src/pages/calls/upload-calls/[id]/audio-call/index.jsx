import React, { useEffect, useState } from "react";
import Navigation from "@/components/app/Navigation";
import AudioProfileContainer from "@/components/Profile/UploadProfileContainer";
import dummy from "@/shared/dummy";
import Audio from "@/components/upload-calls/audio/index";
import axios from "axios";
import { useSelector } from "react-redux";
import Backdrop from "@/components/View/Backdrop/Center";
import FullCall from "@/components/View/full-call";
import CallSnippet from "@/components/View/call-snippet";
import { useAppDispatch } from "@/store/store";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/router";
import { setLoggedInStatus, setUser1 } from "@/store/auth";
//Manya will make this page

const CallProfile = () => {
  const titles = ["CALL INFO", "COMMENTS", "NOTES", "COACHING"];
  const [fullCall, setFullCall] = useState(false);
  const [snippet, setSnippet] = useState(false);
  const [bool, setBool] = useState(true);
  const [data, setData] = useState({});
  const [data1, setData1] = useState({});
  const [accessToken, setAccessToken] = useState("");

  const state = useSelector((state) => state.ui);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (window !== undefined) {
      setAccessToken(localStorage.getItem("access-token"));
    }
  }, []);

  useEffect(() => {
    try {
      axios.post(
        `https://sales365.trainright.fit/api/recording/getManualRecording`,
        {
          transId: id,
        }, { headers: { Authorization: accessToken } }
      ).then((res) => {
        setData(res.data);
      });
    } catch (error) {

    }
  }, [accessToken]);

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

  const addCall = (e, e1) => {
    if (e1 === 0) {
      showFull();
    } else if (e1 === 1) {
      showSnippet();
    }
  };

  const state1 = useSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const [logged] = useLocalStorage("logged", "loading");
  const [userId] = useLocalStorage("user-id", "not-loaded");
  const [name] = useLocalStorage("user-name", "not-loaded");
  const [role] = useLocalStorage("user-role", "not-loaded");

  React.useEffect(() => {
    const doACall = async () => {
      // const res = axios.post(
      //   `https://${ExotelKey}:${ExotelToken}@api.exotel.com/v3/accounts/westoryboard1/calls`,
      //   {
      //     from: {
      //       contact_uri: "+9199XXXXXXX",
      //       state_management: "true",
      //     },
      //   }
      // );
    };
    // doACall();
  }, []);

  React.useEffect(() => {
    if (!state1.isLoggedIn) {
      if (logged === "loading" || logged === "loggedIn") {
        if (userId === null || name === null || role === null) {
          router.push("/login");
        }
        if (userId && name && role) {
          if (
            userId !== "not-loaded" &&
            name !== "not-loaded" &&
            role !== "not-loaded"
          ) {
            dispatch(setUser1({ _id: userId, User: name, Role: role }));
            dispatch(setLoggedInStatus(true));
          }
        }
      } else if (logged === null) {
        router.push("/login");
      }
    }
  }, [userId, name, role, logged]);

  React.useEffect(() => {
    if (!state.isLoggedIn) {
      if (logged === null) {
        router.push("/login");
      }
    }
  }, [state.isLoggedIn, logged]);

  return (
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
            dark: false,
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
          <Audio data={data} />
        </div>
        <AudioProfileContainer
          data={data}
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
  );
};

export default CallProfile;

// export async function getServerSideProps({ query, params }: any) {
//   const response = await axios.post(
//     `https://sales365.trainright.fit/api/recording/getManualRecording`,
//     {
//       transId: params.id,
//     }
//   );

//   return {
//     props: {
//       // TODO: Can do better error handling here by passing another property error in the component
//       data: response.data.data || {},
//       data1: {},
//     }, // will be passed to the page component as props
//   };
// }
