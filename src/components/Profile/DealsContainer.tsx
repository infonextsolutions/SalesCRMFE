import { getBasicIcon } from '@/utils/AssetsHelper';
import React from 'react';
import Navigator from '@/utils/customNavigator';
import Image from 'next/image';

const Deals=()=>{

    return(
        <>
        <Navigator
              callback = {()=>{

              }}
              current={0}
              list={[{id:0,title:"Deals"}]}
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
                  <Image
                    src={getBasicIcon("Phone")}
                    className={`w-[17px] opacity-80`}
                    alt="Phone"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Attachment")}
                    className={`w-[17px] opacity-80`}
                    alt="Attachment"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">2</p>
                  <Image
                    src={getBasicIcon("Chat")}
                    className={`w-[17px] opacity-80`}
                    alt="Chat"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Mail")}
                    className={`w-[17px] opacity-80`}
                    alt="Mail"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Calendar")}
                    className={`w-[17px] opacity-80`}
                    alt="Calendar"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Tasks")}
                    className={`w-[17px] opacity-80`}
                    alt="Tasks"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  
                </div>
                <div>
                <Image
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
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
                  <Image
                    src={getBasicIcon("Phone")}
                    className={`w-[17px] opacity-80`}
                    alt="Phone"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Attachment")}
                    className={`w-[17px] opacity-80`}
                    alt="Attachment"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">2</p>
                  <Image
                    src={getBasicIcon("Chat")}
                    className={`w-[17px] opacity-80`}
                    alt="Chat"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Mail")}
                    className={`w-[17px] opacity-80`}
                    alt="Mail"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Calendar")}
                    className={`w-[17px] opacity-80`}
                    alt="Calendar"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Tasks")}
                    className={`w-[17px] opacity-80`}
                    alt="Tasks"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  
                </div>
                <div>
                <Image
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                    width={19}
                    height={19}
                    style={{
                      objectFit:"contain"
                    }}
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
                  <Image
                    src={getBasicIcon("Phone")}
                    className={`w-[17px] opacity-80`}
                    alt="Phone"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Attachment")}
                    className={`w-[17px] opacity-80`}
                    alt="Attachment"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">2</p>
                  <Image
                    src={getBasicIcon("Chat")}
                    className={`w-[17px] opacity-80`}
                    alt="Chat"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Mail")}
                    className={`w-[17px] opacity-80`}
                    alt="Mail"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Calendar")}
                    className={`w-[17px] opacity-80`}
                    alt="Calendar"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Tasks")}
                    className={`w-[17px] opacity-80`}
                    alt="Tasks"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  
                </div>
                <div>
                <Image
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
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
                  <Image
                    src={getBasicIcon("Phone")}
                    className={`w-[17px] opacity-80`}
                    alt="Phone"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Attachment")}
                    className={`w-[17px] opacity-80`}
                    alt="Attachment"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">2</p>
                  <Image
                    src={getBasicIcon("Chat")}
                    className={`w-[17px] opacity-80`}
                    alt="Chat"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Mail")}
                    className={`w-[17px] opacity-80`}
                    alt="Mail"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Calendar")}
                    className={`w-[17px] opacity-80`}
                    alt="Calendar"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Tasks")}
                    className={`w-[17px] opacity-80`}
                    alt="Tasks"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  
                </div>
                <div>
                <Image
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                    width={19}
                    height={19}
                    style={{
                      objectFit:"contain"
                    }}
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
                  <Image
                    src={getBasicIcon("Phone")}
                    className={`w-[17px] opacity-80`}
                    alt="Phone"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Attachment")}
                    className={`w-[17px] opacity-80`}
                    alt="Attachment"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">2</p>
                  <Image
                    src={getBasicIcon("Chat")}
                    className={`w-[17px] opacity-80`}
                    alt="Chat"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Mail")}
                    className={`w-[17px] opacity-80`}
                    alt="Mail"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Calendar")}
                    className={`w-[17px] opacity-80`}
                    alt="Calendar"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Tasks")}
                    className={`w-[17px] opacity-80`}
                    alt="Tasks"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  
                </div>
                <div>
                <Image
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                    width={19}
                    height={19}
                    style={{
                      objectFit:"contain"
                    }}
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
                  <Image
                    src={getBasicIcon("Phone")}
                    className={`w-[17px] opacity-80`}
                    alt="Phone"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Attachment")}
                    className={`w-[17px] opacity-80`}
                    alt="Attachment"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">2</p>
                  <Image
                    src={getBasicIcon("Chat")}
                    className={`w-[17px] opacity-80`}
                    alt="Chat"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Mail")}
                    className={`w-[17px] opacity-80`}
                    alt="Mail"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Calendar")}
                    className={`w-[17px] opacity-80`}
                    alt="Calendar"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Tasks")}
                    className={`w-[17px] opacity-80`}
                    alt="Tasks"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  
                </div>
                <div>
                <Image
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                    width={19}
                    height={19}
                    style={{
                      objectFit:"contain"
                    }}
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
                  <Image
                    src={getBasicIcon("Phone")}
                    className={`w-[17px] opacity-80`}
                    alt="Phone"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Attachment")}
                    className={`w-[17px] opacity-80`}
                    alt="Attachment"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">2</p>
                  <Image
                    src={getBasicIcon("Chat")}
                    className={`w-[17px] opacity-80`}
                    alt="Chat"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Mail")}
                    className={`w-[17px] opacity-80`}
                    alt="Mail"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Calendar")}
                    className={`w-[17px] opacity-80`}
                    alt="Calendar"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Tasks")}
                    className={`w-[17px] opacity-80`}
                    alt="Tasks"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  
                </div>
                <div>
                <Image
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                    width={19}
                    height={19}
                    style={{
                      objectFit:"contain"
                    }}
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
                  <Image
                    src={getBasicIcon("Phone")}
                    className={`w-[17px] opacity-80`}
                    alt="Phone"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Attachment")}
                    className={`w-[17px] opacity-80`}
                    alt="Attachment"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">2</p>
                  <Image
                    src={getBasicIcon("Chat")}
                    className={`w-[17px] opacity-80`}
                    alt="Chat"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Mail")}
                    className={`w-[17px] opacity-80`}
                    alt="Mail"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Calendar")}
                    className={`w-[17px] opacity-80`}
                    alt="Calendar"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  <Image
                    src={getBasicIcon("Tasks")}
                    className={`w-[17px] opacity-80`}
                    alt="Tasks"
                    width={17}
                    height={17}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                  <p className="text-[9px]">5</p>
                  
                </div>
                <div>
                <Image
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                    width={19}
                    height={19}
                    style={{
                      objectFit:"contain"
                    }}
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
                <Image
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                    width={19}
                    height={19}
                    style={{
                      objectFit:"contain"
                    }}
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
                <Image
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                    width={19}
                    height={19}
                    style={{
                      objectFit:"contain"
                    }}
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
                <Image
                    src={getBasicIcon("More")}
                    className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                    alt=""
                    width={19}
                    height={19}
                    style={{
                      objectFit:"contain"
                    }}
                  />
                </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Deals;