import ButtonDropDown from "@/utils/Button/Button";
import DatePicker from "@/utils/Button/DatePicker";
import React, { useState, useEffect } from "react";

const Chart = ({ title, percent }: any) => {
    return (
        <div className="w-[10px] h-[100%] flex flex-col items-center relative">
            <div className="w-[30px] h-[100%] mb-[15px] bg-[#f7f8ff] rounded-t-[19px] relative overflow-hidden">
                <div
                    className="w-[100%] bg-renal-blue bottom-0 absolute rounded-t-[19px]"
                    style={{ height: percent }}
                ></div>
            </div>
            <div className="text-[10px] min-h-[40px] flex items-center justify-center tracking-sm font-medium text-[#8A9099] text-center absolute bottom-[-35px]">
                {title}
            </div>
        </div>
    );
};

const ChartContainer = ({ children }: any) => {
    return (
        <div className="w-[100%] h-[280px] mt-[40px] flex">
            <div className="w-[8%] h-[100%] flex flex-col justify-between items-center text-[#8A9099]">
                <p>100</p>
                <p>75</p>
                <p>50</p>
                <p>25</p>
                <p className="mb-[20px]">0</p>
            </div>
            <div className="w-[92%] h-[100%] flex justify-between pr-[30px] pl-[30px]">
                {children}
            </div>
        </div>
    );
};

const StageWiseAnalysis = ({
    title = "Stage Wise Analysis",
    template,
    data,
}: any) => {
    return (
        <div className="w-[700px] h-[450px] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px] ml-[50px]">
            <div className="w-[100%] flex items-center justify-between">
                <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
                    {title}
                </h1>
            </div>
            <div className='chart-container'>
                <ul className="">
                    <li className="">
                        <span className="text-[#333]">Opening</span>
                    </li>
                    <li className="">
                        <span className="text-[#333]">Lead Qualification</span>
                    </li>
                    <li className="">
                        <span className="text-[#333]">Need Discovery</span>
                    </li>
                    <li className="">
                        <span className="text-[#333]">Product Knowledge</span>
                    </li>
                    <li className="">
                        <span className="text-[#333]">Closing</span>
                    </li>
                    <li className="">
                        <span className="text-[#333]">Price Discussion</span>
                    </li>
                    <li className="">
                        <span className="text-[#333]">Consultative Selling</span>
                    </li>
                    <li className="">
                        <span className="text-[#333]">Empathy</span>
                    </li>
                    <li className="">
                        <span className="text-[#333]">Listening Skills</span>
                    </li>
                    <li className="">
                        <span className="text-[#333]">Confidence</span>
                    </li>
                    <li className="">
                        <span className="text-[#333]">Urgency Creation</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export interface Result {
    _id?: string;
    consultative_selling?: number;
    empathy?: number;
    listening_skills?: number;
    confidence?: number;
    urgency_creation?: number;
    positive_energy?: number;
    report_building?: number;
    politeness?: number;
    createdAt?: string;
    updatedAt?: string;
}

export default StageWiseAnalysis;