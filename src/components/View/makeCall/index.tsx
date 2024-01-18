import SimpleButton from "@/utils/Button/SimpleButton";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AddText = ({ top, title, width, value, click }: any) => {
  const [input, setInput] = useState<any>("");
  return (
    <div
      className="w-[100%] "
      style={{
        width: width ? width : "100%",
        marginTop: top,
      }}
    >
      <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
        {title}*
      </p>
      <div className="w-[100%] flex items-center justify-between">
        <input
          value={value}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          className="w-[70%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
        />
        <div className="translate-y-[2px]">
          <SimpleButton
            height={38}
            theme={1}
            text={"Call"}
            left={20}
            right={0}
            click={() => {
              if (click) {
                click(input);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Notes = ({ cancel, data }: { cancel: () => void; data: any }) => {
  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {
    if (window !== undefined) {
      setAccessToken(localStorage.getItem("access-token") || "");
    }
  }, []);

  const makecall = async (e: any) => {
    try {
      const res = await axios.post(
        "https://sales365.trainright.fit/api/calling/make-call",
        {
          callTo: e,
          leadId: data.leadId._id,
          id: data._id
        },
        { headers: { Authorization: accessToken } }
      );
      cancel();
    } catch (err) {
      cancel();
    }
  };
  // const makecall = async (e: any) => {
  //   // const res = await axios.post(
  //   //   "https://sales365.trainright.fit/api/calling/make-call",
  //   //   {
  //   //     callTo: e,
  //   //     leadId:data._id
  //   //   }
  //   // );
  // };
  return (
    <div className="w-[100%] h-[100%]  py-[30px] pl-[40px] pr-[40px]  relative">
      <h1 className="text-[#3f434a] text-[31px] font-medium   tracking-[1px]">
        Make a Call
      </h1>
      <p className="text-[14px] text-[#000] font-medium">
        Choose a number to make a call.
      </p>
      <p className="text-[14px] text-[#8A9099] my-[10px] font-medium">
        Client POC: {data.customerId.name}
      </p>
      <div className="custom-scroll-black w-[100%] pb-[60px] overflow-y-auto ">
        <div>
          <AddText
            top={"10px"}
            title="Phone"
            value="8076166051"
            change={(e: any) => { }}
            click={() => {
              makecall("8076166051");
            }}
          />
          <p className="text-[14px] text-center text-[#8A9099] mt-[10px] font-medium">
            Or
          </p>
          <AddText
            title="New Number"
            click={(e: any) => {
              makecall(e);
            }}
          />
        </div>
        <div className="absolute right-[40px] bottom-[40px] mt-[130px] flex">
          <SimpleButton
            theme={2}
            text={"Cancel"}
            left={20}
            right={0}
            click={() => {
              cancel();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Notes;
