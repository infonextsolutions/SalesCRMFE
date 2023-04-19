import { getBasicIcon } from "@/utils/AssetsHelper";
import React from "react";
import Navigator from "@/utils/customNavigator";
import Image from "next/image";

const Activityhistory = () => {
  return (
    <div className="bg-[#ffffff] my-[50px]">
      <h2 className="text-[#3F434A] text-2xl font-medium">Activity History</h2>
      <div className="flex text-[14px] mt-[30px] text-[#8A9099] leading-[21px] items-center">
        <p className="text-[#8A9099] font-medium">Date and Time</p>
        <p className="ml-[35px] font-medium text-[#8A9099]">Activity Type</p>
        <p className="ml-[35px] font-medium text-[#8A9099]">Partcipants</p>
        <p className="ml-[65px] font-medium text-[#8A9099]">Outcome</p>
        <p className="ml-[80px] font-medium text-[#8A9099]">Title and Description</p>
      </div>
      <div className="mt-[10px] mx-[20px] ml-[3px] flex flex-col gap-y-2.5">
        <div className="text-[14px] pl-[10px] py-[7px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
          <div className="w-[130px]">
            <p className="text-[#3F434A]">23 January</p>
            <p className="text-[#3F434A]">3:15 Pm</p>
          </div>
          <div className="w-[110px]">
            <Image
              src={getBasicIcon("activity-1")}
              className={` svg-renal-blue`}
              alt="Calendar"
              width={22}
              height={22}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-[135px] ">
            <p>Shraddha P.</p>
            <p className="text-gray-500  font-semibold text-xs">John C</p>
          </div>
          <div className="w-[140px]">
            <p>Interested</p>
          </div>
          <div className=" w-[190px] ">
            <p className="text-gray-500  font-semibold text-xs">
              Call About Product a Demo
            </p>
            <p className="text-[#8A9099] font-small text-xs">
              Product A Feature Discussion
            </p>
          </div>
          <div>
            <Image
              src={getBasicIcon("More")}
              className={`w-[19px]  rotate-90 cursor-pointer opacity-80`}
              alt=""
              width={17}
              height={17}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="text-[14px] pl-[10px] py-[7px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
          <div className="w-[130px]">
            <p className="text-[#3F434A]">23 January</p>
            <p className="text-[#3F434A]">3:15 Pm</p>
          </div>
          <div className="w-[110px]">
            <Image
              src={getBasicIcon("activity-2")}
              className={``}
              alt="Calendar"
              width={22}
              height={22}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-[135px]">
            <p>Shraddha P.</p>
            <p className="text-gray-500  font-semibold text-xs">John C</p>
          </div>
          <div className="w-[140px]">
            <p className="items-center ml-4">Not</p>
            <p>Interested</p>
          </div>
          <div className=" w-[190px] ">
            <p className="text-gray-500   font-semibold text-xs">
              Call About Product a Demo
            </p>
            <p className="text-[#8A9099]  font-small text-xs">
              Product A Feature Discussion
            </p>
          </div>
          <div>
            <Image
              src={getBasicIcon("More")}
              className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
              alt=""
              width={19}
              height={19}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="text-[14px] pl-[10px] py-[8px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
          <div className="w-[130px]">
            <p className="text-[#3F434A]">23 January</p>
            <p className="text-[#3F434A]">3:15 Pm</p>
          </div>
          <div className="w-[110px]">
            <Image
              src={getBasicIcon("activity-3")}
              className={``}
              alt="Calendar"
              width={22}
              height={22}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-[135px]">
            <p>Shraddha P.</p>
            <p className="text-gray-500 font-semibold text-xs">John C</p>
          </div>
          <div className="w-[140px]">
            <p>Interested</p>
          </div>
          <div className=" w-[190px] ">
            <p className="text-gray-500 font-semibold text-xs">
              Call About Product a Demo
            </p>
            <p className="text-[#8A9099]  font-small text-xs">
              Product A Feature Discussion
            </p>
          </div>
          <div>
            <Image
              src={getBasicIcon("More")}
              className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
              alt=""
              width={17}
              height={17}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="text-[14px] pl-[10px] py-[7px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
          <div className="w-[130px]">
            <p className="text-[#3F434A]">23 January</p>
            <p className="text-[#3F434A]">3:15 Pm</p>
          </div>
          <div className="w-[110px]">
            <Image
              src={getBasicIcon("activity-4")}
              className={``}
              alt="Calendar"
              width={22}
              height={22}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-[135px]">
            <p>Shraddha P.</p>
            <p className="text-gray-500  font-semibold text-xs">John C</p>
          </div>
          <div className="w-[140px]">
            <p>Interested</p>
          </div>
          <div className=" w-[190px]">
            <p className="text-gray-500  font-semibold text-xs">
              Call About Product a Demo
            </p>
            <p className="text-[#8A9099]  font-small text-xs">
              Product A Feature Discussion
            </p>
          </div>
          <div>
            <Image
              src={getBasicIcon("More")}
              className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
              alt=""
              width={19}
              height={19}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Activityhistory;
