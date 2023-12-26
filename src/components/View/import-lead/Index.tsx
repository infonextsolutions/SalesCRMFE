import { setError, setSuccess } from "@/store/ai";
import { useAppDispatch } from "@/store/store";
import { getBasicIcon } from "@/utils/AssetsHelper";
import SimpleButton from "@/utils/Button/SimpleButton";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Dropzone from "react-dropzone";

const Drag = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="w-[100px] flex items-end mt-[40px]">
          <Image
            src={getBasicIcon("Excel")}
            className="svg-excel"
            width={40}
            height={40}
            alt=""
          />
          <span className="text-[#3F434A] text-[18px] mx-[4px] font-medium tracking-wide">
            or
          </span>
          <Image
            src={getBasicIcon("CSV")}
            className="svg-csv"
            width={40}
            height={40}
            alt=""
          />
        </div>
        <p className="text-[#3F434A] text-[14px] font-medium tracking-wide mt-[10px] w-[280px]  text-center">
          Drop or Browse to upload your files.
        </p>
        <p className="text-[#3F434A] text-[14px] font-medium tracking-wide w-[280px] text-center">
          (.csv, .xlsx formats supported)
        </p>
      </div>
    </>
  );
};

const Loading = () => {
  return (
    <div className="flex w-[280px] bg-[#ccc] rounded-xl p-[10px] ">
      <div>
        <Image
          src={getBasicIcon("Excel")}
          className="svg-excel"
          width={40}
          height={40}
          alt=""
        />
      </div>
      <div className="w-[190px] ml-[20px] flex flex-col justify-between pb-[3px]">
        <div className="flex justify-between">
          <span className="text-[14px] text-[#3F434A] font-medium tracking-sm">
            Uploading file... 40%
          </span>
          <Image src={getBasicIcon("Cross")} width={14} height={14} alt="" />
        </div>
        <div className="w-[100%] h-[5px]  bg-white rounded-[5px] overflow-hidden">
          <div className="w-[30%] h-[5px] bg-bg-red"></div>
        </div>
      </div>
    </div>
  );
};

const Finished = () => {
  return (
    <div className="flex flex-col mt-[20px]">
      <div className="flex w-[280px] bg-[#ccc] rounded-xl p-[10px] ">
        <div>
          <Image
            src={getBasicIcon("Excel")}
            className="svg-excel"
            width={40}
            height={40}
            alt=""
          />
        </div>
        <div className="w-[190px] ml-[20px] flex flex-col justify-between pb-[3px]">
          <div className="flex justify-between">
            <span className="text-[14px] text-[#3F434A] font-medium tracking-sm">
              Samplefilename.xlsx
            </span>
            <Image src={getBasicIcon("Cross")} width={14} height={14} alt="" />
          </div>
          <div className="w-[100%] mt-[-10px] h-[10px]">
            <p className="text-[10px] h-[10px] text-[#3F434A] tracking-wide">
              128kb
            </p>
          </div>
        </div>
      </div>
      <p className="text-[12px] text-[#3F434A] tracking-wide text-center  mt-[10px] font-medium w-[100%]">
        Upload Complete
      </p>
    </div>
  );
};

const ErrorNotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={getBasicIcon("Check Square")}
        className="svg-excel"
        width={34}
        height={34}
        alt=""
      />
      <p className="text-[16px] mt-[10px]  text-[#3F434A] tracking-wide font-medium">
        No Errors Found.
      </p>
    </div>
  );
};

const ErrorFound = ({ error }: any) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={getBasicIcon("Alert")}
        className="svg-red"
        width={34}
        height={34}
        alt=""
      />
      <p className="text-[16px] mt-[10px]  text-[#3F434A] tracking-wide font-medium">
        {error}
      </p>
    </div>
  );
};

const Row = ({ children, border }: any) => {
  return <div className="w-[100%] h-[50px] flex ">{children}</div>;
};

