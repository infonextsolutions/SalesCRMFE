import React from "react";

const Item = ({
  IndicatorValue,
  Alternatives,
  Speaker,
  TimeRestriction,
  ComparisionType,
  top
}: any) => {
  return (
    <div className="w-[100%] py-[20px] pl-[40px] flex pb-[100px] border-t-[3px] border-gray-300"
        style={{
            paddingTop:top?"30px":"20px"
        }}
    >
      <div className="w-[30%] text-[#595F69] font-medium">{IndicatorValue}</div>
      <div className="w-[15%] text-[#595F69] font-medium">{ComparisionType}</div>
      <div className="w-[10%] text-[#595F69] font-medium">{Speaker}</div>
      <div className="w-[15%] text-[#595F69] font-medium">{TimeRestriction}</div>
      <div className="w-[30%] text-[#595F69] font-medium">
        {Alternatives.length === 0
          ? "----"
          : Alternatives.map((item: any, i: any) => {
              return <li className="" key={i} >{item}</li>;
            })}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="w-[100%] flex h-[40px] pl-[40px] mt-[40px] ">
      <div className="text-norm w-[30%]">Indicator value</div>
      <div className="text-norm w-[15%]">Comparision Type</div>
      <div className="text-norm w-[10%]">Speaker</div>
      <div className="text-norm w-[15%]">Time Restriction</div>
      <div className="text-norm w-[30%]">Alternatives</div>
    </div>
  );
};

const Table = () => {
  return (
    <div className="w-[95.6%] mt-[50px] mx-[2.2%] border-gray-300 border-t-[10px]">
      <Header />
      <Item
        IndicatorValue={"Can I give you a quick intro?"}
        ComparisionType="Equivalent "
        Speaker="Sales Rep"
        TimeRestriction="First 2 minutes"
        Alternatives={[
          "Are you open to a quick intro?",
          "Quick intro okay with you?",
          "Can I given you a quick intro?",
          "Open to a short introduction?",
        ]}
        top={true}
      />
      <Item
        IndicatorValue={"Can I give you a quick intro?"}
        ComparisionType="Equivalent "
        Speaker="Sales Rep"
        TimeRestriction="First 2 minutes"
        Alternatives={[]}
      />
    </div>
  );
};

export default Table;
