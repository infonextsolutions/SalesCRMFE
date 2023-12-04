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

const FormEditContainer = ({
  titles,
  current,
  info,
  update,
  data,
  width,
  cancel,
}: FormEditContainerProps) => {
  const [activeTitle, setActiveTitle] = useState(0);
  function CallBack(childData: any) {
    setActiveTitle(childData);
  }
  const list = titles.map((title: any, i: any) => ({ id: i, title: title }));

  console.log(data, "+++++++++++++++++++++++ here is form data ++++++++++++++++++++++++");
  const dispatch = useAppDispatch();
  return (
    <div
      className={`w-[${width ? width : "100%"
        }] bg-white rounded-xl overflow-auto p-[10px] px-[30px] pt-[8px] `}
    >
      {/* <Navigator callback={CallBack} current={current} list={list} /> */}
      <h1 className="w-[100%] text-[#3F434A] text-center pt-[10px] font-medium text-3xl">Edit Lead</h1>
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
                    ...data,
                    ...data.companyId,
                    lead_title: data?.lead_title,
                    lead_description: data?.lead_description,
                    lead_manager: data?.customerId?.name,
                    // company_name: data?.companyId?.company_name,
                    // company_location: data.companyId.company_location,
                    // company_description: data?.companyId?.company_description,
                    // linkedInurl: data?.companyId.linkedin_url,
                    // Twitter: data?.companyId.twitter_url,
                    // website_url: data.companyId.company_website_url,
                    industry_type: data.companyId.company_product_category,
                    lead_owner: data.owners.length > 0 ? data.owners[0].name : "",
                    Stage: data?.leadStage,
                    Status: data?.leadStatus,
                    Source: data?.source,
                    // company_socialMedia1: data?.company_socialMedia1,
                    // company_socialMedia1Url: data?.company_socialMedia1Url,
                    // company_socialMedia2: data?.company_socialMedia2,
                    // company_socialMedia2Url: data?.company_socialMedia2Url,
                    inquiryType: data.inquiry,
                    productService: data.companyId.company_product_category,
                    dealSize: data.potential_deal_size,
                    existingBudget: data.existing_budget,
                    winProbability: data.win_probability,
                    leadCreatedBy: data.created_by,
                  }}
                  onSubmit={async (values) => {
                    console.log('>>>>>>>>>>>>>>>>>>>>>>> ONSUBMIT VALUES >>>>>>>>>>>>>>>>>>>>>>>>', values)
                    try {
                      const val = {
                        _id: data._id,
                        lead_title: values.lead_title,
                        lead_description: data?.lead_description,
                        companyId: {
                          _id: data.companyId._id,
                          company_product_category: values.industry_type,
                          // company_name: values.company_name,
                          // company_location: values.company_location,
                          // company_description: values.company_description,
                          // company_website_url: values.website_url,
                          // linkedin_url: values.linkedInurl,
                          // twitter_url: values.Twitter,
                        },
                        customerId: {
                          _id: data.customerId._id,
                          name: values.lead_manager
                        },
                        // linkedInurl: values.linkedInurl,
                        // Twitter: values.Twitter,
                        owners: [values.lead_owner],
                        leadStage: values.Stage,
                        leadStatus: values.Status,
                        source: values.Source,
                        // company_socialMedia1: data?.company_socialMedia1,
                        // company_socialMedia1Url: data?.company_socialMedia1Url,
                        // company_socialMedia2: data?.company_socialMedia2,
                        // company_socialMedia2Url: data?.company_socialMedia2Url,
                      };
                      update();
                      const response = await axios.put(
                        "https://testsalescrm.nextsolutions.in/api/leads/update",
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
                          <label className="font-medium text-[#8a9099]" htmlFor="lead_title">
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
                          <label className="font-medium text-[#8a9099]" htmlFor="lead_description">
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
                            <option value="Email Marketing">Email Marketing</option>
                            <option value="Paid Advertising">Paid Advertising</option>
                            <option value="Events">Events</option>
                            <option value="Offline Channels">Offline Channels</option>
                            <option value="Content Marketing">Content Marketing</option>
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
                            <option value="507f1f77bcf86cd799439011">LO1</option>
                            <option value="507f191e810c19729de860ea">LO2</option>
                            <option value="00000020f51bb4362eee2a4d">LO3</option>
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
                            <option value="LM1">LM1</option>
                            <option value="LM2">LM2</option>
                            <option value="LM3">LM3</option>
                          </Field>
                        </div>
                        <div className="w-[100%]">
                          <label
                            htmlFor="industry_type"
                            className="block font-medium mb-2 text-[#8a9099]"
                          >
                            Product/Service*
                          </label>
                          <Field
                            as="select"
                            id="industry_type"
                            name="industry_type"
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
                              {(data.leadStatus === "open" || data.leadStatus === "Open") ? (
                                <>
                                  <option value="Enquiry">Enquiry</option>
                                  <option value="Interaction">Interaction</option>
                                  <option value="Proposal">Proposal</option>
                                </>
                              ) : (data.leadStatus === "close" || data.leadStatus === "Close") ? (
                                <>
                                  <option value="Win">Win</option>
                                  <option value="Lost">Lost</option>
                                  <option value="Dead">Dead</option>
                                </>
                              ) : null}
                            </Field>
                          </div>
                        </div>
                        {/* <div className="w-[100%]">
                          <label className="font-medium" htmlFor="company_name">
                            Company Name
                          </label>
                          <Field
                            type="text"
                            name="company_name"
                            id="company_name"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder="Company Name"
                          />
                        </div> */}
                        {/* <div className="w-[100%]">
                          <label className="font-medium" htmlFor="company_location">
                            Company Location
                          </label>
                          <Field
                            type="text"
                            name="company_location"
                            id="company_location"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder="Company Location"
                          />
                        </div> */}
                        {/* <div className="flex flex-col gap-2">
                          <h2 className="font-medium">Industry Type</h2>
                          <select
                            className="flex items-center w-[100%] justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="industry_Type"
                            name="industry_type"
                          >
                            <option selected value="">
                              -- Select Industry Type --
                            </option>
                            <option value="IT1">IT1</option>
                            <option value="IT2">IT2</option>
                          </select>
                        </div> */}
                        {/* <div className="flex flex-col gap-2">
                          <h2 className="font-medium">Country</h2>
                          <select
                            className="flex items-center w-[100%] justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="company_country"
                            name="company_country"
                          >
                            <option selected value="">
                              -- Select Country --
                            </option>
                            <option value="Indian">Indian</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Srilanka">Srilanka</option>
                            <option value="England">England</option>
                            <option value="Australia">Australia</option>
                          </select>
                        </div> */}
                        {/* <div className="w-[100%] py-2 flex items-center justify-between gap-4">
                          <div className="w-[100%]">
                            <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                              State*
                            </p>
                            <select
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
                            </select>
                          </div>
                          <div className="w-[100%]">
                            <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                              City*
                            </p>
                            <select
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
                            </select>
                          </div>
                        </div> */}
                        {/* <div className="w-[100%]">
                          <label className="font-medium" htmlFor="lead_title">
                            Company Description
                          </label>
                          <Field
                            type="text"
                            name="company_description"
                            id="company_description"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder="Company Description"
                          />
                        </div> */}
                        {/* <div className="w-[100%]">
                          <label className="font-medium" htmlFor="lead_title">
                            Company Website
                          </label>
                          <Field
                            type="text"
                            name="website_url"
                            id="website_url"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder="Company Website"
                          />
                        </div> */}

                        {/* <div className="w-[100%] my-4">
                          <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                            Social Media 1
                          </p>
                          <select
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
                          </select>
                        </div> */}
                        {/* <div className="w-[100%]">
                          <label className="font-medium" htmlFor="lead_title">
                            Social Media 1 URL
                          </label>
                          <Field
                            type="text"
                            name="company_socialMedia1Url"
                            id="company_socialMedia1Url"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder=" Social Media 1 URL"
                          />
                        </div> */}
                        {/* <div className="w-[100%] my-4">
                          <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                            Social Media 2
                          </p>
                          <select
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
                          </select>
                        </div> */}
                        {/* <div className="w-[100%]">
                          <label className="font-medium" htmlFor="lead_title">
                            Social Media 2 URL
                          </label>
                          <Field
                            type="text"
                            name="company_socialMedia2Url"
                            id="company_socialMedia2Url"
                            className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                            placeholder=" Social Media 2 URL"
                          />
                        </div> */}
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

          {/* {activeTitle === 1 && (
            <>
              <h1 className="text-[#3f434a] text-[22px] font-medium  mb-[24px] tracking-[1px]">
                Contact Information
              </h1>
              <Formik
                initialValues={{
                  primaryClientName: data.customerId.name,
                  primaryClientDesignation: data.customerId.designation,
                  gender: data.customerId.gender,
                  phone: data.customerId.contact,
                  email: data.customerId.email,
                  linkedin: "",
                  twitter: "",
                  moreContactInfoName: "",
                  moreContactInfoDesignation: "",
                  moreContactInfoGender: "",
                  moreContactInfoPhone: "",
                  moreContactInfoEmail: "",
                  moreContactInfoName1: "",
                  moreContactInfoDesignation1: "",
                  moreContactInfoGender1: "",
                  moreContactInfoPhone1: "",
                  moreContactInfoEmail1: "",
                }}
                onSubmit={async (values) => {
                  try {
                    const val = {
                      _id: data._id,
                      customerId: {
                        name: values.primaryClientName,
                        _id: data.customerId._id,
                        designation: values.primaryClientDesignation,
                        gender: values.gender,
                        contact: values.phone,
                        email: values.email,
                        contacts: [
                          {
                            name: values.moreContactInfoName,
                            designation: values.moreContactInfoDesignation,
                            gender: values.moreContactInfoGender,
                            contact: values.moreContactInfoPhone,
                            email: values.moreContactInfoEmail,
                          },
                          {
                            name: values.moreContactInfoName1,
                            designation: values.moreContactInfoDesignation1,
                            gender: values.moreContactInfoGender1,
                            contact: values.moreContactInfoPhone1,
                            email: values.moreContactInfoEmail1,
                          },
                        ],
                      },
                    };
                    const response = await axios.put(
                      "https://testsalescrm.nextsolutions.in/api/leads/update",
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
                  <Form>
                    <div className="mb-4">
                      <div className="flex gap-5">
                        <div className="mb-4 flex-grow">
                          <label
                            htmlFor="primaryClientName"
                            className="block font-medium mb-2 text-[#8a9099]"
                          >
                            Primary Client POC Name
                          </label>
                          <Field
                            type="text"
                            id="primaryClientName"
                            name="primaryClientName"
                            className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          />
                        </div>
                        <div className="mb-4 flex-grow">
                          <label
                            htmlFor="primaryClientDesignation"
                            className="block font-medium mb-2 text-[#8a9099]"
                          >
                            Primary Client POC Designation
                          </label>
                          <Field
                            type="text"
                            id="primaryClientDesignation"
                            name="primaryClientDesignation"
                            className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 flex gap-5">
                      <div className="flex-grow">
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
                          className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                        />
                      </div>
                      <div className="flex-grow">
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
                          className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                        />
                      </div>
                    </div>
                    <div className="w-1/2">
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
                        <option value="" selected>
                          Select Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Field>
                    </div>

                    <div className="my-4 ">
                      <h2 className="text-[#3f434a] text-[18px] font-medium mb-[16px] tracking-[1px]">
                        More Contact Information - 1
                      </h2>
                      <div className="mb-4 flex gap-5">
                        <div className="flex-grow">
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
                        <div className="flex-grow">
                          <label
                            htmlFor="moreContactInfoDesignation"
                            className="block font-medium mb-2 text-[#8a9099]"
                          >
                            Designation
                          </label>
                          <Field
                            type="text"
                            id="moreContactInfoDesignation"
                            name="moreContactInfoDesignation"
                            className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          />
                        </div>
                      </div>

                      <div className="mb-4 flex gap-5">
                        <div className="flex-grow">
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
                        <div className="flex-grow">
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

                      <div className="w-1/2">
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
                          <option value="" selected>
                            Select Gender
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </Field>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h2 className="text-[#3f434a] text-[18px] font-medium mb-[16px] tracking-[1px]">
                        More Contact Information - 2
                      </h2>
                      <div className="mb-4 flex gap-5">
                        <div className="flex-grow">
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
                        <div className="flex-grow">
                          <label
                            htmlFor="moreContactInfoDesignation"
                            className="block font-medium mb-2 text-[#8a9099]"
                          >
                            Designation
                          </label>
                          <Field
                            type="text"
                            id="moreContactInfoDesignation"
                            name="moreContactInfoDesignation"
                            className="w-full bg-white border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          />
                        </div>
                      </div>

                      <div className="mb-4 flex gap-5">
                        <div className="flex-grow">
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
                        <div className="flex-grow">
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

                      <div className="w-1/2">
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
                          <option value="" selected>
                            Select Gender
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
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
                            handleSubmit();
                          }}
                        />
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </>
          )} */}
          {activeTitle === 2 && (
            <>
              <h1 className="text-[#3f434a] text-[22px] font-medium  mb-[24px] tracking-[1px]">
                Deal Information
              </h1>
              <Formik
                initialValues={{
                  // leadUpdatedOn: "",
                  inquiryType: data.inquiry,
                  productService: data.companyId.company_product_category,
                  dealSize: data.potential_deal_size,
                  existingBudget: data.existing_budget,
                  winProbability: data.win_probability,
                  leadCreatedBy: data.created_by,
                  // interestedProductService: "",
                }}
                onSubmit={async (values) => {
                  try {
                    const val = {
                      _id: data._id,
                      inquiry: values.inquiryType,
                      potential_deal_size: values.dealSize,
                      existing_budget: values.existingBudget,
                      win_probability: values.winProbability,
                      created_by: values.leadCreatedBy,
                      companyId: {
                        _id: data.companyId._id,
                        company_product_category: values.productService,
                      },
                    };
                    const response = await axios.put(
                      "https://testsalescrm.nextsolutions.in/api/leads/update",
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
                  <Form className="">
                    <div className="mb-4">
                      <div className="flex gap-5">
                        <div className="mb-4 flex-grow">
                          <label
                            htmlFor=""
                            className="block font-medium mb-2 text-[#8a9099]"
                          >
                            Lead Owner
                          </label>
                          <Field
                            as="select"
                            id=""
                            name=""
                            className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          >
                            <option value="" selected>
                              -- Select Lead Owner --
                            </option>
                            <option value="LO1">LO1</option>
                            <option value="LO2">LO2</option>
                            <option value="LO3">LO3</option>
                          </Field>
                        </div>
                        <div className="mb-4 flex-grow">
                          <label
                            htmlFor=""
                            className="block font-medium mb-2 text-[#8a9099]"
                          >
                            Lead Manager
                          </label>
                          <Field
                            as="select"
                            id=""
                            name=""
                            className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          >
                            <option value="" selected>
                              -- Select Lead Manager --
                            </option>
                            <option value="LM1">LM1</option>
                            <option value="LM2">LM2</option>
                            <option value="LM3">LM3</option>
                          </Field>
                        </div>
                      </div>
                      <div className="flex gap-5">
                        <div className="mb-4 flex-grow">
                          <label
                            htmlFor="primaryClientName"
                            className="block font-medium mb-2 text-[#8a9099]"
                          >
                            Lead Status
                          </label>
                          <Field
                            as="select"
                            id="primaryClientName"
                            name="primaryClientName"
                            className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          >
                            <option value="" selected>
                              -- Select Lead Status --
                            </option>
                            <option value="Open">Open</option>
                            <option value="Closed">Closed</option>
                          </Field>
                        </div>
                        <div className="mb-4 flex-grow">
                          <label
                            htmlFor="primaryClientDesignation"
                            className="block font-medium mb-2 text-[#8a9099]"
                          >
                            Lead Stage
                          </label>
                          <Field
                            as="select"
                            id="primaryClientDesignation"
                            name="primaryClientDesignation"
                            className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          >
                            <option value="" selected>
                              -- Select Lead Stage --
                            </option>
                            <option value="Enquiry">Enquiry</option>
                            <option value="Open">Open</option>
                            <option value="Lost">Lost</option>
                            <option value="Dead">Dead</option>
                          </Field>
                        </div>
                      </div>
                      <div className="mb-4 flex-grow w-1/2">
                        <label
                          htmlFor=""
                          className="block font-medium mb-2 text-[#8a9099]"
                        >
                          Lead Source
                        </label>
                        <Field
                          as="select"
                          id=""
                          name=""
                          className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                        >
                          <option value="" selected>
                            -- Select Lead Source --
                          </option>
                          <option value="LS1">LS1</option>
                          <option value="LS2">LS2</option>
                          <option value="LS3">LS3</option>
                        </Field>
                      </div>
                      <h1 className="text-[#3f434a] text-[22px] font-medium  mb-[24px] tracking-[1px]">
                        More Information
                      </h1>
                      <div className="flex gap-5">
                        <div className="mb-4 flex-grow">
                          <label
                            htmlFor=""
                            className="block font-medium mb-2 text-[#8a9099]"
                          >
                            Lead Last Updated On
                          </label>
                          <Field
                            type="text"
                            id=""
                            name=""
                            className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          />
                        </div>
                        <div className="mb-4 flex-grow">
                          <label
                            htmlFor=""
                            className="block font-medium mb-2 text-[#8a9099]"
                          >
                            Lead Created By
                          </label>
                          <Field
                            as="select"
                            id=""
                            name=""
                            className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          >
                            <option value="" selected>
                              -- Select --
                            </option>
                            <option value="LM1">LM1</option>
                            <option value="LM2">LM2</option>
                            <option value="LM3">LM3</option>
                          </Field>
                        </div>
                      </div>
                      <div className="flex gap-5">
                        {/* <div className="mb-4 flex-grow">
                          <label
                            htmlFor="primaryClientName"
                            className="block font-medium mb-2 text-[#8a9099]"
                          >
                            Product/Service
                          </label>
                          <Field
                            as="select"
                            id="primaryClientName"
                            name="primaryClientName"
                            className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          >
                            <option value="" selected>
                              -- Select Product/Service --
                            </option>
                            <option value="Open">Open</option>
                            <option value="Closed">Closed</option>
                          </Field>
                        </div> */}
                        <div className="mb-4 flex-grow">
                          <label
                            htmlFor="primaryClientDesignation"
                            className="block font-medium mb-2 text-[#8a9099]"
                          >
                            Past Product/Service Interactions
                          </label>
                          <Field
                            as="select"
                            id="primaryClientDesignation"
                            name="primaryClientDesignation"
                            className="w-full bg-white font-medium border-[#e8e9eb] border-[2px] rounded-[13px] py-[10px] px-[14px] outline-none text-[#3f434a]"
                          >
                            <option value="" selected>
                              -- Select Past Product/Service Interactions --
                            </option>
                            <option value="Enquiry">Enquiry</option>
                            <option value="Open">Open</option>
                            <option value="Lost">Lost</option>
                            <option value="Dead">Dead</option>
                          </Field>
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
                            handleSubmit();
                          }}
                        />
                      </div>
                    </div>
                  </Form>
                )}
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
  update: () => void;
  data: Root;
  cancel: any;
}

export interface Root {
  _id: string;
  companyId: CompanyId;
  customerId: CustomerId;
  potential_deal_size: string;
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
  source: string;
  leadId: string;
  owners: Owner[];
  __v: number;
  updatedAt: string;
  createdAt: string;
  scriptId: string;
  callId: string;
  company_socialMedia1?: string;
  company_socialMedia2?: string;
  company_socialMedia1Url?: string;
  company_socialMedia2Url?: string;
}

export interface CompanyId {
  _id: string;
  company_name: string;
  company_website_url: string;
  company_icon: string;
  company_location: string;
  company_product_category: string;
  company_description: string;
  createdAt: string;
  updatedAt: string;
  linkedin_url: string;
  twitter_url: string;
  __v: number;
}

export interface CustomerId {
  _id: string;
  name: string;
  contact: string;
  email: string;
  parentId: string;
  designation: string;
  companyId: string;
  createdAt: string;
  updatedAt: string;
  gender: string;
  __v: number;
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
