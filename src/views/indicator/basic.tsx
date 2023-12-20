import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navigation from "@/components/app/Navigation";
import LeadsContainer from "@/components/leads/open/Container";
import Backdrop from "@/components/View/Backdrop";
import ImportLead from "@/components/View/import-lead/Index";
import AddLeadForm from "@/components/View/add-lead/addLead";
import { CSVLink } from "react-csv";
import IndicatorContainer from "@/components/Indicator/basic";
import { useRouter } from "next/router";
import NavbarWithButton from "@/components/app/Navbar/NavbarWithButton";
import Greetings from "./Greetings";

const dummyItem = {
  companyName: "ABC Corp",
  companyAddress: "Noida, UP",
  poc: "Shraddha P.",
  pocJob: "Sales Manager",
  names: "Anil L., Paul G., Rekha",
  lastActivity: "Email sent on 23 Jan 2023",
  dealSize: "11000",
  product: "Product A",
  calls: 5,
  docs: 2,
  chats: 5,
  mails: 5,
  meetings: 5,
  tasks: 5,
};

const Dummy = [
  { id: 1, type: "enquiry", data: dummyItem },
  { id: 2, type: "enquiry", data: dummyItem },
  { id: 3, type: "enquiry", data: dummyItem },
  { id: 4, type: "interaction", data: dummyItem },
  { id: 5, type: "interaction", data: dummyItem },
  { id: 6, type: "interaction", data: dummyItem },
  { id: 7, type: "interaction", data: dummyItem },
  { id: 8, type: "proposal", data: dummyItem },
  { id: 9, type: "proposal", data: dummyItem },
  { id: 10, type: "proposal", data: dummyItem },
  { id: 11, type: "win", data: dummyItem },
  { id: 12, type: "win", data: dummyItem },
  { id: 13, type: "win", data: dummyItem },
  { id: 14, type: "Lost", data: dummyItem },
  { id: 15, type: "Dead", data: dummyItem },
  { id: 16, type: "Dead", data: dummyItem },
  { id: 17, type: "Dead", data: dummyItem },
  { id: 18, type: "Dead", data: dummyItem },
];

const sideBarItems = [
  "Introduction",
  "Agenda Setting",
  "Company Introduction",
  "Product/Service",
  "Probing",
  "Next Steps Discussion",
  "Objection Handling",
];

const Indicator = () => {
  const router = useRouter();

  useEffect(() => {
    const handleBeforeHistoryChange = () => {
      router.events.on("beforeHistoryChange", handleBeforeHistoryChange);
      router.beforePopState(() => {
        router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
        return true;
      });
    };

    handleBeforeHistoryChange();

    return () => {
      router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
    };
  }, []);

  const [indicatorType, setIndicatorType] = useState(sideBarItems[0]);
  const [introductionButtons, setIntroductionButtons] = useState("Greetings");
  const [introductionGreetingsButtons, setIntroductionGreetingsButtons] =
    useState(true);
  const [introductionNameButtons, setIntroductionNameButtons] = useState(false);
  const [introductioTitleAndRolesButtons, setIntroductionTitleAndRolesButtons] =
    useState(false);
  const [
    introductionResponsibilitiesButtons,
    setIntroductionResponsibilitiesButtons,
  ] = useState(false);

  const gotoNameTab = () => {
    setIntroductionNameButtons(true);
    setIntroductionGreetingsButtons(false);
    setIntroductionTitleAndRolesButtons(false);
    setIntroductionResponsibilitiesButtons(false);
    setIntroductionButtons("Name");
  };
  const gotoTitleTab = () => {
    setIntroductionTitleAndRolesButtons(true);
    setIntroductionNameButtons(false);
    setIntroductionGreetingsButtons(false);
    setIntroductionResponsibilitiesButtons(false);
    setIntroductionButtons("Title and Roles");
  };
  const gotoResponsibilitiesTab = () => {
    setIntroductionResponsibilitiesButtons(true);
    setIntroductionTitleAndRolesButtons(false);
    setIntroductionNameButtons(false);
    setIntroductionGreetingsButtons(false);
    setIntroductionButtons("Responsibilities");
  };
  const gotoGreetingsTab = () => {
    setIntroductionGreetingsButtons(true);
    setIntroductionResponsibilitiesButtons(false);
    setIntroductionTitleAndRolesButtons(false);
    setIntroductionNameButtons(false);
    setIntroductionButtons("Greetings");
  };

  return (
    <>
      <NavbarWithButton
        src="Indicators"
        mainTitle={`Indicators > ${indicatorType}`}
        title={indicatorType == sideBarItems[0] ? introductionButtons : ""}
        buttons={[
          {
            text: "Indicator Settings",
            dropdown: true,
            id: 1,
            icon: "Settings",
            light: false,
            dark: true,
            // click: addCall,
            list: [],
          },
        ]}
      />
      <div className="w-[100%] bg-white pt-6 min-h-[90vh] pl-[20px] pr-[10px] flex">
        <div className="flex flex-col gap-4 bg-[#F0F0F0] rounded-3xl">
          <h2 className="bg-[#909193] text-white font-bold text-xl p-4 px-12 rounded-tl-2xl">
            Indicator Types
          </h2>
          <ul className="flex flex-col gap-4 items-center">
            {sideBarItems.map((item) => (
              <li
                key={item}
                onClick={() => setIndicatorType(item)}
                value={item}
                className={`${
                  indicatorType == item ? "text-bg-red" : ""
                } font-medium cursor-pointer`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {sideBarItems[0] == indicatorType && (
          <div className="bg-[#fe50430c] p-4 w-[80%]">
            <div className="w-[70%] flex items-start justify-between ">
              <button
                onClick={gotoGreetingsTab}
                className={
                  introductionGreetingsButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Grretings
              </button>
              <button
                onClick={gotoNameTab}
                className={
                  introductionNameButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Name
              </button>
              <button
                onClick={gotoTitleTab}
                className={
                  introductioTitleAndRolesButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Title and Roles
              </button>
              <button
                onClick={gotoResponsibilitiesTab}
                className={
                  introductionResponsibilitiesButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Responsibilities
              </button>
            </div>
            <hr className="mt-4" />
            {introductionGreetingsButtons && <Greetings />}
          </div>
        )}
      </div>
    </>
  );
};

export default Indicator;

interface props {
  data: any;
}