const Col = ({ title, bold, width }: any) => {
  return (
    <div
      className="flex justify-center items-center h-[50px]"
      style={{
        width: width,
      }}
    >
      <p
        className="text-[#3f434a] text-[14px] font-medium m-[0] tracking-wide mt-[10px]"
        style={{
          fontWeight: bold ? 600 : 500,
        }}
      >
        {title}
      </p>
    </div>
  );
};

const Step1 = ({ next, cancel }: any) => {
  const [activeBox, setActiveBox] = useState(2);
  const [file, setFile] = useState();
  const [dropzoneActive, setDropzoneActive] = useState(false);
  const inputRef = React.useRef(null);

  function isExcelOrCSVFile(fileName: any) {
    // Convert the file name to lowercase to handle case-insensitive comparisons
    const lowerCaseFileName = fileName.toLowerCase();

    // Check if the file has a valid extension for Excel or CSV
    const validExtensions = [".xls", ".xlsx", ".csv"];

    for (const ext of validExtensions) {
      if (lowerCaseFileName.endsWith(ext)) {
        return true;
      }
    }

    // If no valid extension is found, return false
    return false;
  }

  const [error, setError1] = useState({
    show: false,
    error: "",
  });

  const dispatch = useAppDispatch();

  const handleDrop = function (e: any) {
    console.log(e, "please check here");
    if (isExcelOrCSVFile(e[0].name)) {
      // setFile(e[0]);
      console.log(e[0]);
      const formdata = new FormData();
      formdata.append("file", e[0]);
      axios
        .post(
          "https://sales365.trainright.fit/api/leads/upload/afakfabk",
          formdata
        )
        .then((e) => {
          dispatch(
            setSuccess({
              show: true,
              success: "Reply added Successfully!",
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
    } else {
      setError1({
        show: true,
        error: "wrong file type,only submit excel or csv files only",
      });
      setTimeout(() => {
        setError1({
          show: false,
          error: "wrong file type,only submit excel or csv files only",
        });
      }, 1000);
    }
  };

  return (
    <div className="w-[100%] h-[100vh] flex flex-col justify-between">
      <div className="w-[100%]">
        <h1 className="text-[#3f434a] text-[31px] font-medium mb-[8px] tracking-[1px]">
          Import Lead
        </h1>
        {/* <h3 className="text-[#3f434a] text-[22px] font-medium m-[0] tracking-[1px]">
          Step 1 of 3
        </h3> */}
        <p className="text-[#3F434A] text-[14px] font-medium tracking-wide mt-[10px]">
          Import leads using own file or use{" "}
          <span className="text-bg-red underline cursor-pointer">
            sample file
          </span>
          .
        </p>
        <Dropzone
          onDrop={handleDrop}
          // onDragEnter={() => setDropzoneActive(true)}
          // onDragLeave={() => setDropzoneActive(false)}
          // accept={{
          //   "application/pdf": [],
          // }}
          onDragEnter={() => setDropzoneActive(true)}
          onDragLeave={() => setDropzoneActive(false)}
          accept={{}}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="w-[100%] bg-[#f8f8f8] h-[200px] cursor-pointer mt-[40px] relative rounded-2xl border-dashed border-[1px] border-[#d2d4d7] flex flex-col justify-center items-center"
            >
              <input
                // accept="application/pdf"
                {...getInputProps()}
              />
              {error.show ? <ErrorFound error={error.error} /> : <Drag />}
            </div>
          )}
        </Dropzone>
        {/* <p className="text-[#3F434A] text-[14px] font-medium tracking-wide mt-[10px]">
          Check if your file has data in the{" "}
          <span className="text-bg-red underline cursor-pointer">
            mandatory fields.
          </span>
        </p> */}
      </div>
      <div>
        {/* <div>
          <p className="block mb-2 text-sm font-medium text-[#8a9099] tracking-wide">
            Owner
          </p>
          <select
            id="countries"
            className=" border border-gray-300  text-sm rounded-2xl tracking-wide text-[#3F434A] font-medium  block w-full p-2.5 bg-white"
          >
            <option selected>Choose Owner</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="mt-[20px]">
          <p className="block mb-2 text-sm font-medium text-[#8a9099] tracking-wide">
            Lead Stage
          </p>
          <select
            id="countries"
            className=" border border-gray-300  text-sm rounded-2xl tracking-wide text-[#3F434A] font-medium  block w-full p-2.5 bg-white"
          >
            <option selected>Enquiry</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div> */}
        <div className="w-[100%] flex my-[30px] ">
          <SimpleButton
            theme={1}
            text={"Next"}
            left={0}
            right={0}
            click={() => {
              next();
            }}
          />
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

const Step2 = ({ next, cancel }: any) => {
  const [activeBox, setActiveBox] = useState(0);

  return (
    <div className="w-[100%] h-[100vh] flex flex-col justify-between">
      <div className="w-[100%]">
        <h1 className="text-[#3f434a] text-[31px] font-medium mb-[8px] tracking-[1px]">
          Import Lead
        </h1>
        <h3 className="text-[#3f434a] text-[22px] font-medium m-[0] tracking-[1px]">
          Step 2 of 3
        </h3>
        <p className="text-[#3F434A] text-[14px] font-medium tracking-wide mt-[10px]">
          Import leads using own file or use{" "}
          <span className="text-bg-red underline cursor-pointer">
            sample file
          </span>
          .
        </p>
        <div
          className="w-[100%] bg-[#f8f8f8] h-[200px] cursor-grab mt-[40px] rounded-2xl border-dashed border-[1px] border-[#d2d4d7] flex flex-col justify-center items-center"
          onClick={() => {
            const random = activeBox === 1 ? 0 : 1;
            setActiveBox(random);
          }}
        >
          {activeBox === 0 && <ErrorFound />}
          {activeBox === 1 && <ErrorNotFound />}
        </div>
        <p className="text-[#3F434A] text-[14px] font-medium tracking-wide mt-[10px]">
          Check if your file has data in the{" "}
          <span className="text-bg-red underline cursor-pointer">
            mandatory fields.
          </span>
        </p>
      </div>
      <div>
        <div>
          <p className="block mb-2 text-sm font-medium text-[#8a9099] tracking-wide">
            Owner
          </p>
          <select
            id="countries"
            className=" border border-gray-300 text-gray-900 text-sm rounded-2xl tracking-wide text-[#3F434A] font-medium  block w-full p-2.5 bg-white"
          >
            <option selected>Choose Owner</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="mt-[20px]">
          <p className="block mb-2 text-sm font-medium text-[#8a9099] tracking-wide">
            Lead Stage
          </p>
          <select
            id="countries"
            className=" border border-gray-300 text-gray-900 text-sm rounded-2xl tracking-wide text-[#3F434A] font-medium  block w-full p-2.5 bg-white"
          >
            <option selected>Enquiry</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="w-[100%] flex my-[30px] ">
          <SimpleButton
            theme={1}
            text={"Next"}
            left={0}
            right={0}
            click={() => {
              next();
            }}
          />
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

const Step3 = ({ next, cancel }: any) => {
  const [activeBox, setActiveBox] = useState(2);

  const arr = [
    {
      id: "12XX23",
      companyName: "Abc V.",
      name: "Ravi",
    },
    {
      id: "12XX23",
      companyName: "Abc V.",
      name: "Ravi",
    },
    {
      id: "12XX23",
      companyName: "Abc V.",
      name: "Ravi",
    },
    {
      id: "12XX23",
      companyName: "Abc V.",
      name: "Ravi",
    },
    {
      id: "12XX23",
      companyName: "Abc V.",
      name: "Ravi",
    },
    {
      id: "12XX23",
      companyName: "Abc V.",
      name: "Ravi",
    },
    {
      id: "12XX23",
      companyName: "Abc V.",
      name: "Ravi",
    },
    {
      id: "12XX23",
      companyName: "Abc V.",
      name: "Ravi",
    },
    {
      id: "12XX23",
      companyName: "Abc V.",
      name: "Ravi",
    },
    {
      id: "12XX23",
      companyName: "Abc V.",
      name: "Ravi",
    },
    {
      id: "12XX23",
      companyName: "Abc V.",
      name: "Ravi",
    },
    {
      id: "12XX23",
      companyName: "Abc V.",
      name: "Ravi",
    },
    {
      id: "12XX23",
      companyName: "Abc V.",
      name: "Ravi",
    },
    {
      id: "12XX23",
      companyName: "Abc V.",
      name: "Ravi",
    },
  ];

  return (
    <div className="w-[100%] h-[100vh]  flex flex-col justify-between">
      <div className="w-[100%]">
        <h1 className="text-[#3f434a] text-[31px] font-medium mb-[8px] tracking-[1px]">
          Import Lead
        </h1>
        <h3 className="text-[#3f434a] text-[22px] font-medium m-[0] tracking-[1px]">
          Step 3 of 3
        </h3>
        <div className="w-[100%] py-[20px]">
          <div className="w-[100%] h-[300px] border-[1px]  border-[#000] bg-[#fafafa]">
            <Row>
              <Col width={"100px"} title={"Lead Id"} bold={true} />
              <Col width={"180px"} title={"Company Name"} bold={true} />
              <Col width={"210px"} title={"Client POC"} bold={true} />
            </Row>
            <div className="w-[100%] border-b-[1px] border-[#000]"></div>
            <div className="h-[248px] overflow-y-auto custom-scroll-black">
              {arr.map((item: any, i) => {
                return (
                  <Row key={i}>
                    <Col width={"100px"} title={item.id} bold={false} />
                    <Col
                      width={"180px"}
                      title={item.companyName}
                      bold={false}
                    />
                    <Col width={"210px"} title={item.name} bold={false} />
                  </Row>
                );
              })}
            </div>
          </div>
          <div className="w-[100%] "></div>
        </div>
      </div>
      <div>
        <div>
          <p className="block mb-2 text-sm font-medium text-[#8a9099] tracking-wide">
            Owner
          </p>
          <select
            id="countries"
            className=" border border-gray-300 text-gray-900 text-sm rounded-2xl tracking-wide text-[#3F434A] font-medium  block w-full p-2.5 bg-white"
          >
            <option selected>Choose Owner</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="mt-[20px]">
          <p className="block mb-2 text-sm font-medium text-[#8a9099] tracking-wide">
            Lead Stage
          </p>
          <select
            id="countries"
            className=" border border-gray-300 text-gray-900 text-sm rounded-2xl tracking-wide text-[#3F434A] font-medium  block w-full p-2.5 bg-white"
          >
            <option selected>Enquiry</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="w-[100%] flex my-[30px] ">
          <SimpleButton
            theme={1}
            text={"Submit"}
            left={0}
            right={0}
            click={() => {
              next();
            }}
          />
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

const ImportLead = ({ cancel }: any) => {
  const [steps, setSteps] = useState(0);

  return (
    <div className="w-[100%] h-[100vh] custom-scroll-black pt-[30px] px-[40px] flex flex-col justify-between">
      <Step1
        cancel={() => {
          cancel();
        }}
      />
      {/* {steps === 1 && (
        <Step2
          next={() => {
            setSteps(2);
          }}
          cancel={() => {
            cancel();
          }}
        />
      )}
      {steps === 2 && (
        <Step3
          next={() => {
            cancel();
          }}
          cancel={() => {
            cancel();
          }}
        />
      )} */}
    </div>
  );
};

export default ImportLead;
