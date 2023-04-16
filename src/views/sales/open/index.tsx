import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navigation from "@/components/app/Navigation";
import LeadsContainer from "@/components/leads/open/Container";
import Backdrop from "@/components/View/Backdrop";
import ImportLead from "@/components/View/import-lead/Index";
import AddLeadForm from "@/components/View/add-lead/addLead";

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

const SalesOpen = ({ data }: any) => {
  const state = useSelector((state: any) => state.auth);
  const [view, setView] = React.useState(false);

  const viewButtinClick = (prev: Number, current: Number) => {
    // console.log(prev,current);
    if (current === 1) {
      setView(true);
    } else {
      setView(false);
    }
  };

  const [form, setForm] = useState(false);
  const [imports, setImports] = useState(false);
  const [bool, setBool] = useState(true);

  const showForm = () => {
    setForm(true);
  };
  const showImports = () => {
    setImports(true);
  };
  const cancelImports = () => {
    setBool(false);
    setTimeout(() => {
      setImports(false);
      setBool(true);
    }, 500);
  };
  const cancelForms = () => {
    setBool(false);
    setTimeout(() => {
      setForm(false);
      setBool(true);
    }, 500);
  };
  const AddLead = (e: any, e1: any) => {
    if (e1 === 0) {
      showForm();
    } else if (e1 === 1) {
      showImports();
    }
  };

  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      {/* <Navigation  /> */}
      {imports && (
        <Backdrop bool={bool}>
          <ImportLead cancel={cancelImports} />
        </Backdrop>
      )}
      {form && (
        <Backdrop bool={bool}>
          <AddLeadForm cancel={cancelForms} />
        </Backdrop>
      )}
      <Navigation
        title={"Sales>Open>Manage Leads"}
        buttons={[
          {
            text: "View",
            dropdown: true,
            id: 0,
            click: viewButtinClick,
            light: false,
            list: [
              {
                title: "Table View",
                Icon: "List 2",
              },
              {
                title: "Kanban View",
                Icon: "Grid",
              },
            ],
            value: 0,
          },
          {
            text: "Add Lead",
            dropdown: true,
            id: 1,
            icon: "Plus",
            click: AddLead,
            light: false,
            list: [
              { title: "Using Form", Icon: "Text" },
              { title: "Import Leads", Icon: "Download" },
            ],
          },
          {
            text: "Export",
            dropdown: true,
            id: 1,
            icon: "Download",
            light: true,
            list: [
              { title: "Print", Icon: "Printer" },
              { title: "Excel", Icon: "Excel" },
              { title: "PDF", Icon: "PDF" },
              { title: "CSV", Icon: "CSV" },
            ],
          },
        ]}
      />
      <LeadsContainer view={view} records={data.totalRecords} list={Dummy} />
    </div>
  );
};

export default SalesOpen;
