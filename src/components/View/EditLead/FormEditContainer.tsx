import Navigator from "@/utils/customNavigator";
import SimpleButton from "@/utils/Button/SimpleButton";
import React, { useState } from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { LeadId } from "@/types/leadId";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";


const FormEditContainer = ({
  titles,
  current,
  info,
  data,
  width,
  cancel,
}: FormEditContainerProps) => {
  const [activeTitle, setActiveTitle] = useState(0);
  function CallBack(childData: any) {
    setActiveTitle(childData);
  }
  const list = titles.map((title: any, i: any) => ({ id: i, title: title }));

  console.log(data,"here is form data")
 
  return (
    <div
      className={`w-[${
        width ? width : "100%"
      }] bg-white rounded-xl overflow-auto p-[10px] px-[30px] pt-[8px] `}
    >
      <Navigator callback={CallBack} current={current} list={list} />
      <div className="flex justify-between pl-[20px] relative ">
        <div className="text-black text-[14px] overflow-auto leading-[21px] mt-[10px] w-[100%] tracking-wide  ">
          {activeTitle === 0 && (
            <>
              <div className="w-[100%] h-[100%]  py-[30px] pl-[40px] pr-[40px]  relative">
                <h1 className="text-[#3f434a] text-[22px] font-medium  mb-[24px] tracking-[1px]">
                  Lead Information
                </h1>
                <Formik
                  initialValues={{
                    leadId: data?.leadId,
                    lead_title: data?.lead_title,
                    company_name: data?.customer_name,
                    company_location: "",
                    linkedInurl: "",
                    Twitter: "",
                    website_url: "",
                    industry_type: "",
                    lead_owner: "",
                    Stage:data?.leadStage,
                    Status:data?.leadStatus,
                    Source: data?.source,
                  }}
                  onSubmit={async (values) => {
                    try {
                      const response = await axios.post(
                        "https://testsalescrm.nextsolutions.in/api/leads/edit",
                        values
                      );
                      // Handle success response
                      console.log(response.data);
                      cancel(); // Close the form or perform any other action
                    } catch (error) {
                      // Handle error
                      console.error(error);
                    }
                  }}
                >
                  <Form className="custom-scroll-black w-[100%] flex justify-between pr-[20px] pb-[50px]">
                    <div className="w-[55%]">
                      <div className="flex items-center justify-between">
                        <div className="w-[30%]">
                          <label htmlFor="leadId">Lead Id</label>
                          <Field
                            type="text"
                            name="leadId"
                            id="leadId"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder="Lead Id" 
                          />
                        </div>
                        <div className="w-[65%]">
                          <label htmlFor="lead_title">Lead Title</label>
                          <Field
                            type="text"
                            name="lead_title"
                            id="lead_title"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder="Lead title"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="w-[48%]">
                          <label htmlFor="company_name">Company Name</label>
                          <Field
                            type="text"
                            name="company_name"
                            id="company_name"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder="Company name"
                          />
                        </div>
                        <div className="w-[48%]">
                          <label htmlFor="company_location">
                            Company Location
                          </label>
                          <Field
                            type="text"
                            name="company_location"
                            id="company_location"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder="Company location"
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <label htmlFor="linkedInurl">LinkedIn URL</label>
                        <Field
                          type="text"
                          name="linkedInurl"
                          id="linkedInurl"
                          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                          placeholder="LinkedIn"
                        />
                      </div>
                      <div className="mt-6">
                        <label htmlFor="Twitter">Twitter</label>
                        <Field
                          type="text"
                          name="Twitter"
                          id="Twitter"
                          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                          placeholder="Twitter"
                        />
                      </div>
                      <div className="mt-6">
                        <label htmlFor="website_url">Website URL</label>
                        <Field
                          type="text"
                          name="website_url"
                          id="website_url"
                          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                          placeholder="Website URL"
                        />
                      </div>
                      <div className="mt-6">
                        <label htmlFor="industry_type">Industry Type</label>
                        <Field
                          type="text"
                          name="industry_type"
                          id="industry_type"
                          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                          placeholder="Industry Type"
                        />
                      </div>
                    </div>
                    <div className="w-[40%]">
                      <div className="flex items-start justify-center">
                        <div className="flex flex-col items-center relative">
                          <div>Company Logo</div>
                          <div
                            className="h-20 w-20 rounded-full"
                            style={{ backgroundColor: "#304FFD" }}
                          ></div>
                          <div className="absolute top-0 right-0">
                            <label htmlFor="logoInput">
                              <Image
                                src={getBasicIcon("Edit")}
                                className="w-6 h-6 cursor-pointer mt-3 mr-3"
                                alt=""
                                width={16}
                                height={16}
                              />
                            </label>
                            <input
                              type="file"
                              id="logoInput"
                              className="hidden"
                              accept="image/*"
                              // onChange={handleLogoChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <label htmlFor="lead_owner">Lead Owner</label>
                        <Field
                          type="text"
                          name="lead_owner"
                          id="lead_owner"
                          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                          placeholder="Lead Owner"
                        />
                      </div>
                      <div className="mt-6">
                        <label htmlFor="Stage">Lead Stage</label>
                        <Field
                          type="text"
                          name="Stage"
                          id="Stage"
                          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                          placeholder="Lead Stage"
                        />
                      </div>
                      <div className="mt-6">
                        <label htmlFor="Status">Lead Status</label>
                        <Field
                          type="text"
                          name="Status"
                          id="Status"
                          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                          placeholder="Lead Status"
                        />
                      </div>
                      <div className="mt-6">
                        <label htmlFor="Source">Source</label>
                        <Field
                          type="text"
                          name="Source"
                          id="Source"
                          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                          placeholder="Source"
                        />
                      </div>
                    </div>
                    <div className="absolute right-[160px] bottom-[20px] mt-[130px] flex ">
                      <SimpleButton
                        theme={2}
                        text="Cancel"
                        left={20}
                        right={0}
                        click={() => {
                          cancel();
                        }}
                      />
                    </div>
                    <div className="absolute right-[40px] bottom-[20px] mt-[130px] flex ">
                      <SimpleButton
                        theme={1}
                        text="Save"
                        left={20}
                        right={0}
                        type="submit"
                        click={() => {
                          cancel();
                        }}
                      />
                    </div>
                  </Form>
                </Formik>
              </div>
            </>
          )}

          {activeTitle === 1 && (
            <>
              <h1 className="text-[#3f434a] text-[22px] font-medium  mb-[24px] tracking-[1px]">
                Contact Information
              </h1>
              <Formik
                initialValues={{
                  primaryClientName:"",
                  primaryClientDesignation: "",
                  gender: "",
                  phone: "",
                  email: "",
                  linkedin: "",
                  twitter: "",
                  moreContactInfoName: "",
                  moreContactInfoDesignation: "",
                  moreContactInfoGender: "",
                  moreContactInfoPhone: "",
                  moreContactInfoEmail: "",
                }}
                onSubmit={async (values) => {
                  try {
                    const response = await axios.post(
                      "https://testsalescrm.nextsolutions.in/api/leads/edit",
                      values
                    );
                    // Handle success response
                    console.log(response.data);
                    cancel(); // Close the form or perform any other action
                  } catch (error) {
                    // Handle error
                    console.error(error);
                  }
                }}
              >
                <Form>
                  <div className="mb-4">
                    <h2 className="text-[#3f434a] text-[18px] font-medium mb-[16px] tracking-[1px]">
                      Primary Client POC
                    </h2>
                    <div className="flex">
                      <div className="mb-4 flex-grow">
                        <label
                          htmlFor="primaryClientName"
                          className="block font-medium mb-2 text-[#8a9099]"
                        >
                          Primary Client Name
                        </label>
                        <Field
                          type="text"
                          id="primaryClientName"
                          name="primaryClientName"
                          className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                        />
                      </div>
                      <div className="mb-4 flex-grow"></div>{" "}
                      {/* Add spacing here */}
                      <div className="mb-4 flex-grow">
                        <label
                          htmlFor="primaryClientDesignation"
                          className="block font-medium mb-2 text-[#8a9099]"
                        >
                          Primary Client Designation
                        </label>
                        <Field
                          as="select"
                          id="primaryClientDesignation"
                          name="primaryClientDesignation"
                          className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                        >
                          <option value="">Select Designation</option>
                          <option value="designation1">Designation 1</option>
                          <option value="designation2">Designation 2</option>
                          {/* Add more options as needed */}
                        </Field>
                      </div>
                      <div className="mb-4 flex-grow"></div>{" "}
                      {/* Add spacing here */}
                      <div className="mb-4 flex-grow">
                        <label
                          htmlFor="gender"
                          className="block font-medium mb-2 text-[#8a9099]"
                        >
                          Gender
                        </label>
                        <Field
                          as="select"
                          id="gender"
                          name="gender"
                          className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          {/* Add more options as needed */}
                        </Field>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    <div className="mr-4">
                      <label
                        htmlFor="phone"
                        className="block font-medium mb-2 text-[#8a9099]"
                      >
                        Phone
                      </label>
                      <Field
                        type="text"
                        id="phone"
                        name="phone"
                        className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                      />
                    </div>
                    <div className="mr-4">
                      <label
                        htmlFor="email"
                        className="block font-medium mb-2 text-[#8a9099]"
                      >
                        Email
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                      />
                    </div>
                    <div className="mr-4">
                      <label
                        htmlFor="linkedin"
                        className="block font-medium mb-2 text-[#8a9099]"
                      >
                        LinkedIn
                      </label>
                      <Field
                        type="text"
                        id="linkedin"
                        name="linkedin"
                        className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="twitter"
                        className="block font-medium mb-2 text-[#8a9099]"
                      >
                        Twitter
                      </label>
                      <Field
                        type="text"
                        id="twitter"
                        name="twitter"
                        className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h2 className="text-[#3f434a] text-[18px] font-medium mb-[16px] tracking-[1px]">
                      More Contact Information - 1 Details
                    </h2>
                    <div className="mb-4 flex">
                      <div className="mr-4">
                        <label
                          htmlFor="moreContactInfoName"
                          className="block font-medium mb-2 text-[#8a9099]"
                        >
                          Name
                        </label>
                        <Field
                          type="text"
                          id="moreContactInfoName"
                          name="moreContactInfoName"
                          className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                        />
                      </div>
                      <div className="mr-4">
                        <label
                          htmlFor="moreContactInfoDesignation"
                          className="block font-medium mb-2 text-[#8a9099]"
                        >
                          Designation
                        </label>
                        <Field
                          as="select"
                          id="moreContactInfoDesignation"
                          name="moreContactInfoDesignation"
                          className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                        >
                          <option value="">Select Designation</option>
                          <option value="designation1">Designation 1</option>
                          <option value="designation2">Designation 2</option>
                          {/* Add more options as needed */}
                        </Field>
                      </div>
                      <div>
                        <label
                          htmlFor="moreContactInfoGender"
                          className="block font-medium mb-2 text-[#8a9099]"
                        >
                          Gender
                        </label>
                        <Field
                          as="select"
                          id="moreContactInfoGender"
                          name="moreContactInfoGender"
                          className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          {/* Add more options as needed */}
                        </Field>
                      </div>
                    </div>

                    {/* here add contact  */}
                    <div className="mb-4 flex">
                      <div className="mr-4">
                        <label
                          htmlFor="moreContactInfoPhone"
                          className="block font-medium mb-2 text-[#8a9099]"
                        >
                          Phone
                        </label>
                        <Field
                          type="text"
                          id="moreContactInfoPhone"
                          name="moreContactInfoPhone"
                          className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="moreContactInfoEmail"
                          className="block font-medium mb-2 text-[#8a9099]"
                        >
                          Email
                        </label>
                        <Field
                          type="email"
                          id="moreContactInfoEmail"
                          name="moreContactInfoEmail"
                          className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-16 ">
                    <div className="absolute right-[160px] bottom-[10px] flex">
                      <SimpleButton
                        theme={2}
                        text="Cancel"
                        left={20}
                        right={0}
                        click={() => {
                          cancel();
                        }}
                      />
                    </div>
                    <div className="absolute right-[40px] bottom-[10px] flex">
                      <SimpleButton
                        theme={1}
                        text="Save"
                        left={20}
                        right={0}
                        type="submit"
                        click={() => {
                          cancel();
                        }}
                      />
                    </div>
                  </div>
                </Form>
              </Formik>
            </>
          )}
          {activeTitle === 2 && (
            <>
              <h1 className="text-[#3f434a] text-[22px] font-medium  mb-[24px] tracking-[1px]">
                Deal Information
              </h1>
              <Formik
                initialValues={{
                  leadUpdatedOn: "",
                  inquiryType: "",
                  productService: "",
                  dealSize: "",
                  existingBudget: "",
                  winProbability: "",
                  leadCreatedBy: "",
                  interestedProductService: "",
                }}
                onSubmit={async (values) => {
                  try {
                    const response = await axios.post(
                      "https://testsalescrm.nextsolutions.in/api/leads/edit",
                      values
                    );
                    // Handle success response
                    console.log(response.data);
                    cancel(); // Close the form or perform any other action
                  } catch (error) {
                    // Handle error
                    console.error(error);
                  }
                }}
              >
                <Form className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <div className="mb-4">
                      <label
                        htmlFor="leadUpdatedOn"
                        className="block font-medium mb-2 text-[#8a9099]"
                      >
                        Lead Updated On
                      </label>
                      <Field
                        type="date"
                        id="leadUpdatedOn"
                        name="leadUpdatedOn"
                        className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="inquiryType"
                        className="block font-medium mb-2 text-[#8a9099]"
                      >
                        Inquiry Type
                      </label>
                      <Field
                        as="select"
                        id="inquiryType"
                        name="inquiryType"
                        className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                      >
                        <option value="">Select Inquiry Type</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        {/* Add more options as needed */}
                      </Field>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="productService"
                        className="block font-medium mb-2 text-[#8a9099]"
                      >
                        Product/Service
                      </label>
                      <Field
                        as="select"
                        id="productService"
                        name="productService"
                        className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                      >
                        <option value="">Select Product/Service</option>
                        <option value="product1">Product 1</option>
                        <option value="product2">Product 2</option>
                        {/* Add more options as needed */}
                      </Field>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="dealSize"
                        className="block font-medium mb-2 text-[#8a9099]"
                      >
                        Deal Size
                      </label>
                      <Field
                        type="number"
                        id="dealSize"
                        name="dealSize"
                        className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4">
                      <label
                        htmlFor="existingBudget"
                        className="block font-medium mb-2 text-[#8a9099]"
                      >
                        Existing Budget
                      </label>
                      <Field
                        type="number"
                        id="existingBudget"
                        name="existingBudget"
                        className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="winProbability"
                        className="block font-medium mb-2 text-[#8a9099]"
                      >
                        Win Probability
                      </label>
                      <Field
                        as="select"
                        id="winProbability"
                        name="winProbability"
                        className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                      >
                        <option value="">Select Win Probability</option>
                        <option value="10%">10%</option>
                        <option value="20%">20%</option>
                        {/* Add more options as needed */}
                      </Field>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="leadCreatedBy"
                        className="block font-medium mb-2 text-[#8a9099]"
                      >
                        Lead Created By
                      </label>
                      <Field
                        as="select"
                        id="leadCreatedBy"
                        name="leadCreatedBy"
                        className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                      >
                        <option value="">Select Lead Created By</option>
                        <option value="user1">User 1</option>
                        <option value="user2">User 2</option>
                        {/* Add more options as needed */}
                      </Field>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="interestedProductService"
                        className="block font-medium mb-2 text-[#8a9099]"
                      >
                        Interested Product/Service
                      </label>
                      <Field
                        as="select"
                        id="interestedProductService"
                        name="interestedProductService"
                        className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                      >
                        <option value="">
                          Select Interested Product/Service
                        </option>
                        <option value="product1">Product 1</option>
                        <option value="product2">Product 2</option>
                        {/* Add more options as needed */}
                      </Field>
                    </div>
                  </div>
                  <div className="mt-16 ">
                    <div className="absolute right-[160px] bottom-[10px] flex">
                      <SimpleButton
                        theme={2}
                        text="Cancel"
                        left={20}
                        right={0}
                        click={() => {
                          cancel();
                        }}
                      />
                    </div>
                    <div className="absolute right-[40px] bottom-[10px] flex">
                      <SimpleButton
                        theme={1}
                        text="Save"
                        left={20}
                        right={0}
                        type="submit"
                        click={() => {
                          cancel();
                        }}
                      />
                    </div>
                  </div>
                </Form>
              </Formik>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormEditContainer;

interface FormEditContainerProps {
  titles: any[] | any;
  current: Number;
  [key: string]: any;
  data: LeadId;
  cancel: any;
}
