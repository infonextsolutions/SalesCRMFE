import Navigation from "@/components/app/Navigation";
import LeadsContainer from "@/components/leads/Container";
import Table from "@/components/View/Tables/Leads";
import axios from "axios";
import React from "react";
import KanbanContainer from "@/components/View/Kanban";
import { Router, useRouter } from "next/router";


export default function Open({data}:any) {
    const router=useRouter();
    const handleSubmit = (e:any) =>{
        
        router.replace("/sales/open");
    }
  return (
    <div className="w-[100%] min-h-[90vh] px-[40px]">
        <Navigation
        title={"Sales-Manage>Leads"}
        buttons={[
          {
            text: "View",
            dropdown: true,
            id: 0,
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
          },
          {
            text: "Add Lead",
            dropdown: true,
            id: 1,
            icon: "Plus",
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
        <div className="bg-white rounded-[8px]">
            <p className="text-black text-[35px] py-[25px] px-8 font-medium">Add Lead</p>
            <form className="shadow-md rounded px-8 pt-4 pb-8 mb-4">
                <div className="mb-4">
                <label className="block text-gray-600 text-[17px] mb-2 font-medium" htmlFor="name">
                    Contact Name
                </label>
                <input className="border border-1 border-[#3f3a4b] rounded-[5px] w-full py-2 px-3 text-[#3f3a4b] bg-white leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Contact Name"/>
                </div>
                <div className="mb-4">
                <label className="block text-gray-600 text-[17px] mb-2 font-medium" htmlFor="contact">
                    Contact Number
                </label>
                <input className="border border-[#3f3a4b] rounded-[5px] w-full py-2 px-3 text-[#3f3a4b] bg-white leading-tight focus:outline-none focus:shadow-outline" id="contact" type="text" placeholder="Contact Number"/>
                </div>
                <div className="mb-4">
                <label className="block text-gray-600 text-[17px] mb-2 font-medium" htmlFor="email">
                    Email
                </label>
                <input className="border border-[#3f3a4b] rounded-[5px] w-full py-2 px-3 text-[#3f3a4b] bg-white leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
                </div>
                <div className="flex items-center justify-between mt-6">
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-[16px] font-semibold py-2 px-5 rounded-[5px] focus:outline-none focus:shadow-outline" type="button" onClick={()=>router.push("/sales/open")}>
                    Submit
                </button>
            </div>
            </form>
        </div>
        
      
    </div>
  );
}
