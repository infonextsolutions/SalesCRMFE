export const getBasicIcon = (icon: String) => {

  return `/Images/Icons/Basic/${icon}.svg`;
};

export const getRoundedAvatar = (index: Number, size: Number) => {
  return `/Images/Avatars/Round/${size}px/${index}.svg`;
};

export const LeftArrow = ({renal}:any) => {
  return (
    <img src={getBasicIcon("Arrow-Right 2")} className={`${renal&&"svg-blue"} rotate-180`} alt="" />
  );
};

export const LeftDoubleArrow = ({renal}:any) => {
  return (
    <>
      <img src={getBasicIcon("Arrow-Right 2")} className={`rotate-180 translate-x-[6px] ${renal&&"svg-blue"}`} alt="" />
      <img src={getBasicIcon("Arrow-Right 2")} className={`rotate-180 translate-x-[-6px] ${renal&&"svg-blue"}`} alt="" />
    </>
  );
};

export const RightArrow = ({renal}:any) => {
  return <img src={getBasicIcon("Arrow-Right 2")} className={`${renal&&"svg-blue"}`} alt="" />;
};

export const RightDoubleArrow = ({renal}:any) => {
  return (
    <>
      <img src={getBasicIcon("Arrow-Right 2")} className={`${renal&&"svg-blue"} translate-x-[6px]`} alt="" />
      <img src={getBasicIcon("Arrow-Right 2")} className={`${renal&&"svg-blue"} translate-x-[-6px]`} alt="" />
    </>
  );
};