import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavbarWithButton from "@/components/app/Navbar/NavbarWithButton";
import GreetingsContainer from "./indroduction/GreetingsContainer";
import NameContainer from "./indroduction/NameContainer";
import TitleAndRolesContainer from "./indroduction/TitleAndRolesContainer";
import ResponsibilitiesContainer from "./indroduction/ResponsibilitiesContainer";
import AgendaContainer from "./Agenda/AgendaContainer";
import ReportContainer from "./Agenda/ReportContainer";
import CompanyOverviewContainer from "./CompanyIntroduction/CompanyOverviewContainer";
import CompanyValuePropositionContainer from "./CompanyIntroduction/CompanyValuePropositionContainer";
import ProductContainer from "./Product/ProductContainer";
import BenefitsContainer from "./Product/BenefitsContainer";
import UsesContainer from "./Product/UsesContainer";
import ProbingNeedsContainer from "./Probing/ProbingNeedsContainer";
import ProbingChallangeContainer from "./Probing/ProbingChallangeContainer";
import ProposingDemoContainer from "./NextSteps/ProposingDemoContainer";
import SchedulingContainer from "./NextSteps/SchedulingContainer";
import SolutionOfferingContainer from "./ObjectionHandling/SolutionOfferingContainer";
import AddressConcernsContainer from "./ObjectionHandling/AddressConcernsContainer";

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
  const [agendaButtons, setAgendaButtons] = useState("Agenda");
  const [companyIntroductionButtons, setcompanyIntroductionButtons] =
    useState("Company overview");
  const [productButtons, setProductButtons] = useState(
    "Product Demo/Information"
  );
  const [probingButtons, setProbingButtons] = useState("Identifying Needs");
  const [nesxtStepsButtons, setNextStepsButtons] = useState("Proposing Demo");
  const [objectionButtons, setobjectionButtons] = useState("Solution offering");

  const [introductionGreetingsButtons, setIntroductionGreetingsButtons] =
    useState(true);
  const [introductionNameButtons, setIntroductionNameButtons] = useState(false);
  const [introductioTitleAndRolesButtons, setIntroductionTitleAndRolesButtons] =
    useState(false);
  const [
    introductionResponsibilitiesButtons,
    setIntroductionResponsibilitiesButtons,
  ] = useState(false);
  const [agendaAgendaButtons, setAgendaAgendaButtons] = useState(true);
  const [agendaReportButtons, setAgendaReportButtons] = useState(false);

  const [companyoverviewAgendaButtons, setCompanyoverviewButtons] =
    useState(true);
  const [companyPropositionReportButtons, setcompanyPropositionButtons] =
    useState(false);

  const [productDemoButtons, setProductDemoButtons] = useState(true);
  const [productBenefitsButtons, setProductBenefitsButtons] = useState(false);
  const [productUsesButtons, setProductUsesButtons] = useState(false);

  const [probingNeedsButtons, setProbingNeedsButtons] = useState(true);
  const [probingChallangeButtons, setProbingChallangeButtons] = useState(false);

  const [nextDemoButtons, setNextDemoButtons] = useState(true);
  const [nextScheduleButtons, setNextScheduleButtons] = useState(false);

  const [objectionSolutionButtons, setobjectionSolutionButtons] =
    useState(true);
  const [objectionAddressButtons, setobjectionAddressButtons] = useState(false);

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

  const gotoAgendaTab = () => {
    setAgendaAgendaButtons(true);
    setAgendaReportButtons(false);
    setAgendaButtons("Agenda");
  };
  const gotoReportBuildingTab = () => {
    setAgendaReportButtons(true);
    setAgendaAgendaButtons(false);
    setAgendaButtons("Report Building");
  };

  const gotooverviewTab = () => {
    setCompanyoverviewButtons(true);
    setcompanyPropositionButtons(false);
    setcompanyIntroductionButtons("Company overview");
  };
  const gotoPropositionTab = () => {
    setcompanyPropositionButtons(true);
    setCompanyoverviewButtons(false);
    setcompanyIntroductionButtons("Value Proposition");
  };

  const gotoDemoTab = () => {
    setProductDemoButtons(true);
    setcompanyPropositionButtons(false);
    setProductUsesButtons(false);
    setProductButtons("Product Demo/Information");
  };
  const gotoBenefitsTab = () => {
    setProductBenefitsButtons(true);
    setProductDemoButtons(false);
    setProductUsesButtons(false);
    setProductButtons("Benefits");
  };
  const gotoUsesTab = () => {
    setProductUsesButtons(true);
    setProductDemoButtons(false);
    setProductBenefitsButtons(false);
    setProductButtons("Use Cases");
  };

  const gotoNeedsTab = () => {
    setProbingNeedsButtons(true);
    setProbingChallangeButtons(false);
    setProbingButtons("Identifying Needs");
  };
  const gotoChallengesTab = () => {
    setProbingChallangeButtons(true);
    setProbingNeedsButtons(false);
    setProbingButtons("Understanding Challanges");
  };
  const gotoNextDemoTab = () => {
    setNextDemoButtons(true);
    setNextScheduleButtons(false);
    setNextStepsButtons("Proposing Demo");
  };
  const gotoScheduleTab = () => {
    setNextScheduleButtons(true);
    setNextDemoButtons(false);
    setNextStepsButtons("Scheduling Follow-up");
  };
  const gotoofferingTab = () => {
    setobjectionSolutionButtons(true);
    setobjectionAddressButtons(false);
    setobjectionButtons("Solution offering");
  };
  const gotoAddressTab = () => {
    setobjectionAddressButtons(true);
    setobjectionSolutionButtons(false);
    setobjectionButtons("Address Concerns");
  };

  console.log(productButtons);

  return (
    <>
      <NavbarWithButton
        src="Indicators"
        mainTitle={`Indicators > ${indicatorType}`}
        title={
          indicatorType == sideBarItems[0]
            ? introductionButtons
            : indicatorType == sideBarItems[1]
            ? agendaButtons
            : indicatorType == sideBarItems[2]
            ? companyIntroductionButtons
            : indicatorType == sideBarItems[3]
            ? productButtons
            : indicatorType == sideBarItems[4]
            ? probingButtons
            : indicatorType == sideBarItems[5]
            ? nesxtStepsButtons
            : indicatorType == sideBarItems[6]
            ? objectionButtons
            : ""
        }
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
            {introductionGreetingsButtons ? (
              <GreetingsContainer title={introductionButtons} />
            ) : introductionNameButtons ? (
              <NameContainer title={introductionButtons} />
            ) : introductioTitleAndRolesButtons ? (
              <TitleAndRolesContainer title={introductionButtons} />
            ) : introductionResponsibilitiesButtons ? (
              <ResponsibilitiesContainer title={introductionButtons} />
            ) : null}
          </div>
        )}
        {sideBarItems[1] == indicatorType && (
          <div className="bg-[#fe50430c] p-4 w-[80%]">
            <div className="w-[70%] flex items-start justify-between ">
              <button
                onClick={gotoAgendaTab}
                className={
                  agendaAgendaButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Agenda
              </button>
              <button
                onClick={gotoReportBuildingTab}
                className={
                  agendaReportButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Report Bulding
              </button>
            </div>
            <hr className="mt-4" />
            {agendaAgendaButtons ? (
              <AgendaContainer title={agendaButtons} />
            ) : agendaReportButtons ? (
              <ReportContainer title={agendaButtons} />
            ) : null}
          </div>
        )}
        {sideBarItems[2] == indicatorType && (
          <div className="bg-[#fe50430c] p-4 w-[80%]">
            <div className="w-[70%] flex items-start justify-between ">
              <button
                onClick={gotooverviewTab}
                className={
                  companyoverviewAgendaButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Company overview
              </button>
              <button
                onClick={gotoPropositionTab}
                className={
                  companyPropositionReportButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Value Proposition
              </button>
            </div>
            <hr className="mt-4" />
            {companyoverviewAgendaButtons ? (
              <CompanyOverviewContainer title={companyIntroductionButtons} />
            ) : companyPropositionReportButtons ? (
              <CompanyValuePropositionContainer
                title={companyIntroductionButtons}
              />
            ) : null}
          </div>
        )}
        {sideBarItems[3] == indicatorType && (
          <div className="bg-[#fe50430c] p-4 w-[80%]">
            <div className="w-[70%] flex items-start justify-between ">
              <button
                onClick={gotoDemoTab}
                className={
                  productDemoButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Product Demo/Information
              </button>
              <button
                onClick={gotoBenefitsTab}
                className={
                  productBenefitsButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Benefits
              </button>
              <button
                onClick={gotoUsesTab}
                className={
                  productUsesButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Use Cases
              </button>
            </div>
            <hr className="mt-4" />
            {productDemoButtons ? (
              <ProductContainer title={productButtons} />
            ) : productBenefitsButtons ? (
              <BenefitsContainer title={productButtons} />
            ) : productUsesButtons ? (
              <UsesContainer title={productButtons} />
            ) : null}
          </div>
        )}
        {sideBarItems[4] == indicatorType && (
          <div className="bg-[#fe50430c] p-4 w-[80%]">
            <div className="w-[70%] flex items-start justify-between ">
              <button
                onClick={gotoNeedsTab}
                className={
                  probingNeedsButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Identifying Needs
              </button>
              <button
                onClick={gotoChallengesTab}
                className={
                  probingChallangeButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Understanding Challanges
              </button>
            </div>
            <hr className="mt-4" />
            {probingNeedsButtons ? (
              <ProbingNeedsContainer title={probingButtons} />
            ) : probingChallangeButtons ? (
              <ProbingChallangeContainer title={probingButtons} />
            ) : null}
          </div>
        )}
        {sideBarItems[5] == indicatorType && (
          <div className="bg-[#fe50430c] p-4 w-[80%]">
            <div className="w-[70%] flex items-start justify-between ">
              <button
                onClick={gotoNextDemoTab}
                className={
                  nextDemoButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Proposing Demo
              </button>
              <button
                onClick={gotoScheduleTab}
                className={
                  nextScheduleButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Scheduling Follow-up
              </button>
            </div>
            <hr className="mt-4" />
            {nextDemoButtons ? (
              <ProposingDemoContainer title={nesxtStepsButtons} />
            ) : nextScheduleButtons ? (
              <SchedulingContainer title={nesxtStepsButtons} />
            ) : null}
          </div>
        )}
        {sideBarItems[6] == indicatorType && (
          <div className="bg-[#fe50430c] p-4 w-[80%]">
            <div className="w-[70%] flex items-start justify-between ">
              <button
                onClick={gotoofferingTab}
                className={
                  objectionSolutionButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Solution offering
              </button>
              <button
                onClick={gotoAddressTab}
                className={
                  objectionAddressButtons
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                Address Concerns
              </button>
            </div>
            <hr className="mt-4" />
            {objectionSolutionButtons ? (
              <SolutionOfferingContainer title={objectionButtons} />
            ) : objectionAddressButtons ? (
              <AddressConcernsContainer title={objectionButtons} />
            ) : null}
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
