import SimpleButton from "@/utils/Button/SimpleButton";
import axios from "axios";
import React from "react";

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

const AddLead = ({ cancel }: any) => {
  const [data, setData] = React.useState<any>({});
  console.log(data);
  const submit = () => {
    axios
      .post("https://testsalescrm.nextsolutions.in/api/leads/create", data)
      .then((e:any) => {
        cancel();
      });
  };

  return (
    <div
      className="custom-scroll-black w-[100%] h-[100vh] py-[30px] px-[50px] overflow-y-auto"
      style={{
        zIndex: 100000000000000,
      }}
    >
      <h1 className="text-[#3f434a] text-[31px] font-medium mb-[40px] tracking-[1px]">
        Add Lead
      </h1>
      <AddText
        top={"10px"}
        change={(e: any) => {
          setData({ ...data, company_name: e });
        }}
        title="Company Name"
      />
      {/* State */}
      <div className="py-1"></div>
      {/* <div className="w-[100%]">
        <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
          State*
        </p>
        <select className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none">
          <option value="">-- Select a State --</option>
          <option value="Telengana">Telengana</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Haryana">Haryana</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Karnataka">Karnataka</option>
        </select>
      </div> */}
      {/* Location dropdown */}
      <div className="py-1"></div>
      <div className="w-[100%]">
        <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
          Location*
        </p>
        <select
          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
          onChange={(e: any) => {
            setData({
              ...data,
              companyId: {
                ...data.companyId,
                company_location: e.target.value,
              },
            });
          }}
        >
          <option value="" selected>
            -- Select a location --
          </option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
          <option value="Delhi">Delhi</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Bangalore">Bangalore</option>
        </select>
      </div>
      {/* <AddText
        top={"10px"}
        change={(e: any) => {
          setData({ ...data, company_name: e });
        }}
        title="Client POC Name"
      />
      <AddText top={"10px"} title="Client POC Designation" /> */}
      <AddText
        top={"10px"}
        title="Phone"
        change={(e: any) => {
          setData({
            ...data,
            customerId: {
              ...data.customerId,
              contact: e,
            },
          });
        }}
      />
      <AddText
        top={"10px"}
        title="Email"
        change={(e: any) => {
          setData({
            ...data,
            email: e,
          });
        }}
      />
      {/* product/service */}
      <div className="py-1"></div>
      {/* <div className="w-[100%]">
        <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
          Product/Service*
        </p>
        <select
          onChange={(e: any) => {
            setData({
              ...data,
              product:
            });
          }}
          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
        >
          <option value="">Product/Service</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
        </select>
      </div> */}
      {/* Lead Inquiry */}
      <div className="py-1"></div>
      <div className="w-[100%]">
        <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
          Lead Inquiry*
        </p>
        <select
          onChange={(e: any) => {
            setData({
              ...data,
              inquiry: e.target.value,
            });
          }}
          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
        >
          <option value="" selected>
            -- Select Lead Inquiry --
          </option>
          <option value="P1">Demo Requested</option>
          <option value="P2">Task</option>
          <option value="P3">Meeting Scheduled</option>
        </select>
      </div>
      <div className="w-[100%] py-2 flex items-center justify-between">
        {/* Lead Stage */}
        <div className="py-1"></div>
        <div className="w-[100%]">
          <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
            Lead Stage*
          </p>
          <select
            onChange={(e: any) => {
              setData({
                ...data,
                leadStage: e.target.value,
              });
            }}
            className="w-[80%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[7px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
          >
            <option value="" selected>
              {" "}
              Select Lead Stage{" "}
            </option>
            <option value="Enquiry">Enquiry</option>
            <option value="Open">Open</option>
            <option value="Lost">Lost</option>
            <option value="Dead">Dead</option>
          </select>
        </div>
        {/* lead status */}
        <div className="py-2"></div>
        <div className="w-[100%]">
          <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
            Lead Status*
          </p>
          <select
            onChange={(e: any) => {
              setData({
                ...data,
                leadStatus: e.target.value,
              });
            }}
            className="w-[80%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[7px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
          >
            <option value="" selected>
              {" "}
              Select Lead Status{" "}
            </option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      <div className="w-[100%] mt-[70px] text-[#ffffff] flex ">
        <SimpleButton
          theme={1}
          text={"Save"}
          left={0}
          right={0}
          click={() => {
            submit();
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
  );
};

export default AddLead;
