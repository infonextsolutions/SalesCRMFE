import ButtonDropDown from "@/utils/Button/Button";
import React from "react";
import Table from "../table/basic";

const IndicatorContainer = () => {
  return (
    <div className="w-[100%] tracking-wide min-h-[120vh] bg-[#fff] rounded-2xl py-[20px] relative">
      <div className="w-[260px]">
        <p className="text-[#8A9099] ml-[35px] mb-[6px] font-medium">
          Indicator Type
        </p>
        <ButtonDropDown
          light={true}
          text={"Completed"}
          height={39}
          border={true}
          id={1}
          dropdown={true}
          list={[]}
        />
      </div>
      <div className="w-[260px] mt-[18px] relative">
        <p className="text-[#8A9099] tracking-wide ml-[35px] mb-[6px] font-medium">
          Indicator Category
        </p>
        <ButtonDropDown
          light={true}
          height={39}
          text={"Call Purpose"}
          border={true}
          id={1}
          dropdown={true}
          list={[]}
        />
      </div>
      <div className="w-[180px] absolute top-[30px] right-[80px]">
        <ButtonDropDown
          light={false}
          height={43}
          width={200}
          text={"Add Indicator"}
          border={true}
          id={1}
          dropdown={true}
          list={[
            { title: "Add Indicator Category" },
            { title: "Add Indicator Value" },
          ]}
        />
      </div>
      <Table />
    </div>
  );
};

export default IndicatorContainer;
