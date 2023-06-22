import SimpleButton from "@/utils/Button/SimpleButton";
import axios from "axios";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const PromptEdit = ({ cancel, leadid }: any) => {
  const [currentTab, setCurrentTab] = useState("dealInfo"); // Initial tab is "Deal Info"

  const renderContent = () => {
    if (currentTab === "dealInfo") {
      return (
        <>
          <h1 className="text-[#3f434a] text-[31px] font-medium mb-[24px] tracking-[1px]">
            Deal Info
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
            onSubmit={(values) => {
              // Handle form submission
              console.log(values);
              // Submit logic here
              cancel();
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
                    <option value="">Select Interested Product/Service</option>
                    <option value="product1">Product 1</option>
                    <option value="product2">Product 2</option>
                    {/* Add more options as needed */}
                  </Field>
                </div>
              </div>
              <div className="mt-6 col-span-2">
                <SimpleButton
                  theme={1}
                  text="Save"
                  left={20}
                  right={0}
                  //   type="submit"
                />

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
            </Form>
          </Formik>
        </>
      );
    } else if (currentTab === "leadInfo") {
      return (
        <>
          <h1 className="text-[#3f434a] text-[31px] font-medium mb-[24px] tracking-[1px]">
            Lead Info
          </h1>
          <Formik
            initialValues={{
              leadId: "",
              leadTitle: "",
              companyName: "",
              companyLocation: "",
              linkedin: "",
              twitter: "",
              websiteUrl: "",
              industryType: "",
              leadOwner: "",
              leadStage: "",
              leadStatus: "",
              leadSource: "",
              leadOwnerSecondary: "",
            }}
            onSubmit={(values) => {
              // Handle form submission
              console.log(values);
              // Submit logic here
              cancel();
            }}
          >
            <Form className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <div className="mb-4">
                  <label
                    htmlFor="leadId"
                    className="block font-medium mb-2 text-[#8a9099]"
                  >
                    Lead ID
                  </label>
                  <Field
                    type="text"
                    id="leadId"
                    name="leadId"
                    className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="leadTitle"
                    className="block font-medium mb-2 text-[#8a9099]"
                  >
                    Lead Title
                  </label>
                  <Field
                    type="text"
                    id="leadTitle"
                    name="leadTitle"
                    className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="companyName"
                    className="block font-medium mb-2 text-[#8a9099]"
                  >
                    Company Name
                  </label>
                  <Field
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="companyLocation"
                    className="block font-medium mb-2 text-[#8a9099]"
                  >
                    Company Location
                  </label>
                  <Field
                    type="text"
                    id="companyLocation"
                    name="companyLocation"
                    className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="linkedin"
                    className="block font-medium mb-2 text-[#8a9099]"
                  >
                    LinkedIn
                  </label>
                  <Field
                    type="

text"
                    id="linkedin"
                    name="linkedin"
                    className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                  />
                </div>
                <div className="mb-4">
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
                <div className="mb-4">
                  <label
                    htmlFor="websiteUrl"
                    className="block font-medium mb-2 text-[#8a9099]"
                  >
                    Website URL
                  </label>
                  <Field
                    type="text"
                    id="websiteUrl"
                    name="websiteUrl"
                    className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="industryType"
                    className="block font-medium mb-2 text-[#8a9099]"
                  >
                    Industry Type
                  </label>
                  <Field
                    type="text"
                    id="industryType"
                    name="industryType"
                    className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="mb-4">
                  <label
                    htmlFor="leadOwner"
                    className="block font-medium mb-2 text-[#8a9099]"
                  >
                    Lead Owner
                  </label>
                  <Field
                    as="select"
                    id="leadOwner"
                    name="leadOwner"
                    className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                  >
                    <option value="">Select Lead Owner</option>
                    <option value="owner1">Owner 1</option>
                    <option value="owner2">Owner 2</option>
                    {/* Add more options as needed */}
                  </Field>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="leadStage"
                    className="block font-medium mb-2 text-[#8a9099]"
                  >
                    Lead Stage
                  </label>
                  <Field
                    as="select"
                    id="leadStage"
                    name="leadStage"
                    className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                  >
                    <option value="">Select Lead Stage</option>
                    <option value="stage1">Stage 1</option>
                    <option value="stage2">Stage 2</option>
                    {/* Add more options as needed */}
                  </Field>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="leadStatus"
                    className="block font-medium mb-2 text-[#8a9099]"
                  >
                    Lead Status
                  </label>
                  <Field
                    as="select"
                    id="leadStatus"
                    name="leadStatus"
                    className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                  >
                    <option value="">Select Lead Status</option>
                    <option value="status1">Status 1</option>
                    <option value="status2">Status 2</option>
                    {/* Add more options as needed */}
                  </Field>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="leadSource"
                    className="block font-medium mb-2 text-[#8a9099]"
                  >
                    Lead Source
                  </label>
                  <Field
                    type="text"
                    id="leadSource"
                    name="leadSource"
                    className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="leadOwnerSecondary"
                    className="block font-medium mb-2 text-[#8a9099]"
                  >
                    Lead Owner Secondary
                  </label>
                  <Field
                    as="select"
                    id="leadOwnerSecondary"
                    name="leadOwnerSecondary"
                    className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                  >
                    <option value="">Select Lead Owner Secondary</option>
                    <option value="ownerSecondary1">Owner Secondary 1</option>
                    <option value="ownerSecondary2">Owner Secondary 2</option>
                    {/* Add more options as needed */}
                  </Field>
                </div>
              </div>
              <div className="mt-6 col-span-2">
                <SimpleButton
                  theme={1}
                  text="Save"
                  left={20}
                  right={0}
                  //   type="submit"
                />
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
            </Form>
          </Formik>
        </>
      );
    } else if (currentTab === "contactInfo") {
      return (
        <>
          <h1 className="text-[#3f434a] text-[31px] font-medium mb-[24px] tracking-[1px]">
            Contact Info
          </h1>
          <Formik
            initialValues={{
              primaryClientName: "",
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
            onSubmit={(values) => {
              // Handle form submission
              console.log(values);
              // Submit logic here
              cancel();
            }}
          >
            <Form className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <h2 className="text-[#3f434a] text-[18px] font-medium mb-[16px] tracking-[1px]">
                  Primary Client POC
                </h2>
                <div className="mb-4">
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
                <div className="mb-4">
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
                <div className="mb-4">
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
              <div className="mb-4">
                <h2 className="text-[#3f434a] text-[18px] font-medium mb-[16px] tracking-[1px]">
                  Contact Details
                </h2>
                <div className="mb-4">
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
                <div className="mb-4">
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
              </div>
              <div className="mb-4">
                <h2 className="text-[#3f434a] text-[18px] font-medium mb-[16px] tracking-[1px]">
                  Social Media
                </h2>
                <div className="mb-4">
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
                <div className="mb-4">
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
                  More Contact Information - 1
                </h2>
                <div className="mb-4">
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
                <div className="mb-4">
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
                <div className="mb-4">
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
              <div className="mb-4">
                <h2 className="text-[#3f434a] text-[18px] font-medium mb-[16px] tracking-[1px]">
                  More Contact Information - 1 Details
                </h2>
                <div className="mb-4">
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
                <div className="mb-4">
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
              <div className="mt-6 col-span-2">
                <SimpleButton
                  theme={1}
                  text="Save"
                  left={20}
                  right={0}
                  //   type="submit"
                />
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
            </Form>
          </Formik>
        </>
      );
    }
  };

  return (
    <div className="w-[100%] h-[100%] py-[30px] pl-[40px] pr-[40px] relative">
      <div className="flex space-x-4 mb-4">
        <button
          className={`${
            currentTab === "dealInfo"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          } px-4 py-2 rounded-md`}
          onClick={() => setCurrentTab("dealInfo")}
        >
          Deal Info
        </button>
        <button
          className={`${
            currentTab === "leadInfo"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          } px-4 py-2 rounded-md`}
          onClick={() => setCurrentTab("leadInfo")}
        >
          Lead Info
        </button>
        <button
          className={`${
            currentTab === "contactInfo"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          } px-4 py-2 rounded-md`}
          onClick={() => setCurrentTab("contactInfo")}
        >
          Contact Info
        </button>
      </div>
      <div className="custom-scroll-black w-[100%] h-[80%] pb-[60px] overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default PromptEdit;
