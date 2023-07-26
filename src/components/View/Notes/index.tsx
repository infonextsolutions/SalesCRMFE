import SimpleButton from "@/utils/Button/SimpleButton";
import axios from "axios";
import React, { useState } from "react";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import { useAppDispatch } from "@/store/store";
import { setError, setSuccess } from "@/store/ai";
const AddText = ({ top, title, width, textarea, change }: any) => {
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
      {textarea ? (
        <textarea
          className="w-[100%] h-[150px] appearance-none bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] outline-none"
          onChange={(e: any) => {
            change(e.target.value);
          }}
        />
      ) : (
        <input
          onChange={(e: any) => {
            change(e.target.value);
          }}
          type="text"
          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
        />
      )}
    </div>
  );
};
const DatePage = () => {
  return (
    <div className="w-[100%] h-[100%] cursor-pointer">
      <div className="w-[100%] h-[100%] overflow-hidden relative py-[7px] pl-[10px] px-[3px] flex items-center justify-center">
        <input
          type="date"
          className="bg-[#fff] pl-[3px] w-[100%] outline-none font-medium text-[#000] text-[14px] cursor-pointer"
          name=""
          id=""
        />
        <Image
          src={getBasicIcon("Arrow-Down 2")}
          className="absolute right-[8px] pointer-events-none cursor-pointer w-[15px] top-[15px]"
          alt=""
          style={{
            userSelect: "none",
          }}
          width={15}
          height={15}
        />
      </div>
    </div>
  );
};
const Notes = ({ cancel, leadid, update }: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useAppDispatch();

  const submit = () => {
    const body = {
      leadId: leadid,
      title: title,
      content: content,
    };
    const url = "https://testsalescrm.nextsolutions.in/api/leads/notes";
    axios
      .post(url, body)
      .then((e: any) => {
        console.log(e);
        cancel();
        dispatch(
          setSuccess({
            show: true,
            success: "Note Added Successfully!",
          })
        );
        if (update) {
          update();
        }
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
    <div className="w-[100%] h-[100%]  py-[30px] pl-[40px] pr-[40px] relative">
      <h1 className="text-[#3f434a] text-[31px] font-medium  mb-[24px] tracking-[1px]">
        Add Note
      </h1>
      <div className="custom-scroll-black w-[100%] h-[80%] pb-[60px] overflow-y-auto ">
        <div>
          <AddText
            top={"10px"}
            title="Note Title"
            textarea={false}
            change={(e: any) => {
              setTitle(e);
            }}
          />
          <AddText
            top={"10px"}
            title="Description"
            textarea={true}
            change={(e: any) => {
              setContent(e);
            }}
          />
        </div>
        {/* <div className="absolute w-[24%] border-[#ccc] flex mt-5  border-[1px] rounded-2xl h-34px] ">
          <DatePage/>
        </div> */}
        <div className="absolute right-[160px] bottom-[20px] mt-[130px] ">
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
        <div className="absolute right-[40px] bottom-[20px] mt-[130px] ">
          <SimpleButton
            theme={1}
            text={"Create"}
            left={20}
            right={0}
            click={() => {
              submit();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Notes;
