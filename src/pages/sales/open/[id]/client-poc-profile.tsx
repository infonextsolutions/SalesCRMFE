import Navigation from "@/components/app/Navigation";
import ProfilePage from "@/components/Profile/ProfilePage/ClientPocProfile";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Navigator from "@/utils/customNavigator";
import React, { useState } from "react";

const ClientProfile = () => {
  const [activeTitle, setActiveTitle] = useState(0);
  function CallBack (childData:any){
        setActiveTitle(childData); 
  }
  const titles = ["Deals"];
  const list = titles.map((title:any,i:any)=>({id:i,title:title}));
  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      <Navigation
        title="Profile"
        buttons={[
          {
            text: "Take Action",
            dropdown: true,
            id: 1,
            icon: "Plus",
            light: false,
            list: [
              { title: "Call", Icon: "Phone" },
              { title: "Email", Icon: "Mail" },
              { title: "Meeting", Icon: "Calendar" },
              { title: "Task", Icon: "Tasks" },
              { title: "Message", Icon: "Chat" },
            ],
          },
        ]}
      />
      <div className="w-[100%] flex gap-[25px] mb-[100px] ">
        <div className="w-[400px] min-h-[70vh] bg-white rounded-xl p-[20px]">
          <ProfilePage />
        </div>
        <div className="bg-white rounded-xl w-[100%] px-[25px]">
          <Navigator
              callback = {CallBack}
              current={0}
              list={list}
          />
          <div className="bg-[#ffffff] my-[50px]">
            <h5 className="text-[#3F434A] px-[30px] text-[20px] leading-[30px] font-medium">Open Deals</h5>
            <div className="mt-[40px] pl-[35px] pr-[43px] flex text-[#8A9099] text-[14px] leading-[21px] items-center">
              <p>Lead Id</p>
              <p className="ml-[92px]">Product Service</p>
              <p className="ml-[82px]">Lead Stage</p>
              <p className="ml-[91px]">Last Activity</p>
              <p className="ml-[174px]">Activity History</p>
            </div>
            <div className="mt-[10px] mx-[13px] flex flex-col gap-y-2.5">
              <div className="text-[14px] pl-[20px] py-[5px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
                <div className="w-[140px]">
                  <p className="text-[#3F434A]">12XX34</p>
                </div>
                <div className="w-[174px]">
                  <p>Product A</p>
                </div>
                <div className="w-[160px]">
                  <p>Won</p>
                </div>
                <div className="w-[180px]">
                  <p>Email Sent</p>
                  <p>23 Jan 2023</p>
                </div>
                <div className="flex items-start gap-[5px] w-[250px] text-[#3F434A]">
                  <img
                    src={getBasicIcon("Phone")}
                    className={`w-[17px] opacity-80`}
                    alt="Phone"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Attachment")}
                    className={`w-[17px] opacity-80`}
                    alt="Attachment"
                  />
                  <p className="text-[9px]">2</p>
                  <img
                    src={getBasicIcon("Chat")}
                    className={`w-[17px] opacity-80`}
                    alt="Chat"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Mail")}
                    className={`w-[17px] opacity-80`}
                    alt="Mail"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Calendar")}
                    className={`w-[17px] opacity-80`}
                    alt="Calendar"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Tasks")}
                    className={`w-[17px] opacity-80`}
                    alt="Tasks"
                  />
                  <p className="text-[9px]">5</p>
                  
                </div>
                <div>
                <img
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-[14px] pl-[20px] py-[5px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
                <div className="w-[140px]">
                  <p className="text-[#3F434A]">12XX34</p>
                </div>
                <div className="w-[174px]">
                  <p>Product A</p>
                </div>
                <div className="w-[160px]">
                  <p>Won</p>
                </div>
                <div className="w-[180px]">
                  <p>Email Sent</p>
                  <p>23 Jan 2023</p>
                </div>
                <div className="flex items-start gap-[5px] w-[250px] text-[#3F434A]">
                  <img
                    src={getBasicIcon("Phone")}
                    className={`w-[17px] opacity-80`}
                    alt="Phone"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Attachment")}
                    className={`w-[17px] opacity-80`}
                    alt="Attachment"
                  />
                  <p className="text-[9px]">2</p>
                  <img
                    src={getBasicIcon("Chat")}
                    className={`w-[17px] opacity-80`}
                    alt="Chat"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Mail")}
                    className={`w-[17px] opacity-80`}
                    alt="Mail"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Calendar")}
                    className={`w-[17px] opacity-80`}
                    alt="Calendar"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Tasks")}
                    className={`w-[17px] opacity-80`}
                    alt="Tasks"
                  />
                  <p className="text-[9px]">5</p>
                  
                </div>
                <div>
                <img
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-[14px] pl-[20px] py-[5px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
                <div className="w-[140px]">
                  <p className="text-[#3F434A]">12XX34</p>
                </div>
                <div className="w-[174px]">
                  <p>Product A</p>
                </div>
                <div className="w-[160px]">
                  <p>Won</p>
                </div>
                <div className="w-[180px]">
                  <p>Email Sent</p>
                  <p>23 Jan 2023</p>
                </div>
                <div className="flex items-start gap-[5px] w-[250px] text-[#3F434A]">
                  <img
                    src={getBasicIcon("Phone")}
                    className={`w-[17px] opacity-80`}
                    alt="Phone"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Attachment")}
                    className={`w-[17px] opacity-80`}
                    alt="Attachment"
                  />
                  <p className="text-[9px]">2</p>
                  <img
                    src={getBasicIcon("Chat")}
                    className={`w-[17px] opacity-80`}
                    alt="Chat"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Mail")}
                    className={`w-[17px] opacity-80`}
                    alt="Mail"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Calendar")}
                    className={`w-[17px] opacity-80`}
                    alt="Calendar"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Tasks")}
                    className={`w-[17px] opacity-80`}
                    alt="Tasks"
                  />
                  <p className="text-[9px]">5</p>
                  
                </div>
                <div>
                <img
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-[14px] pl-[20px] py-[5px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
                <div className="w-[140px]">
                  <p className="text-[#3F434A]">12XX34</p>
                </div>
                <div className="w-[174px]">
                  <p>Product A</p>
                </div>
                <div className="w-[160px]">
                  <p>Won</p>
                </div>
                <div className="w-[180px]">
                  <p>Email Sent</p>
                  <p>23 Jan 2023</p>
                </div>
                <div className="flex items-start gap-[5px] w-[250px] text-[#3F434A]">
                  <img
                    src={getBasicIcon("Phone")}
                    className={`w-[17px] opacity-80`}
                    alt="Phone"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Attachment")}
                    className={`w-[17px] opacity-80`}
                    alt="Attachment"
                  />
                  <p className="text-[9px]">2</p>
                  <img
                    src={getBasicIcon("Chat")}
                    className={`w-[17px] opacity-80`}
                    alt="Chat"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Mail")}
                    className={`w-[17px] opacity-80`}
                    alt="Mail"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Calendar")}
                    className={`w-[17px] opacity-80`}
                    alt="Calendar"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Tasks")}
                    className={`w-[17px] opacity-80`}
                    alt="Tasks"
                  />
                  <p className="text-[9px]">5</p>
                  
                </div>
                <div>
                <img
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#ffffff] my-[50px] mt-[80px]">
            <h5 className="text-[#3F434A] px-[30px] text-[20px] leading-[30px] font-medium">Close Deals</h5>
            <div className="mt-[40px] pl-[35px] pr-[43px] flex text-[#8A9099] text-[14px] leading-[21px] items-center">
              <p>Lead Id</p>
              <p className="ml-[92px]">Product Service</p>
              <p className="ml-[82px]">Lead Stage</p>
              <p className="ml-[91px]">Last Activity</p>
              <p className="ml-[174px]">Activity History</p>
            </div>
            <div className="mt-[10px] mx-[13px] flex flex-col gap-y-2.5">
              <div className="text-[14px] pl-[20px] py-[5px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
                <div className="w-[140px]">
                  <p className="text-[#3F434A]">12XX34</p>
                </div>
                <div className="w-[174px]">
                  <p>Product A</p>
                </div>
                <div className="w-[160px]">
                  <p>Won</p>
                </div>
                <div className="w-[180px]">
                  <p>Email Sent</p>
                  <p>23 Jan 2023</p>
                </div>
                <div className="flex items-start gap-[5px] w-[250px] text-[#3F434A]">
                  <img
                    src={getBasicIcon("Phone")}
                    className={`w-[17px] opacity-80`}
                    alt="Phone"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Attachment")}
                    className={`w-[17px] opacity-80`}
                    alt="Attachment"
                  />
                  <p className="text-[9px]">2</p>
                  <img
                    src={getBasicIcon("Chat")}
                    className={`w-[17px] opacity-80`}
                    alt="Chat"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Mail")}
                    className={`w-[17px] opacity-80`}
                    alt="Mail"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Calendar")}
                    className={`w-[17px] opacity-80`}
                    alt="Calendar"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Tasks")}
                    className={`w-[17px] opacity-80`}
                    alt="Tasks"
                  />
                  <p className="text-[9px]">5</p>
                  
                </div>
                <div>
                <img
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-[14px] pl-[20px] py-[5px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
                <div className="w-[140px]">
                  <p className="text-[#3F434A]">12XX34</p>
                </div>
                <div className="w-[174px]">
                  <p>Product A</p>
                </div>
                <div className="w-[160px]">
                  <p>Won</p>
                </div>
                <div className="w-[180px]">
                  <p>Email Sent</p>
                  <p>23 Jan 2023</p>
                </div>
                <div className="flex items-start gap-[5px] w-[250px] text-[#3F434A]">
                  <img
                    src={getBasicIcon("Phone")}
                    className={`w-[17px] opacity-80`}
                    alt="Phone"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Attachment")}
                    className={`w-[17px] opacity-80`}
                    alt="Attachment"
                  />
                  <p className="text-[9px]">2</p>
                  <img
                    src={getBasicIcon("Chat")}
                    className={`w-[17px] opacity-80`}
                    alt="Chat"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Mail")}
                    className={`w-[17px] opacity-80`}
                    alt="Mail"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Calendar")}
                    className={`w-[17px] opacity-80`}
                    alt="Calendar"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Tasks")}
                    className={`w-[17px] opacity-80`}
                    alt="Tasks"
                  />
                  <p className="text-[9px]">5</p>
                  
                </div>
                <div>
                <img
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-[14px] pl-[20px] py-[5px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
                <div className="w-[140px]">
                  <p className="text-[#3F434A]">12XX34</p>
                </div>
                <div className="w-[174px]">
                  <p>Product A</p>
                </div>
                <div className="w-[160px]">
                  <p>Won</p>
                </div>
                <div className="w-[180px]">
                  <p>Email Sent</p>
                  <p>23 Jan 2023</p>
                </div>
                <div className="flex items-start gap-[5px] w-[250px] text-[#3F434A]">
                  <img
                    src={getBasicIcon("Phone")}
                    className={`w-[17px] opacity-80`}
                    alt="Phone"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Attachment")}
                    className={`w-[17px] opacity-80`}
                    alt="Attachment"
                  />
                  <p className="text-[9px]">2</p>
                  <img
                    src={getBasicIcon("Chat")}
                    className={`w-[17px] opacity-80`}
                    alt="Chat"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Mail")}
                    className={`w-[17px] opacity-80`}
                    alt="Mail"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Calendar")}
                    className={`w-[17px] opacity-80`}
                    alt="Calendar"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Tasks")}
                    className={`w-[17px] opacity-80`}
                    alt="Tasks"
                  />
                  <p className="text-[9px]">5</p>
                  
                </div>
                <div>
                <img
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-[14px] pl-[20px] py-[5px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
                <div className="w-[140px]">
                  <p className="text-[#3F434A]">12XX34</p>
                </div>
                <div className="w-[174px]">
                  <p>Product A</p>
                </div>
                <div className="w-[160px]">
                  <p>Won</p>
                </div>
                <div className="w-[180px]">
                  <p>Email Sent</p>
                  <p>23 Jan 2023</p>
                </div>
                <div className="flex items-start gap-[5px] w-[250px] text-[#3F434A]">
                  <img
                    src={getBasicIcon("Phone")}
                    className={`w-[17px] opacity-80`}
                    alt="Phone"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Attachment")}
                    className={`w-[17px] opacity-80`}
                    alt="Attachment"
                  />
                  <p className="text-[9px]">2</p>
                  <img
                    src={getBasicIcon("Chat")}
                    className={`w-[17px] opacity-80`}
                    alt="Chat"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Mail")}
                    className={`w-[17px] opacity-80`}
                    alt="Mail"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Calendar")}
                    className={`w-[17px] opacity-80`}
                    alt="Calendar"
                  />
                  <p className="text-[9px]">5</p>
                  <img
                    src={getBasicIcon("Tasks")}
                    className={`w-[17px] opacity-80`}
                    alt="Tasks"
                  />
                  <p className="text-[9px]">5</p>
                  
                </div>
                <div>
                <img
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#ffffff] my-[50px] mt-[80px]">
            <h5 className="text-[#3F434A] px-[30px] text-[20px] leading-[30px] font-medium">Internet History</h5>
            <div className="mt-[40px] pl-[35px] pr-[43px] flex text-[#8A9099] text-[14px] leading-[21px] items-center">
              <p>Product Service</p>
              <p className="ml-[92px]">Lead Id</p>
              <p className="ml-[91px]">Last Activity</p>
            </div>
            <div className="mt-[10px] mx-[13px] flex flex-col gap-y-2.5">
              <div className="text-[14px] pl-[20px] py-[5px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
                <div className="w-[190px]">
                  <p>Product A</p>
                </div>
                <div className="w-[137px]">
                  <p>12XX34</p>
                </div>
                <div className="w-[180px]">
                  <p>Email Sent</p>
                  <p>23 Jan 2023</p>
                </div>
                <div className="w-[44%] flex justify-end">
                <img
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-[14px] pl-[20px] py-[5px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
                <div className="w-[190px]">
                  <p>Product A</p>
                </div>
                <div className="w-[137px]">
                  <p>12XX34</p>
                </div>
                <div className="w-[180px]">
                  <p>Email Sent</p>
                  <p>23 Jan 2023</p>
                </div>
                <div className="w-[44%] flex justify-end">
                <img
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-[14px] pl-[20px] py-[5px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
                <div className="w-[190px]">
                  <p>Product A</p>
                </div>
                <div className="w-[137px]">
                  <p>12XX34</p>
                </div>
                <div className="w-[180px]">
                  <p>Email Sent</p>
                  <p>23 Jan 2023</p>
                </div>
                <div className="w-[44%] flex justify-end">
                <img
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* write your code here for profile page manya! */}
    </div>
  );
};

export default ClientProfile;


