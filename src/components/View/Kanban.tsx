import React from "react";
import { getBasicIcon } from "../../utils/AssetsHelper";
import Button, { ButtonProps } from "@/utils/Button/Button";

const Kanban=({list}:KanbasProps)=>{
    // console.log(list);
    var enq = list.filter(obj => {
        return obj.type === "enquiry"
      })

    var interact = list.filter(obj => {
        return obj.type === "interaction"
      })
    
    var proposal = list.filter(obj => {
        return obj.type === "proposal"
      })

    var win = list.filter(obj => {
        return obj.type === "win"
      })

    var lost = list.filter(obj => {
        return obj.type === "Lost"
      })

    var dead = list.filter(obj => {
        return obj.type === "Dead"
      })
    return(
        <div className="px-[20px] mt-[10px] flex gap-[30px]">

            {enq.map((item:any,i:any)=>{
                return(
                    <>
                    </>
                )
            })}
            {enq.length && (
                <>
                    <div className="w-[250px] ">
                        <div className="leadName flex mb-[10px]">
                            <div className="w-[76%] bg-renal-blue h-[45px] rounded-xl pl-[15px] pr-[15px] flex items-center justify-between">
                                <div className="enq-header text-[13px] flex gap-[8px] items-center">
                                    <p className="">ENQUIRY</p>
                                    <div className="text-[10px] flex items-center bg-slate-400 px-[4px] h-[13px] rounded-[4px]">{enq.length}</div>
                                </div>
                                <a href="#" className="flex items-center">...</a>
                            </div>
                            <div className="pl-[30px] h-[45px] bg-renal-blue rounded-xl flex items-center justify-center cursor-pointer ml-[10px] pr-[20px] relative p-[5px]"
                            >
                                {(
                                    <div className="absolute left-3  w-[28px]">
                                    <div className={`w-[100%] p-[3px] rounded-md }`}>
                                        <img
                                        src={getBasicIcon("Plus")}
                                        className={`w-[24px] svg-white`}
                                        alt=""
                                        />
                                    </div>
                                    </div>
                                )}
                                </div>
                        </div>
                        {enq.map((item, i) => {
                            return (
                            <div className="border border-slate-600 p-[15px] rounded-xl mb-[20px]" key={i}>
                                <div className="block-heading text-black text-[10px] leading-4 mb-[10px]">
                                    <p className="text-bold">Lead XYZ-Info | {item.data.companyName} | {item.data.companyAddress}</p>
                                    <p className="text-black/50">{item.data.poc} | {item.data.pocJob}</p>
                                    <p className="text-black/50">{item.data.names}</p>
                                </div>
                                <div className="block-details text-black text-[9px] mb-[15px]">
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Last Activity:</p>
                                        <p className="text-black/[.35]">{item.data.lastActivity}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Deal Size:</p>
                                        <p className="text-black/[.35]">Rs.{item.data.dealSize}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Product/Service:</p>
                                        <p className="text-black/[.35]">{item.data.product}</p>
                                    </div>
                                </div>
                                <div className="quick-actions text-[9px] px-[9px] py-[5px] bg-slate-200 rounded-[12px] flex items-center justify-between">
                                    <p className="text-black/[.75] leading-[5px]">Quick Actions</p>
                                    <div className="icons flex gap-[3px] opacity-70">
                                    <img
                                        src={getBasicIcon("Phone")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Mail")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Calendar")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Tasks")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Chat")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    </div>
                                </div>
                                <div className="px-[10px] py-[5px] text-[10px] text-black rounded-[12px] border border-black flex mt-[10px] opacity-60 gap-[3px]">
                                    <img
                                        src={getBasicIcon("Phone")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.calls}</p>
                                    <img
                                        src={getBasicIcon("Attachment")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.docs}</p>
                                    <img
                                        src={getBasicIcon("Chat")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.chats}</p>
                                    <img
                                        src={getBasicIcon("Mail")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.mails}</p>
                                    <img
                                        src={getBasicIcon("calendar")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.meetings}</p>
                                    <img
                                        src={getBasicIcon("Tasks")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.tasks}</p>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </>
            )
            }
            {enq.length && (
                <>
                    <div className="w-[250px] ">
                        <div className="leadName flex mb-[10px]">
                            <div className="w-[76%] bg-renal-blue h-[45px] rounded-xl pl-[15px] pr-[15px] flex items-center justify-between">
                                <div className="enq-header text-[13px] flex gap-[8px] items-center">
                                    <p className="">ENQUIRY</p>
                                    <div className="text-[10px] flex items-center bg-slate-400 px-[4px] h-[13px] rounded-[4px]">{enq.length}</div>
                                </div>
                                <a href="#" className="flex items-center">...</a>
                            </div>
                            <div className="pl-[30px] h-[45px] bg-renal-blue rounded-xl flex items-center justify-center cursor-pointer ml-[10px] pr-[20px] relative p-[5px]"
                            >
                                {(
                                    <div className="absolute left-3  w-[28px]">
                                    <div className={`w-[100%] p-[3px] rounded-md }`}>
                                        <img
                                        src={getBasicIcon("Plus")}
                                        className={`w-[24px] svg-white`}
                                        alt=""
                                        />
                                    </div>
                                    </div>
                                )}
                                </div>
                        </div>
                        {enq.map((item, i) => {
                            return (
                            <div className="border border-slate-600 p-[15px] rounded-xl mb-[20px]" key={i}>
                                <div className="block-heading text-black text-[10px] leading-4 mb-[10px]">
                                    <p className="text-bold">Lead XYZ-Info | {item.data.companyName} | {item.data.companyAddress}</p>
                                    <p className="text-black/50">{item.data.poc} | {item.data.pocJob}</p>
                                    <p className="text-black/50">{item.data.names}</p>
                                </div>
                                <div className="block-details text-black text-[9px] mb-[15px]">
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Last Activity:</p>
                                        <p className="text-black/[.35]">{item.data.lastActivity}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Deal Size:</p>
                                        <p className="text-black/[.35]">Rs.{item.data.dealSize}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Product/Service:</p>
                                        <p className="text-black/[.35]">{item.data.product}</p>
                                    </div>
                                </div>
                                <div className="quick-actions text-[9px] px-[9px] py-[5px] bg-slate-200 rounded-[12px] flex items-center justify-between">
                                    <p className="text-black/[.75] leading-[5px]">Quick Actions</p>
                                    <div className="icons flex gap-[3px] opacity-70">
                                    <img
                                        src={getBasicIcon("Phone")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Mail")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Calendar")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Tasks")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Chat")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    </div>
                                </div>
                                <div className="px-[10px] py-[5px] text-[10px] text-black rounded-[12px] border border-black flex mt-[10px] opacity-60 gap-[3px]">
                                    <img
                                        src={getBasicIcon("Phone")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.calls}</p>
                                    <img
                                        src={getBasicIcon("Attachment")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.docs}</p>
                                    <img
                                        src={getBasicIcon("Chat")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.chats}</p>
                                    <img
                                        src={getBasicIcon("Mail")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.mails}</p>
                                    <img
                                        src={getBasicIcon("calendar")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.meetings}</p>
                                    <img
                                        src={getBasicIcon("Tasks")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.tasks}</p>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </>
            )
            }
            {interact.length && (
                <>
                    <div className="w-[250px] ">
                        <div className="leadName flex mb-[10px]">
                            <div className="w-[76%] bg-renal-blue h-[45px] rounded-xl pl-[15px] pr-[15px] flex items-center justify-between">
                                <div className="enq-header text-[13px] flex gap-[8px] items-center">
                                    <p className="">INTERACTION</p>
                                    <div className="text-[10px] flex items-center bg-slate-400 px-[4px] h-[13px] rounded-[4px]">{interact.length}</div>
                                </div>
                                <a href="#" className="flex items-center">...</a>
                            </div>
                            <div className="pl-[30px] h-[45px] bg-renal-blue rounded-xl flex items-center justify-center cursor-pointer ml-[10px] pr-[20px] relative p-[5px]"
                            >
                                {(
                                    <div className="absolute left-3  w-[28px]">
                                    <div className={`w-[100%] p-[3px] rounded-md }`}>
                                        <img
                                        src={getBasicIcon("Plus")}
                                        className={`w-[24px] svg-white`}
                                        alt=""
                                        />
                                    </div>
                                    </div>
                                )}
                                </div>
                        </div>
                        {interact.map((item, i) => {
                            return (
                            <div className="border border-slate-600 p-[15px] rounded-xl mb-[20px]" key={i}>
                                <div className="block-heading text-black text-[10px] leading-4 mb-[10px]">
                                    <p className="text-bold">Lead XYZ-Info | {item.data.companyName} | {item.data.companyAddress}</p>
                                    <p className="text-black/50">{item.data.poc} | {item.data.pocJob}</p>
                                    <p className="text-black/50">{item.data.names}</p>
                                </div>
                                <div className="block-details text-black text-[9px] mb-[15px]">
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Last Activity:</p>
                                        <p className="text-black/[.35]">{item.data.lastActivity}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Deal Size:</p>
                                        <p className="text-black/[.35]">Rs.{item.data.dealSize}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Product/Service:</p>
                                        <p className="text-black/[.35]">{item.data.product}</p>
                                    </div>
                                </div>
                                <div className="quick-actions text-[9px] px-[9px] py-[5px] bg-slate-200 rounded-[12px] flex items-center justify-between">
                                    <p className="text-black/[.75] leading-[5px]">Quick Actions</p>
                                    <div className="icons flex gap-[3px] opacity-70">
                                    <img
                                        src={getBasicIcon("Phone")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Mail")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Calendar")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Tasks")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Chat")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    </div>
                                </div>
                                <div className="px-[10px] py-[5px] text-[10px] text-black rounded-[12px] border border-black flex mt-[10px] opacity-60 gap-[3px]">
                                    <img
                                        src={getBasicIcon("Phone")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.calls}</p>
                                    <img
                                        src={getBasicIcon("Attachment")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.docs}</p>
                                    <img
                                        src={getBasicIcon("Chat")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.chats}</p>
                                    <img
                                        src={getBasicIcon("Mail")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.mails}</p>
                                    <img
                                        src={getBasicIcon("calendar")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.meetings}</p>
                                    <img
                                        src={getBasicIcon("Tasks")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.tasks}</p>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </>
            )
            }
            {proposal.length && (
                <>
                    <div className="w-[250px] ">
                        <div className="leadName flex mb-[10px]">
                            <div className="w-[76%] bg-renal-blue h-[45px] rounded-xl pl-[15px] pr-[15px] flex items-center justify-between">
                                <div className="enq-header text-[13px] flex gap-[8px] items-center">
                                    <p className="">PROPOSAL</p>
                                    <div className="text-[10px] flex items-center bg-slate-400 px-[4px] h-[13px] rounded-[4px]">{proposal.length}</div>
                                </div>
                                <a href="#" className="flex items-center">...</a>
                            </div>
                            <div className="pl-[30px] h-[45px] bg-renal-blue rounded-xl flex items-center justify-center cursor-pointer ml-[10px] pr-[20px] relative p-[5px]"
                            >
                                {(
                                    <div className="absolute left-3  w-[28px]">
                                    <div className={`w-[100%] p-[3px] rounded-md }`}>
                                        <img
                                        src={getBasicIcon("Plus")}
                                        className={`w-[24px] svg-white`}
                                        alt=""
                                        />
                                    </div>
                                    </div>
                                )}
                                </div>
                        </div>
                        {proposal.map((item, i) => {
                            return (
                            <div className="border border-slate-600 p-[15px] rounded-xl mb-[20px]" key={i}>
                                <div className="block-heading text-black text-[10px] leading-4 mb-[10px]">
                                    <p className="text-bold">Lead XYZ-Info | {item.data.companyName} | {item.data.companyAddress}</p>
                                    <p className="text-black/50">{item.data.poc} | {item.data.pocJob}</p>
                                    <p className="text-black/50">{item.data.names}</p>
                                </div>
                                <div className="block-details text-black text-[9px] mb-[15px]">
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Last Activity:</p>
                                        <p className="text-black/[.35]">{item.data.lastActivity}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Deal Size:</p>
                                        <p className="text-black/[.35]">Rs.{item.data.dealSize}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Product/Service:</p>
                                        <p className="text-black/[.35]">{item.data.product}</p>
                                    </div>
                                </div>
                                <div className="quick-actions text-[9px] px-[9px] py-[5px] bg-slate-200 rounded-[12px] flex items-center justify-between">
                                    <p className="text-black/[.75] leading-[5px]">Quick Actions</p>
                                    <div className="icons flex gap-[3px] opacity-70">
                                    <img
                                        src={getBasicIcon("Phone")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Mail")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Calendar")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Tasks")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Chat")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    </div>
                                </div>
                                <div className="px-[10px] py-[5px] text-[10px] text-black rounded-[12px] border border-black flex mt-[10px] opacity-60 gap-[3px]">
                                    <img
                                        src={getBasicIcon("Phone")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.calls}</p>
                                    <img
                                        src={getBasicIcon("Attachment")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.docs}</p>
                                    <img
                                        src={getBasicIcon("Chat")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.chats}</p>
                                    <img
                                        src={getBasicIcon("Mail")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.mails}</p>
                                    <img
                                        src={getBasicIcon("calendar")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.meetings}</p>
                                    <img
                                        src={getBasicIcon("Tasks")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.tasks}</p>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </>
            )
            }
            {win.length && (
                <>
                    <div className="w-[250px] ">
                        <div className="leadName flex mb-[10px]">
                            <div className="w-[76%] bg-renal-blue h-[45px] rounded-xl pl-[15px] pr-[15px] flex items-center justify-between">
                                <div className="enq-header text-[13px] flex gap-[8px] items-center">
                                    <p className="">WIN</p>
                                    <div className="text-[10px] flex items-center bg-slate-400 px-[4px] h-[13px] rounded-[4px]">{win.length}</div>
                                </div>
                                <a href="#" className="flex items-center">...</a>
                            </div>
                            <div className="pl-[30px] h-[45px] bg-renal-blue rounded-xl flex items-center justify-center cursor-pointer ml-[10px] pr-[20px] relative p-[5px]"
                            >
                                {(
                                    <div className="absolute left-3  w-[28px]">
                                    <div className={`w-[100%] p-[3px] rounded-md }`}>
                                        <img
                                        src={getBasicIcon("Plus")}
                                        className={`w-[24px] svg-white`}
                                        alt=""
                                        />
                                    </div>
                                    </div>
                                )}
                                </div>
                        </div>
                        {win.map((item, i) => {
                            return (
                            <div className="border border-slate-600 p-[15px] rounded-xl mb-[20px]" key={i}>
                                <div className="block-heading text-black text-[10px] leading-4 mb-[10px]">
                                    <p className="text-bold">Lead XYZ-Info | {item.data.companyName} | {item.data.companyAddress}</p>
                                    <p className="text-black/50">{item.data.poc} | {item.data.pocJob}</p>
                                    <p className="text-black/50">{item.data.names}</p>
                                </div>
                                <div className="block-details text-black text-[9px] mb-[15px]">
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Last Activity:</p>
                                        <p className="text-black/[.35]">{item.data.lastActivity}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Deal Size:</p>
                                        <p className="text-black/[.35]">Rs.{item.data.dealSize}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Product/Service:</p>
                                        <p className="text-black/[.35]">{item.data.product}</p>
                                    </div>
                                </div>
                                <div className="quick-actions text-[9px] px-[9px] py-[5px] bg-slate-200 rounded-[12px] flex items-center justify-between">
                                    <p className="text-black/[.75] leading-[5px]">Quick Actions</p>
                                    <div className="icons flex gap-[3px] opacity-70">
                                    <img
                                        src={getBasicIcon("Phone")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Mail")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Calendar")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Tasks")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Chat")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    </div>
                                </div>
                                <div className="px-[10px] py-[5px] text-[10px] text-black rounded-[12px] border border-black flex mt-[10px] opacity-60 gap-[3px]">
                                    <img
                                        src={getBasicIcon("Phone")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.calls}</p>
                                    <img
                                        src={getBasicIcon("Attachment")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.docs}</p>
                                    <img
                                        src={getBasicIcon("Chat")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.chats}</p>
                                    <img
                                        src={getBasicIcon("Mail")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.mails}</p>
                                    <img
                                        src={getBasicIcon("calendar")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.meetings}</p>
                                    <img
                                        src={getBasicIcon("Tasks")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.tasks}</p>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </>
            )
            }
            {lost.length && (
                <>
                    <div className="w-[250px] ">
                        <div className="leadName flex mb-[10px]">
                            <div className="w-[76%] bg-renal-blue h-[45px] rounded-xl pl-[15px] pr-[15px] flex items-center justify-between">
                                <div className="enq-header text-[13px] flex gap-[8px] items-center">
                                    <p className="">LOST</p>
                                    <div className="text-[10px] flex items-center bg-slate-400 px-[4px] h-[13px] rounded-[4px]">{lost.length}</div>
                                </div>
                                <a href="#" className="flex items-center">...</a>
                            </div>
                            <div className="pl-[30px] h-[45px] bg-renal-blue rounded-xl flex items-center justify-center cursor-pointer ml-[10px] pr-[20px] relative p-[5px]"
                            >
                                {(
                                    <div className="absolute left-3  w-[28px]">
                                    <div className={`w-[100%] p-[3px] rounded-md }`}>
                                        <img
                                        src={getBasicIcon("Plus")}
                                        className={`w-[24px] svg-white`}
                                        alt=""
                                        />
                                    </div>
                                    </div>
                                )}
                                </div>
                        </div>
                        {lost.map((item, i) => {
                            return (
                            <div className="border border-slate-600 p-[15px] rounded-xl mb-[20px]" key={i}>
                                <div className="block-heading text-black text-[10px] leading-4 mb-[10px]">
                                    <p className="text-bold">Lead XYZ-Info | {item.data.companyName} | {item.data.companyAddress}</p>
                                    <p className="text-black/50">{item.data.poc} | {item.data.pocJob}</p>
                                    <p className="text-black/50">{item.data.names}</p>
                                </div>
                                <div className="block-details text-black text-[9px] mb-[15px]">
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Last Activity:</p>
                                        <p className="text-black/[.35]">{item.data.lastActivity}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Deal Size:</p>
                                        <p className="text-black/[.35]">Rs.{item.data.dealSize}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Product/Service:</p>
                                        <p className="text-black/[.35]">{item.data.product}</p>
                                    </div>
                                </div>
                                <div className="quick-actions text-[9px] px-[9px] py-[5px] bg-slate-200 rounded-[12px] flex items-center justify-between">
                                    <p className="text-black/[.75] leading-[5px]">Quick Actions</p>
                                    <div className="icons flex gap-[3px] opacity-70">
                                    <img
                                        src={getBasicIcon("Phone")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Mail")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Calendar")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Tasks")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Chat")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    </div>
                                </div>
                                <div className="px-[10px] py-[5px] text-[10px] text-black rounded-[12px] border border-black flex mt-[10px] opacity-60 gap-[3px]">
                                    <img
                                        src={getBasicIcon("Phone")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.calls}</p>
                                    <img
                                        src={getBasicIcon("Attachment")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.docs}</p>
                                    <img
                                        src={getBasicIcon("Chat")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.chats}</p>
                                    <img
                                        src={getBasicIcon("Mail")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.mails}</p>
                                    <img
                                        src={getBasicIcon("calendar")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.meetings}</p>
                                    <img
                                        src={getBasicIcon("Tasks")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.tasks}</p>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </>
            )
            }
            {dead.length && (
                <>
                    <div className="w-[250px] ">
                        <div className="leadName flex mb-[10px]">
                            <div className="w-[76%] bg-renal-blue h-[45px] rounded-xl pl-[15px] pr-[15px] flex items-center justify-between">
                                <div className="enq-header text-[13px] flex gap-[8px] items-center">
                                    <p className="">DEAD</p>
                                    <div className="text-[10px] flex items-center bg-slate-400 px-[4px] h-[13px] rounded-[4px]">{dead.length}</div>
                                </div>
                                <a href="#" className="flex items-center">...</a>
                            </div>
                            <div className="pl-[30px] h-[45px] bg-renal-blue rounded-xl flex items-center justify-center cursor-pointer ml-[10px] pr-[20px] relative p-[5px]"
                            >
                                {(
                                    <div className="absolute left-3  w-[28px]">
                                    <div className={`w-[100%] p-[3px] rounded-md }`}>
                                        <img
                                        src={getBasicIcon("Plus")}
                                        className={`w-[24px] svg-white`}
                                        alt=""
                                        />
                                    </div>
                                    </div>
                                )}
                                </div>
                        </div>
                        {dead.map((item, i) => {
                            return (
                            <div className="border border-slate-600 p-[15px] rounded-xl mb-[20px]" key={i}>
                                <div className="block-heading text-black text-[10px] leading-4 mb-[10px]">
                                    <p className="text-bold">Lead XYZ-Info | {item.data.companyName} | {item.data.companyAddress}</p>
                                    <p className="text-black/50">{item.data.poc} | {item.data.pocJob}</p>
                                    <p className="text-black/50">{item.data.names}</p>
                                </div>
                                <div className="block-details text-black text-[9px] mb-[15px]">
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Last Activity:</p>
                                        <p className="text-black/[.35]">{item.data.lastActivity}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Deal Size:</p>
                                        <p className="text-black/[.35]">Rs.{item.data.dealSize}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-black/[.65]">Product/Service:</p>
                                        <p className="text-black/[.35]">{item.data.product}</p>
                                    </div>
                                </div>
                                <div className="quick-actions text-[9px] px-[9px] py-[5px] bg-slate-200 rounded-[12px] flex items-center justify-between">
                                    <p className="text-black/[.75] leading-[5px]">Quick Actions</p>
                                    <div className="icons flex gap-[3px] opacity-70">
                                    <img
                                        src={getBasicIcon("Phone")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Mail")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Calendar")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Tasks")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <img
                                        src={getBasicIcon("Chat")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    </div>
                                </div>
                                <div className="px-[10px] py-[5px] text-[10px] text-black rounded-[12px] border border-black flex mt-[10px] opacity-60 gap-[3px]">
                                    <img
                                        src={getBasicIcon("Phone")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.calls}</p>
                                    <img
                                        src={getBasicIcon("Attachment")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.docs}</p>
                                    <img
                                        src={getBasicIcon("Chat")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.chats}</p>
                                    <img
                                        src={getBasicIcon("Mail")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.mails}</p>
                                    <img
                                        src={getBasicIcon("calendar")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.meetings}</p>
                                    <img
                                        src={getBasicIcon("Tasks")}
                                        className={`w-[14px]`}
                                        alt=""
                                    />
                                    <p>{item.data.tasks}</p>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </>
            )
            }
        </div>
    )
}

const KanbanContainer=({list}:KanbasProps)=>{

    return(
        <div className="w-[100%] min-h-[540px] overflow-x-auto hide-scrollbar" >
            <Kanban list={list} />
        </div>
    )
}

export default KanbanContainer;

interface KanbasProps{
    list:any[];
}