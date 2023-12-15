import Navigator from "@/utils/customNavigator";
import SimpleButton from "@/utils/Button/SimpleButton";
import React, { useState } from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { LeadId } from "@/types/leadId";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import { setSuccess } from "@/store/ai";
import { useAppDispatch } from "@/store/store";
import { CompanyId, CustomerId } from "@/types/Leads";

const FormEditContainer = ({
  titles,
  current,
  info,
  update,
  data,
  width,
  cancel,
  title,
}: FormEditContainerProps) => {
  const [activeTitle, setActiveTitle] = useState(
    window.location.pathname.split("/").pop()
  );
  console.log(
    "------------------------ active Title --------------------",
    activeTitle
  );
  // company-profile lead-profile client-profile
  function CallBack(childData: any) {
    setActiveTitle(childData);
  }
  const list = titles.map((title: any, i: any) => ({ id: i, title: title }));

  console.log(
    "+++++++++++++++++++++++ here is form data ++++++++++++++++++++++++",
    data
  );
  const dispatch = useAppDispatch();
  return (
    <div
      className={`w-[${width ? width : "100%"
        }] bg-white rounded-xl overflow-auto p-[10px] px-[30px] pt-[8px] `}
    >
      {/* <Navigator callback={CallBack} current={current} list={list} /> */}
      <h1 className="w-[100%] text-[#3F434A] text-center pt-[10px] font-medium text-3xl">
        {title}
      </h1>
      <div className="flex justify-between pl-[20px] relative ">
        <div className="text-black text-[14px] overflow-auto leading-[21px] mt-[10px] w-[100%] tracking-wide  ">
          {activeTitle === "lead-profile" && (
            <>
              <div className="w-[100%] h-[100%]  py-[30px] pl-[40px] pr-[40px]  relative">
                <h1 className="text-[#3f434a] text-[22px] font-medium  mb-[24px] tracking-[1px]">
                  Lead Information
                </h1>
                <Formik
                  initialValues={{
                    ...data,
                    lead_title: data?.lead_title,
                    lead_description: data?.lead_description,
                    lead_manager: data?.manager,
                    product_category: data?.product_category,
                    lead_owner:
                      data.owners.length > 0 ? data.owners[0].name : "",
                    Stage: data?.leadStage,
                    Status: data?.leadStatus,
                    Source: data?.leadSource,
                    inquiryType: data?.inquiry,
                    dealSize: data?.potential_deal_size,
                    existingBudget: data?.existing_budget,
                    winProbability: data?.win_probability,
                    leadCreatedBy: data?.created_by,
                  }}
                  onSubmit={async (values) => {
                    console.log(
                      ">>>>>>>>>>>> EIDT LEAD : ONSUBMIT VALUES >>>>>>>>>>>>",
                      values
                    );
                    try {
                      const val = {
                        _id: data._id,
                        lead_title: values.lead_title,
                        lead_description: values?.lead_description,
                        product_category: values?.product_category,
                        owners: [values.lead_owner],
                        manager: values.lead_manager,
                        leadStage: values.Stage,
                        leadStatus: values.Status,
                        leadSource: values.Source,
                      };
                      update();
                      const response = await axios.put(
                        "https://salescrmbe.onrender.com/api/leads/update",
                        val
                      );
                      dispatch(
                        setSuccess({
                          show: true,
                          success: "Data Updated Successfully!",
                        })
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
                  {({ handleSubmit }) => (
                    <Form className="custom-scroll-black w-[100%] flex justify-between pr-[20px] pb-[50px]">
                      <div className="flex flex-col w-[100%] gap-4">
                        <div className="w-[100%]">
                          <label
                            className="font-medium text-[#8a9099]"
                            htmlFor="lead_title"
                          >
                            Lead Title*
                          </label>
                          <Field
                            type="text"
                            name="lead_title"
                            id="lead_title"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder="Lead title"
                          />
                        </div>
                        <div className="w-[100%]">
                          <label
                            className="font-medium text-[#8a9099]"
                            htmlFor="lead_description"
                          >
                            Lead Description*
                          </label>
                          <Field
                            type="text"
                            name="lead_description"
                            id="lead_description"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder="Lead Description"
                          />
                        </div>
                        <div className="w-[100%]">
                          <label
                            htmlFor=""
                            className="block font-medium mb-2 text-[#8a9099]"
                          >
                            Lead Source*
                          </label>
                          <Field
                            as="select"
                            id="Source"
                            name="Source"
                            className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          >
                            <option value="" selected>
                              -- Select Lead Source --
                            </option>
                            <option value="Website">Website</option>
                            <option value="Referrals">Referrals</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Email Marketing">
                              Email Marketing
                            </option>
                            <option value="Paid Advertising">
                              Paid Advertising
                            </option>
                            <option value="Events">Events</option>
                            <option value="Offline Channels">
                              Offline Channels
                            </option>
                            <option value="Content Marketing">
                              Content Marketing
                            </option>
                            <option value="Partnerships">Partnerships</option>
                          </Field>
                        </div>
                        <div className="w-[100%]">
                          <label
                            htmlFor=""
                            className="font-medium text-[#8a9099]"
                          >
                            Lead Owner*
                          </label>
                          <Field
                            as="select"
                            id="lead_owner"
                            name="lead_owner"
                            className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          >
                            <option value="" selected>
                              -- Select Lead Owner --
                            </option>
                            <option value="507f1f77bcf86cd799439011">
                              LO1
                            </option>
                            <option value="507f191e810c19729de860ea">
                              LO2
                            </option>
                            <option value="00000020f51bb4362eee2a4d">
                              LO3
                            </option>
                          </Field>
                        </div>
                        <div className="w-[100%]">
                          <label
                            htmlFor="lead_manager"
                            className="font-medium text-[#8a9099]"
                          >
                            Lead Manager*
                          </label>
                          <Field
                            as="select"
                            id="lead_manager"
                            name="lead_manager"
                            className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          >
                            <option value="" selected>
                              -- Select Lead Manager --
                            </option>
                            <option value="507f1f77bcf86cd799439011">LM1</option>
                            <option value="507f191e810c19729de860ea">LM2</option>
                            <option value="00000020f51bb4362eee2a4d">LM3</option>
                          </Field>
                        </div>
                        <div className="w-[100%]">
                          <label
                            htmlFor="product_category"
                            className="block font-medium mb-2 text-[#8a9099]"
                          >
                            Product/Service*
                          </label>
                          <Field
                            as="select"
                            id="product_category"
                            name="product_category"
                            className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          >
                            <option value="" selected>
                              -- Select Product/Service --
                            </option>
                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                            <option value="P2">P3</option>
                            <option value="Product A">Product A</option>
                            <option value="Product B">Product B</option>
                            <option value="Product C">Product C</option>
                            <option value="Product D">Product D</option>
                          </Field>
                        </div>
                        <div className="flex gap-5">
                          <div className="mb-4 flex-grow">
                            <label
                              htmlFor="Status"
                              className="block font-medium mb-2 text-[#8a9099]"
                            >
                              Lead Status*
                            </label>
                            <Field
                              as="select"
                              id="Status"
                              name="Status"
                              className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                            >
                              <option value="" selected>
                                -- Select Lead Status --
                              </option>
                              <option value="open">Open</option>
                              <option value="close">Closed</option>
                            </Field>
                          </div>
                          <div className="mb-4 flex-grow">
                            <label
                              htmlFor="Stage"
                              className="block font-medium mb-2 text-[#8a9099]"
                            >
                              Lead Stage*
                            </label>
                            <Field
                              as="select"
                              id="Stage"
                              name="Stage"
                              className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                            >
                              <option value="" selected>
                                -- Select Lead Stage --
                              </option>
                              {data.leadStatus === "open" ||
                                data.leadStatus === "Open" ? (
                                <>
                                  <option value="Enquiry">Enquiry</option>
                                  <option value="Interaction">
                                    Interaction
                                  </option>
                                  <option value="Proposal">Proposal</option>
                                </>
                              ) : data.leadStatus === "close" ||
                                data.leadStatus === "Close" ? (
                                <>
                                  <option value="Win">Win</option>
                                  <option value="Lost">Lost</option>
                                  <option value="Dead">Dead</option>
                                </>
                              ) : null}
                            </Field>
                          </div>
                        </div>
                      </div>
                      <div className="absolute right-[160px] bottom-[20px] mt-[130px] flex ">
                        <SimpleButton
                          theme={2}
                          text="Cancel"
                          left={0}
                          right={40}
                          click={() => {
                            cancel();
                          }}
                        />
                      </div>
                      <div className="absolute right-[40px] bottom-[20px] mt-[130px] flex ">
                        <SimpleButton
                          theme={1}
                          text="Save"
                          left={0}
                          right={0}
                          type="submit"
                          click={() => {
                            handleSubmit();
                          }}
                        />
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </>
          )}
          {activeTitle === "company-profile" && (
            <>
              <div className="w-[100%] h-[100%]  py-[30px] pl-[40px] pr-[40px]  relative">
                <h1 className="text-[#3f434a] text-[22px] font-medium  mb-[24px] tracking-[1px]">
                  Contact Information
                </h1>
                <Formik
                  initialValues={{
                    company_name: data?.companyId?.company_name,
                    industry_type: data?.companyId?.company_product_category,
                    company_address: data?.companyId?.company_address,
                    company_description: data?.companyId?.company_description,
                    country: data?.companyId?.company_country,
                    state: data?.companyId?.company_state,
                    city: data?.companyId?.company_city,
                    company_website_url: data?.companyId?.company_website_url,
                    company_socialMedia1: data?.companyId?.company_socialMedia1,
                    company_socialMedia1Url:
                      data?.companyId?.company_socialMedia1Url,
                    company_socialMedia2: data?.companyId?.company_socialMedia2,
                    company_socialMedia2Url:
                      data?.companyId?.company_socialMedia2Url,
                  }}
                  onSubmit={async (values) => {
                    console.log(
                      ">>>>>>>>>> EDIT COMPANY : ONSUBMIT VALUES >>>>>>>>>>",
                      values
                    );
                    try {
                      const val = {
                        _id: data._id,
                        companyId: {
                          ...data.companyId,
                          _id: data.companyId._id,
                          company_name: values?.company_name,
                          company_product_category: values?.industry_type,
                          company_address: values?.company_address,
                          company_description: values?.company_description,
                          company_country: values?.country,
                          company_state: values?.state,
                          company_city: values?.city,
                          company_website_url: values?.company_website_url,
                          company_socialMedia1: values?.company_socialMedia1,
                          company_socialMedia1Url:
                            values?.company_socialMedia1Url,
                          company_socialMedia2: values?.company_socialMedia2,
                          company_socialMedia2Url:
                            values?.company_socialMedia2Url,
                        },
                      };
                      const response = await axios.put(
                        "https://salescrmbe.onrender.com/api/leads/update",
                        val
                      );
                      dispatch(
                        setSuccess({
                          show: true,
                          success: "Data Updated Successfully!",
                        })
                      );
                      update();
                      // Handle success response
                      cancel(); // Close the form or perform any other action
                    } catch (error) {
                      // Handle error
                      console.error(error);
                    }
                  }}
                >
                  {({ handleSubmit }) => (
                    <Form className="custom-scroll-black w-[100%] flex justify-between pr-[20px] pb-[50px]">
                      <div className="flex flex-col w-[100%] gap-4">
                        <div className="w-[100%]">
                          <label
                            className="font-medium text-[#8a9099]"
                            htmlFor="company_name"
                          >
                            Company Name
                          </label>
                          <Field
                            type="text"
                            name="company_name"
                            id="company_name"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder="Company Name"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h2 className="font-medium text-[#8a9099]">
                            Industry Type
                          </h2>
                          <Field
                            as="select"
                            id="industry_type"
                            name="industry_type"
                            className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          >
                            <option selected value="">
                              -- Select Industry Type --
                            </option>
                            <option value="Technology">Technology</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Finance">Finance</option>
                            <option value="Education">Education</option>
                            <option value="Hospitality">Hospitality</option>
                            <option value=" Real Estate"> Real Estate</option>
                          </Field>
                        </div>
                        <div className="w-[100%]">
                          <label
                            className="font-medium text-[#8a9099]"
                            htmlFor="lead_title"
                          >
                            Company Description
                          </label>
                          <Field
                            type="text"
                            name="company_description"
                            id="company_description"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder="Company Description"
                          />
                        </div>
                        <div className="w-[100%]">
                          <label
                            className="font-medium text-[#8a9099]"
                            htmlFor="company_address"
                          >
                            Company Address
                          </label>
                          <Field
                            type="text"
                            name="company_address"
                            id="company_address"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder="Company Location"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h2 className="font-medium text-[#8a9099]">
                            Country
                          </h2>
                          <Field
                            as="select"
                            id="company_country"
                            name="company_country"
                            className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          >
                            <option selected value="">
                              -- Select Country --
                            </option>
                            <option value="Indian">India</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Srilanka">Srilanka</option>
                            <option value="England">England</option>
                            <option value="Australia">Australia</option>
                          </Field>
                        </div>
                        <div className="w-[100%] py-2 flex items-center justify-between gap-4">
                          <div className="w-[100%]">
                            <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                              State*
                            </p>
                            <Field
                              as="select"
                              id="company_state"
                              name="company_state"
                              className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            >
                              <option value="" selected>
                                -- Select a State --
                              </option>
                              <option value="Delhi">Delhi</option>
                              <option value="UttarPradesh">UttarPradesh</option>
                              <option value="Goa">Goa</option>
                              <option value="Rajastha">Rajasthan</option>
                              <option value="kerela">Kerela</option>
                            </Field>
                          </div>
                          <div className="w-[100%]">
                            <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                              City*
                            </p>
                            <Field
                              as="select"
                              id="company_city"
                              name="company_city"
                              className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            >
                              <option value="" selected>
                                -- Select a City --
                              </option>
                              <option value="Delhi">Delhi</option>
                              <option value="Mumbai">Mumbai</option>
                              <option value="Kolkata">Kolkata</option>
                              <option value="Chennai">Chennai</option>
                              <option value="Bengalore">Bengalore</option>
                            </Field>
                          </div>
                        </div>
                        <div className="w-[100%]">
                          <label
                            className="font-medium text-[#8a9099]"
                            htmlFor="lead_title"
                          >
                            Company Website
                          </label>
                          <Field
                            type="text"
                            name="company_website_url"
                            id="company_website_url"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder="Company Website"
                          />
                        </div>
                        <div className="w-[100%] my-4">
                          <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                            Social Media 1
                          </p>
                          <Field
                            as="select"
                            id="company_socialMedia1"
                            name="company_socialMedia1"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                          >
                            <option value="" selected>
                              -- Select a Social Media --
                            </option>
                            <option value="Facebook">Facebook</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Whatsapp">Whatsapp</option>
                          </Field>
                        </div>
                        <div className="w-[100%]">
                          <label
                            className="font-medium text-[#8a9099]"
                            htmlFor="lead_title"
                          >
                            Social Media 1 URL
                          </label>
                          <Field
                            type="text"
                            name="company_socialMedia1Url"
                            id="company_socialMedia1Url"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder=" Social Media 1 URL"
                          />
                        </div>
                        <div className="w-[100%] my-4">
                          <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                            Social Media 2
                          </p>
                          <Field
                            as="select"
                            id="company_socialMedia2"
                            name="company_socialMedia2"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                          >
                            <option value="" selected>
                              -- Select a Social Media --
                            </option>
                            <option value="Facebook">Facebook</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Whatsapp">Whatsapp</option>
                          </Field>
                        </div>
                        <div className="w-[100%]">
                          <label
                            className="font-medium text-[#8a9099]"
                            htmlFor="lead_title"
                          >
                            Social Media 2 URL
                          </label>
                          <Field
                            type="text"
                            name="company_socialMedia2Url"
                            id="company_socialMedia2Url"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder=" Social Media 2 URL"
                          />
                        </div>
                      </div>
                      <div className="absolute right-[160px] bottom-[20px] mt-[200px] flex">
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
                      <div className="absolute right-[40px] bottom-[20px] mt-[200px] flex">
                        <SimpleButton
                          theme={1}
                          text="Save"
                          left={20}
                          right={0}
                          type="submit"
                          click={() => {
                            handleSubmit();
                          }}
                        />
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </>
          )}
          {activeTitle === "client-poc-profile" && (
            <>
              <div className="w-[100%] h-[100%]  py-[30px] pl-[40px] pr-[40px]  relative">
                <h1 className="text-[#3f434a] text-[22px] font-medium  mb-[24px] tracking-[1px]">
                  Deal Information
                </h1>
                <Formik
                  initialValues={{
                    customer_name: data?.customerId?.customer_name,
                    customer_designation: data?.customerId?.customer_designation,
                    customer_contact: data?.customerId?.customer_contact,
                    customer_email: data?.customerId?.customer_email,
                    customer_gender: data?.customerId?.customer_gender,
                    customer_socialMedia1:
                      data?.customerId?.customer_socialMedia1,
                    customer_socialMedia1Url:
                      data?.customerId?.customer_socialMedia1Url,
                    customer_socialMedia2:
                      data?.customerId?.customer_socialMedia2,
                    customer_socialMedia2Url:
                      data?.customerId?.customer_socialMedia2Url,
                    primary_client_poc: true
                  }}
                  onSubmit={async (values) => {
                    console.log(
                      ">>>>>>>>>> EDIT CLIENT : ONSUBMIT VALUES >>>>>>>>>>>",
                      values
                    );
                    try {
                      // add as contacts[] if primary_client_poc
                      let val = {};
                      if (values?.primary_client_poc) {
                        val = {
                          ...data,
                          customerId: {
                            ...data.customerId,
                            _id: data.customerId._id,
                            customer_name: values?.customer_name,
                            customer_designation: values?.customer_designation,
                            customer_gender: values?.customer_gender,
                            customer_contact: values?.customer_contact,
                            customer_email: values?.customer_email,
                            customer_socialMedia1: values?.customer_socialMedia1,
                            customer_socialMedia1Url:
                              values?.customer_socialMedia1Url,
                            customer_socialMedia2: values?.customer_socialMedia2,
                            customer_socialMedia2Url:
                              values?.customer_socialMedia2Url,
                          },
                        };
                      } else {
                        val = {
                          ...data,
                          customerId: {
                            ...data.customerId,
                            contacts: [
                              ...data?.customerId?.contacts,
                              {
                                customer_name: values?.customer_name,
                                customer_designation: values?.customer_designation,
                                customer_gender: values?.customer_gender,
                                customer_contact: values?.customer_contact,
                                customer_email: values?.customer_email,
                                customer_socialMedia1: values?.customer_socialMedia1,
                                customer_socialMedia1Url:
                                  values?.customer_socialMedia1Url,
                                customer_socialMedia2: values?.customer_socialMedia2,
                                customer_socialMedia2Url:
                                  values?.customer_socialMedia2Url,
                              }
                            ]
                          }
                        }
                      }
                      const response = await axios.put(
                        "https://salescrmbe.onrender.com/api/leads/update",
                        val
                      );
                      dispatch(
                        setSuccess({
                          show: true,
                          success: "Data Updated Successfully!",
                        })
                      );
                      update();
                      // Handle success response
                      cancel(); // Close the form or perform any other action
                    } catch (error) {
                      // Handle error
                      console.error(error);
                    }
                  }}
                >
                  {({ handleSubmit }) => (
                    <Form className="custom-scroll-black w-[100%] flex justify-between pr-[20px] pb-[50px]">
                      <div className="w-[100%] mb-4">
                        <div className="mb-4">
                          <div className="flex gap-5">
                            <div className="mb-4 flex-grow">
                              <label
                                htmlFor="customer_name"
                                className="block font-medium mb-2 text-[#8a9099]"
                              >
                                {/* Primary Client POC Name */}
                                Name
                              </label>
                              <Field
                                type="text"
                                id="customer_name"
                                name="customer_name"
                                className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                              />
                            </div>
                            <div className="mb-4 flex-grow">
                              <label
                                htmlFor="customer_designation"
                                className="block font-medium mb-2 text-[#8a9099]"
                              >
                                {/* Primary Client POC Designation */}
                                Designation
                              </label>
                              <Field
                                type="text"
                                id="customer_designation"
                                name="customer_designation"
                                className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-4 flex gap-5">
                          <div className="flex-grow">
                            <label
                              htmlFor="customer_contact"
                              className="block font-medium mb-2 text-[#8a9099]"
                            >
                              {/* Phone */}
                              Contact Number
                            </label>
                            <Field
                              type="text"
                              id="customer_contact"
                              name="customer_contact"
                              className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                            />
                          </div>
                          <div className="flex-grow">
                            <label
                              htmlFor="customer_email"
                              className="block font-medium mb-2 text-[#8a9099]"
                            >
                              Email
                            </label>
                            <Field
                              type="email"
                              id="customer_email"
                              name="customer_email"
                              className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                            />
                          </div>
                        </div>
                        <div className="w-1/2">
                          <label
                            htmlFor="customer_gender"
                            className="block font-medium mb-2 text-[#8a9099]"
                          >
                            Gender
                          </label>
                          <Field
                            as="select"
                            id="customer_gender"
                            name="customer_gender"
                            className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          >
                            <option value="" selected>
                              Select Gender
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </Field>
                        </div>
                        <div className="w-[100%] my-4">
                          <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                            Social Media 1
                          </p>
                          <Field
                            as="select"
                            id="customer_socialMedia1"
                            name="customer_socialMedia1"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                          >
                            <option value="" selected>
                              -- Select a Social Media --
                            </option>
                            <option value="Facebook">Facebook</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Whatsapp">Whatsapp</option>
                          </Field>
                        </div>
                        <div className="w-[100%]">
                          <label
                            className="font-medium text-[#8a9099]"
                            htmlFor="lead_title"
                          >
                            Social Media 1 URL
                          </label>
                          <Field
                            type="text"
                            name="customer_socialMedia1Url"
                            id="customer_socialMedia1Url"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder=" Social Media 1 URL"
                          />
                        </div>
                        <div className="w-[100%] my-4">
                          <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                            Social Media 2
                          </p>
                          <Field
                            as="select"
                            id="customer_socialMedia2"
                            name="customer_socialMedia2"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                          >
                            <option value="" selected>
                              -- Select a Social Media --
                            </option>
                            <option value="Facebook">Facebook</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Whatsapp">Whatsapp</option>
                          </Field>
                        </div>
                        <div className="w-[100%]">
                          <label
                            className="font-medium text-[#8a9099]"
                            htmlFor="lead_title"
                          >
                            Social Media 2 URL
                          </label>
                          <Field
                            type="text"
                            name="customer_socialMedia2Url"
                            id="customer_socialMedia2Url"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder=" Social Media 2 URL"
                          />
                        </div>

                        <div className="w-[100%] flex align-center gap-[6px] pt-[30px]">
                          <Field
                            type="checkbox"
                            name="primary_client_poc"
                            id="primary_client_poc"
                            className="w-[20px] h-[20px] accent-[red]"
                          />
                          <label
                            className="font-medium"
                            htmlFor="primary_client_poc"
                          >
                            Add as Primary Client POC
                          </label>
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
                              handleSubmit();
                            }}
                          />
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
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
  update: () => void;
  data: Root;
  cancel: any;
  title?: any;
}

export interface Root {
  _id: string;
  companyId: CompanyId;
  customerId: CustomerId;
  potential_deal_size: string;
  product_category: string;
  win_probability: string;
  created_by: string;
  customer_name: string;
  inquiry: string;
  existing_budget: string;
  leadStatus: string;
  leadStage: string;
  lead_title: string;
  lead_description: string;
  notes: Note[];
  leadSource: string;
  source?: string;
  leadId: string;
  owners: Owner[];
  manager?: string;
  __v: number;
  updatedAt: string;
  createdAt: string;
  scriptId: string;
  callId: string;
}

export interface Note {
  title: string;
  content: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Owner {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  roles: string[];
  token: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  designation: string;
}
