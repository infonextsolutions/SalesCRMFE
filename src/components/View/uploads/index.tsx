import SimpleButton from "@/utils/Button/SimpleButton";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

const AddText = ({ top, title, width, change }: any) => {
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
      <input
        onChange={(e: any) => {
          change(e.target.value);
        }}
        type="text"
        className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
      />
    </div>
  );
};

const Uploads = ({ cancel, leadId, id, owners }: any) => {
  const [file, setFile] = useState<any>();
  const [fileSelected, setFileSelected] = useState(false);

  const [dragActive, setDragActive] = React.useState(false);

  // handle drag events
  const handleDrag = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      // handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = function (e: any) {
    e.preventDefault();
    if (e.target.files[0]) {
      // at least one file has been selected so do something
      // handleFiles(e.target.files);

      setFile(e.target.files[0]);
      setFileSelected(true);
      console.log(e.target.files[0])
    }
  };
  console.log(file);
  const inputRef: any = React.useRef(null);

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const submit = async () => {
    try {
      if (file) {
        console.log(leadId);
  
        console.log({
          activeCallId: id,
          title: "file-1",
          file: file,
          leadId: leadId,
          userId: owners,
        });
  
        const formData = new FormData();
        formData.append("userId", owners);
        formData.append("leadId", leadId);
        formData.append("title", "file-1");
        formData.append("file", file);
        formData.append("activeCallId", id);
  
        const res = await axios.post(
          `https://testsalescrm.nextsolutions.in/api/call-script/create?activeCallId=${id}`,
          formData
        );
        console.log(res.data);
      }
      cancel()
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="w-[100%] h-[100%]  py-[30px] pl-[40px] pr-[40px]  relative">
      <h1 className="text-[#3f434a] text-[31px] font-medium  mb-[24px] tracking-[1px]">
        Upload file
      </h1>
      {fileSelected && (
        <p className="text-[#3f434a] mt-4">File selected: {file.name}</p>
      )}
      <form
        id="form-file-upload"
        className="w-[100%] h-[250px] mt-[30px]"
        onDragEnter={handleDrag}
      >
        <input
          type="file"
          accept="application/pdf"
          ref={inputRef}
          id="input-file-upload"
          multiple={true}
          onChange={handleChange}
        />
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          className={dragActive ? "drag-active" : ""}
        >
          <div>
            <Image
              src="/PDF.svg"
              alt=""
              width={30}
              height={30}
              className="mx-auto"
            />
            <p className="text-[#000] mt-[30px] ">
              Drop or{" "}
              <span
                onClick={() => {
                  onButtonClick();
                }}
                className="text-renal-blue underline cursor-pointer"
              >
                Browse
              </span>{" "}
              to upload your file. 
            </p>
          </div>
        </label>
        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          />
        )}
      </form>
      <div className="custom-scroll-black w-[100%] pb-[60px] overflow-y-auto ">
        <div className="absolute right-[40px] bottom-[40px] mt-[130px] flex ">
          <SimpleButton
            theme={2}
            text={"Cancel"}
            left={20}
            right={0}
            click={() => {
              cancel();
            }}
          />
          <SimpleButton
            theme={1}
            text={"Complete"}
            left={20}
            right={0}
            click={submit}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Uploads);
