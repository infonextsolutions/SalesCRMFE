import Navigation from "@/components/app/Navigation";
import LeadsContainer from "@/components/leads/Container";
import Table from "@/components/View/Tables/Leads";
import axios from "axios";
import React from "react";
import KanbanContainer from "@/components/View/Kanban";
import { Router, useRouter } from "next/router";


export default function Open({data}:any) {
    const handleSubmit = () =>{
        const form = document.querySelector("form");
        console.log(`form is ${form}`);
        if (form) 
        {
            form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            axios
                .post("/update-profile", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                })
                .then((res) => {
                console.log(res);
                })
                .catch((err) => {
                console.log(err);
                });
            });
        }
    }
  return (
    <div className="w-[100%] min-h-[90vh]">
        <p className="text-black text-[25px] bg-white pt-[15px] px-8 font-medium">Add Lead</p>
        <form className="bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4" method="post" action="">
            <div className="mb-4">
            <label className="block text-gray-600 text-[17px] mb-2" htmlFor="contactName">
                Contact Name
            </label>
            <input className="border border-[#3f3a4b] rounded-[9px] w-full py-2 px-3 text-[#3f3a4b] bg-white leading-tight focus:outline-none focus:shadow-outline" id="contactName" type="text" placeholder="Contact Name"/>
            </div>
            <div className="mb-4">
            <label className="block text-gray-600 text-[17px] mb-2" htmlFor="contactNumber">
                Contact Number
            </label>
            <input className="border border-[#3f3a4b] rounded-[9px] w-full py-2 px-3 text-[#3f3a4b] bg-white leading-tight focus:outline-none focus:shadow-outline" id="contactNumber" type="text" placeholder="Contact Number"/>
            </div>
            <div className="mb-4">
            <label className="block text-gray-600 text-[17px] mb-2" htmlFor="email">
                Email
            </label>
            <input className="border border-[#3f3a4b] rounded-[9px] w-full py-2 px-3 text-[#3f3a4b] bg-white leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
            </div>
            <div className="flex items-center justify-between mt-6">
            <button className="bg-purple-600 hover:bg-purple-700 text-white text-[16px] font-semibold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline" type="submit">
                Submit
            </button>
            </div>
        </form>
    </div>
  );
}