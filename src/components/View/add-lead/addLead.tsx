import SimpleButton from "@/utils/Button/SimpleButton";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AddText = ({ top, title, width, change, required }: any) => {
  return (
    <div
      className="w-[100%] "
      style={{
        width: width ? width : "100%",
        marginTop: top,
      }}
    >
      <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
        {title}
      </p>
      <input
        onChange={(e: any) => {
          change(e.target.value);
        }}
        required={required}
        type="text"
        className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
      />
    </div>
  );
};

const AddLead = ({ cancel }: any) => {
  const [leadData, setLeadData] = React.useState<any>({});
  const [companyData, setCompanyData] = React.useState<any>({});
  const [contactData, setContactData] = React.useState<any>({});
  const [moreContactData1, setMoreContactData1] = React.useState<any>({});
  const [moreContactData2, setMoreContactData2] = React.useState<any>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [moreContact1, setMoreContact1] = useState(false);
  const [moreContact2, setMoreContact2] = useState(false);
  const [showMoreContactButton1, setShowMoreContactButton1] = useState(true);
  const [showMoreContactButton2, setShowMoreContactButton2] = useState(true);
  const router = useRouter();

  const hadleMoreContactButton1 = () => {
    setMoreContact1(true);
    setShowMoreContactButton1(false);
  };

  const hadleMoreContactButton2 = () => {
    setMoreContact2(true);
    setShowMoreContactButton2(false);
  };
  const goToNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const submit = () => {
    const payload = {
      leadDetails: {
        ...leadData,
        potential_deal_size: "600",
        win_probability:"100%",
        created_by: "Sales",
        customer_name: "Tanish",
        inquiry: "Demo Enquiry 1",
        existing_budget: "10000",
      },
      companyDetails: companyData,
      contactDeails: {
        contactData: contactData,
        moreContactFirst: moreContactData1,
        moreContactSecond: moreContactData2,
      },
      ...leadData,
      ...companyData,
      ...contactData
    };
    axios
      .post("https://testsalescrm.nextsolutions.in/api/leads/create", payload)
      .then((e: any) => {
        router.reload();
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
      <h1 className="text-[#3f434a] text-[31px] font-medium mb-[10px] tracking-[1px]">
        Add Lead
      </h1>
      {currentPage === 1 ? (
        <>
          <h1 className="text-[#3f434a] text-[20px] mb-[40px] tracking-[1px]">
            Lead Info
          </h1>
          <AddText
            top={"10px"}
            change={(e: any) => {
              setLeadData({ ...leadData, lead_title: e });
            }}
            title="Lead Title*"
            required={true}
          />
          <AddText
            top={"10px"}
            change={(e: any) => {
              setLeadData({
                ...leadData,
                lead_description: e,
              });
            }}
            title="Lead Description*"
            required={true}
          />
          <div className="w-[100%] my-4">
            <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
              Lead Source*
            </p>
            <select
              className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
              required={true}
              onChange={(e: any) => {
                setLeadData({
                  ...leadData,
                  leadSource: e.target.value,
                });
              }}
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
            </select>
          </div>
          <div className="w-[100%] my-4">
            <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
              Lead Owner*
            </p>
            <select
              className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
              required={true}
              onChange={(e: any) => {
                setLeadData({
                  ...leadData,
                  leadOwner: e.target.value,
                });
              }}
            >
              <option value="" selected>
                -- Select Lead Owner --
              </option>
              <option value="Ramesh">Ramesh</option>
              <option value="Riya">Riya</option>
            </select>
          </div>
          <div className="w-[100%] my-4">
            <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
              Lead Manager*
            </p>
            <select
              className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
              required={true}
              onChange={(e: any) => {
                setLeadData({
                  ...leadData,
                  leadManager: e.target.value,
                });
              }}
            >
              <option value="" selected>
                -- Select Lead Manager --
              </option>
              <option value="Rohan Sharma">Rohan Sharma</option>
            </select>
          </div>

          <div className="w-[100%] my-4">
            <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
              Product/Service*
            </p>
            <select
              required={true}
              className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
              onChange={(e: any) => {
                setLeadData({
                  ...leadData,
                  product_category: e.target.value,
                });
              }}
            >
              <option value="" selected>
                -- Select Product/Service --
              </option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
            </select>
          </div>

          <div className="w-[100%]  flex items-center justify-between">
            <div className="w-[100%]">
              <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                Lead Status*
              </p>
              <select
                required={true}
                onChange={(e: any) => {
                  setLeadData({
                    ...leadData,
                    leadStatus: e.target.value,
                  });
                }}
                className="w-[80%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[7px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
              >
                <option value="" selected>
                  -- Select Lead Status --
                </option>
                <option value="open">Open</option>
                <option value="close">Close</option>
              </select>
            </div>
            <div className="w-[100%]">
              <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                Lead Stage*
              </p>
              <select
                onChange={(e: any) => {
                  setLeadData({
                    ...leadData,
                    leadStage: e.target.value,
                  });
                }}
                className="w-[80%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[7px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
              >
                <option value="" selected>
                  -- Select Lead Stage --
                </option>
                {(leadData.leadStatus == "open" || leadData.leadStatus == "Open") ? (
                  <>
                    <option value="Enquiry">Enquiry</option>
                    <option value="Interaction">Interaction</option>
                    <option value="Proposal">Proposal</option>
                  </>
                ) : (leadData.leadStatus == "close" || leadData.leadStatus == "Close") ? (
                  <>
                    <option value="Win">Win</option>
                    <option value="Lost">Lost</option>
                    <option value="Dead">Dead</option>
                  </>
                ) : null}
              </select>
            </div>
          </div>
        </>
      ) : currentPage == 2 ? (
        <>
          <h1 className="text-[#3f434a] text-[20px] mb-[40px] tracking-[1px]">
            Company Info
          </h1>
          <AddText
            top={"10px"}
            change={(e: any) => {
              setCompanyData({
                ...companyData,
                comapany_name: e,
              });
            }}
            title="Company Name*"
            required={true}
          />
          <div className="w-[100%] my-4">
            <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
              Industry Type*
            </p>
            <select
              className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
              required={true}
              onChange={(e: any) => {
                setCompanyData({
                  ...companyData,
                  industry_type: e.target.value,
                });
              }}
            >
              {/*      */}
              <option value="" selected>
                -- Select Industry Type --
              </option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Hospitality">Hospitality</option>
              <option value=" Real Estate"> Real Estate</option>
            </select>
          </div>
          <AddText
            top={"10px"}
            change={(e: any) => {
              setCompanyData({
                ...companyData,
                company_description: e,
              });
            }}
            title="Company Description"
          />
          <AddText
            top={"10px"}
            change={(e: any) => {
              setCompanyData({
                ...companyData,
                company_address: e,
              });
            }}
            title="Company Address"
          />

          <div className="w-[100%] my-4">
            <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
              Country*
            </p>
            <select
              className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
              required={true}
              onChange={(e: any) => {
                setCompanyData({
                  ...companyData,
                  company_Country: e.target.value,
                });
              }}
            >
              <option selected value="Indian">
                Indian
              </option>
              <option value="Pakistan">Pakistan</option>
              <option value="Srilanka">Srilanka</option>
              <option value="England">England</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          <div className="w-[100%] py-2 flex items-center justify-between gap-4">
            <div className="w-[100%]">
              <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                State*
              </p>
              <select
                className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                required={true}
                onChange={(e: any) => {
                  setCompanyData({
                    ...companyData,
                    company_State: e.target.value,
                  });
                }}
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
                required={true}
                className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                onChange={(e: any) => {
                  setCompanyData({
                    ...companyData,
                    company_City: e.target.value,
                  });
                }}
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
          </div>

          <AddText
            top={"10px"}
            title="Website Link"
            change={(e: any) => {
              setCompanyData({
                ...companyData,
                website_link: e,
              });
            }}
          />

          <div className="w-[100%] my-4">
            <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
              Social Media 1
            </p>
            <select
              className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
              onChange={(e: any) => {
                setCompanyData({
                  ...companyData,
                  company_socialMedia1: e.target.value,
                });
              }}
            >
              <option value="" selected>
                -- Select a Social Media --
              </option>
              <option value="Linkedin">Linkedin</option>
              <option value="Twitter">Twitter</option>
            </select>
          </div>

          <AddText
            top={"10px"}
            title="Social Media 1 URL"
            change={(e: any) => {
              setCompanyData({
                ...companyData,
                company_socialMedia1Url: e,
              });
            }}
          />

          <div className="w-[100%] my-4">
            <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
              Social Media 2
            </p>
            <select
              className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
              onChange={(e: any) => {
                setCompanyData({
                  ...companyData,
                  company_socialMedia2: e.target.value,
                });
              }}
            >
              <option value="" selected>
                -- Select a Social Media --
              </option>
              {companyData.company_socialMedia1 == "Linkedin" ? (
                <option value="Twitter">Twitter</option>
              ) : companyData.company_socialMedia1 == "Twitter" ? (
                <option value="Linkedin">Linkedin</option>
              ) : null}
            </select>
          </div>

          <AddText
            top={"10px"}
            title="Social Media 2 URL"
            change={(e: any) => {
              setCompanyData({
                ...companyData,
                company_socialMedia21Url: e,
              });
            }}
          />
        </>
      ) : (
        <>
          <h1 className="text-[#3f434a] text-[20px] mb-[40px] tracking-[1px]">
            Contact Info
          </h1>
          <AddText
            top={"10px"}
            change={(e: any) => {
              setContactData({
                ...contactData,
                client_poc_name: e,
              });
            }}
            title="Primary Client POC Name*"
            required={true}
          />
          <AddText
            top={"10px"}
            change={(e: any) => {
              setContactData({
                ...contactData,
                designation: e,
              });
            }}
            title="Designation*"
            required={true}
          />
          <AddText
            top={"10px"}
            change={(e: any) => {
              setContactData({
                ...contactData,
                phoneNumber: e,
              });
            }}
            title="Contact Number*"
            required={true}
          />
          <AddText
            top={"10px"}
            change={(e: any) => {
              setContactData({
                ...contactData,
                email: e,
              });
            }}
            title="Email*"
            required={true}
          />
          <div className="w-[100%] my-4">
            <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
              Gender*
            </p>
            <select
              className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
              required={true}
              onChange={(e: any) => {
                setContactData({
                  ...contactData,
                  gender: e.target.value,
                });
              }}
            >
              <option value="" selected>
                -- Select Gender --
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="w-[100%] my-4">
            <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
              Social Media 1
            </p>
            <select
              className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
              onChange={(e: any) => {
                setContactData({
                  ...contactData,
                  socialMedia1: e.target.value,
                });
              }}
            >
              <option value="" selected>
                -- Select a Social Media --
              </option>
              <option value="Facebook">Facebook</option>
              <option value="Twitter">Twitter</option>
              <option value="Instagram">Instagram</option>
              <option value="Whatsapp">Whatsapp</option>
            </select>
          </div>

          <AddText
            top={"10px"}
            title="Social Media 1 URL"
            change={(e: any) => {
              setContactData({
                ...contactData,
                socialMedia1Url: e,
              });
            }}
          />

          <div className="w-[100%] my-4">
            <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
              Social Media 2
            </p>
            <select
              className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
              onChange={(e: any) => {
                setContactData({
                  ...contactData,
                  socialMedia2: e.target.value,
                });
              }}
            >
              <option value="" selected>
                -- Select a Social Media --
              </option>
              <option value="Facebook">Facebook</option>
              <option value="Twitter">Twitter</option>
              <option value="Instagram">Instagram</option>
              <option value="Whatsapp">Whatsapp</option>
            </select>
          </div>

          <AddText
            top={"10px"}
            title="Social Media 2 URL"
            change={(e: any) => {
              setContactData({
                ...contactData,
                socialMedia21Url: e,
              });
            }}
          />

          {showMoreContactButton1 && (
            <div>
              <button
                onClick={hadleMoreContactButton1}
                className="text-blue-700 my-4"
              >
                Add More Contact
              </button>
            </div>
          )}

          {moreContact1 && (
            <>
              <h1 className="text-[#3f434a] text-[20px] mt-4 mb-[20px] tracking-[1px]">
                More Contact Info - 1
              </h1>
              <AddText
                top={"10px"}
                change={(e: any) => {
                  setMoreContactData1({
                    ...moreContactData1,
                    name: e,
                  });
                }}
                title="Name*"
              />
              <AddText
                top={"10px"}
                change={(e: any) => {
                  setMoreContactData1({
                    ...moreContactData1,
                    designation: e,
                  });
                }}
                title="Designation*"
              />
              <AddText
                top={"10px"}
                change={(e: any) => {
                  setMoreContactData1({
                    ...moreContactData1,
                    phoneNumber: e,
                  });
                }}
                title="Contact Number*"
              />
              <AddText
                top={"10px"}
                change={(e: any) => {
                  setMoreContactData1({
                    ...moreContactData1,
                    email: e,
                  });
                }}
                title="Email*"
              />
              <div className="w-[100%] my-4">
                <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                  Gender*
                </p>
                <select
                  className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                  onChange={(e: any) => {
                    setMoreContactData1({
                      ...moreContactData1,
                      gender: e.target.value,
                    });
                  }}
                >
                  <option value="" selected>
                    -- Select Gender --
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="w-[100%] my-4">
                <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                  Social Media 1
                </p>
                <select
                  className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                  onChange={(e: any) => {
                    setMoreContactData1({
                      ...moreContactData1,
                      socialMedia1: e.target.value,
                    });
                  }}
                >
                  <option value="" selected>
                    -- Select a Social Media --
                  </option>
                  <option value="Facebook">Facebook</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Whatsapp">Whatsapp</option>
                </select>
              </div>

              <AddText
                top={"10px"}
                title="Social Media 1 URL"
                change={(e: any) => {
                  setMoreContactData1({
                    ...moreContactData1,
                    socialMedia1Url: e,
                  });
                }}
              />

              <div className="w-[100%] my-4">
                <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                  Social Media 2
                </p>
                <select
                  className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                  onChange={(e: any) => {
                    setMoreContactData1({
                      ...moreContactData1,
                      socialMedia2: e.target.value,
                    });
                  }}
                >
                  <option value="" selected>
                    -- Select a Social Media --
                  </option>
                  <option value="Facebook">Facebook</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Whatsapp">Whatsapp</option>
                </select>
              </div>

              <AddText
                top={"10px"}
                title="Social Media 2 URL"
                change={(e: any) => {
                  setMoreContactData1({
                    ...moreContactData1,
                    socialMedia21Url: e,
                  });
                }}
              />
            </>
          )}
          {showMoreContactButton2 && !showMoreContactButton1 && (
            <div>
              <button
                onClick={hadleMoreContactButton2}
                className="text-blue-700 my-4"
              >
                Add More Contact
              </button>
            </div>
          )}

          {moreContact2 && (
            <>
              <h1 className="text-[#3f434a] text-[20px] mt-4 mb-[20px] tracking-[1px]">
                More Contact Info - 2
              </h1>
              <AddText
                top={"10px"}
                change={(e: any) => {
                  setMoreContactData2({
                    ...moreContactData2,
                    name: e,
                  });
                }}
                title="Name*"
              />
              <AddText
                top={"10px"}
                change={(e: any) => {
                  setMoreContactData2({
                    ...moreContactData2,
                    designation: e,
                  });
                }}
                title="Designation*"
              />
              <AddText
                top={"10px"}
                change={(e: any) => {
                  setMoreContactData2({
                    ...moreContactData2,
                    phoneNumber: e,
                  });
                }}
                title="Contact Number*"
              />
              <AddText
                top={"10px"}
                change={(e: any) => {
                  setMoreContactData2({
                    ...moreContactData2,
                    email: e,
                  });
                }}
                title="Email*"
              />
              <div className="w-[100%] my-4">
                <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                  Gender*
                </p>
                <select
                  className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                  onChange={(e: any) => {
                    setMoreContactData2({
                      ...moreContactData2,
                      gender: e.target.value,
                    });
                  }}
                >
                  <option value="" selected>
                    -- Select Gender --
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="w-[100%] my-4">
                <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                  Social Media 1
                </p>
                <select
                  className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                  onChange={(e: any) => {
                    setMoreContactData2({
                      ...moreContactData2,
                      socialMedia1: e.target.value,
                    });
                  }}
                >
                  <option value="" selected>
                    -- Select a Social Media --
                  </option>
                  <option value="Facebook">Facebook</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Whatsapp">Whatsapp</option>
                </select>
              </div>

              <AddText
                top={"10px"}
                title="Social Media 1 URL"
                change={(e: any) => {
                  setMoreContactData2({
                    ...moreContactData2,
                    socialMedia1Url: e,
                  });
                }}
              />

              <div className="w-[100%] my-4">
                <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                  Social Media 2
                </p>
                <select
                  className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                  onChange={(e: any) => {
                    setMoreContactData2({
                      ...moreContactData2,
                      socialMedia2: e.target.value,
                    });
                  }}
                >
                  <option value="" selected>
                    -- Select a Social Media --
                  </option>
                  <option value="Facebook">Facebook</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Whatsapp">Whatsapp</option>
                </select>
              </div>

              <AddText
                top={"10px"}
                title="Social Media 2 URL"
                change={(e: any) => {
                  setMoreContactData2({
                    ...moreContactData2,
                    socialMedia21Url: e,
                  });
                }}
              />
            </>
          )}
        </>
      )}
      <div className="w-[100%] mt-[70px] text-[#ffffff] flex justify-end">
        <SimpleButton
          theme={2}
          text={"Cancel"}
          left={20}
          right={0}
          click={() => {
            cancel();
          }}
        />
        {currentPage === 3 ? (
          <SimpleButton
            theme={1}
            text={"Save"}
            left={0}
            right={0}
            click={() => {
              submit();
            }}
          />
        ) : (
          <SimpleButton
            theme={1}
            text={"Next"}
            left={0}
            right={0}
            click={() => {
              goToNextPage();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AddLead;
