import Addvalue from "@/components/Indicator/basic/addValue";
import DeleteCategory from "@/components/Indicator/basic/deleteCategory";
import Backdrop from "@/components/View/Backdrop/Center";
import { getBasicIcon } from "@/utils/AssetsHelper";
import SimpleButton from "@/utils/Button/SimpleButton";
import Image from "next/image";
import React, { useState } from "react";

const IndicatorContainer = ({ title, data }: any) => {
  const [editForms, setEditForms] = useState(false);
  const [deleteForms, setDeleteForms] = useState(false);

  const [bool, setBool] = useState(true);

  const cancelForms = () => {
    setBool(false);
    setTimeout(() => {
      setEditForms(false);
      setBool(true);
    }, 500);
  };
  const cancelDeleteForms = () => {
    setBool(false);
    setTimeout(() => {
      setDeleteForms(false);
      setBool(true);
    }, 500);
  };

  return (
    <div>
      {editForms && (
        <Backdrop bool={bool}>
          <Addvalue submit={() => {}} cancel={cancelForms} />
        </Backdrop>
      )}
      {deleteForms && (
        <Backdrop bool={bool}>
          <DeleteCategory
            submit={() => {}}
            cancel={cancelDeleteForms}
            title={title}
          />
        </Backdrop>
      )}
      <div className="flex justify-between w-[80%]">
        <h4 className="text-gray-600 font-bold">Indicator Value</h4>
        <h4 className="text-gray-600 font-bold">Alternative Values</h4>
        <h4 className="text-gray-600 font-bold">Score</h4>
      </div>
      <hr className="mt-2" />

      {data.map((item: any) => (
        <div key={item.id}>
          <div className=" w-[99%] flex justify-between">
            <div className=" h-[auto] flex  w-[80%] py-4">
              <h4 className="text-[#585858] w-[47%] pr-4 font-semibold">
                {item.indicator_value}
              </h4>
              <div className="flex flex-col gap-3 w-[50%] ">
                {item.alternative_values.map((item: any) => (
                  <h4
                    key={item.id}
                    className="text-[#585858] font-semibold pr-4"
                  >
                    {item.value}
                  </h4>
                ))}
              </div>
              <h4 className="text-[#585858] font-semibold">{item.score}</h4>
            </div>
            <div className="flex gap-4 w-[10%] h-[62px]">
              <Image
                className="w-[20%] cursor-pointer "
                src={getBasicIcon("Edit")}
                alt=""
                // fill={true}
                width={30}
                height={30}
                style={{
                  objectFit: "contain",
                }}
                onClick={() => setEditForms(true)}
              />{" "}
              <Image
                className="w-[20%] cursor-pointer  "
                src={getBasicIcon("Delete")}
                onClick={() => setDeleteForms(true)}
                alt=""
                // fill={true}
                width={30}
                height={30}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default IndicatorContainer;
