import Image from "next/image";

export const getBasicIcon = (icon: String) => {
  return `/Images/Icons/Basic/${icon}.svg`;
};

export const getRoundedAvatar = (index: Number, size: Number) => {
  return `/Images/Avatars/Round/${size}px/${index}.svg`;
};

export const LeftArrow = ({ renal }: any) => {
  return (
    <Image
      src={getBasicIcon("Arrow-Right 2")}
      className={`${renal && "svg-blue"} rotate-180`}
      alt=""
      width={16}
      height={16}
      style={{
        objectFit: "contain",
      }}
    />
  );
};

export const LeftDoubleArrow = ({ renal }: any) => {
  return (
    <>
      <Image
        src={getBasicIcon("Arrow-Right 2")}
        className={`rotate-180 translate-x-[6px] ${renal && "svg-blue"}`}
        alt=""
        width={18}
        height={16}
        style={{
          objectFit: "contain",
        }}
      />
      <Image
        src={getBasicIcon("Arrow-Right 2")}
        className={`rotate-180 translate-x-[-6px] ${renal && "svg-blue"}`}
        alt=""
        width={18}
        height={16}
        style={{
          objectFit: "contain",
        }}
      />
    </>
  );
};

export const RightArrow = ({ renal }: any) => {
  return (
    <Image
      src={getBasicIcon("Arrow-Right 2")}
      className={`${renal && "svg-blue"}`}
      alt=""
      width={16}
      height={16}
      style={{
        objectFit: "contain",
      }}
    />
  );
};

export const RightDoubleArrow = ({ renal }: any) => {
  return (
    <>
      <Image
        src={getBasicIcon("Arrow-Right 2")}
        className={`${renal && "svg-blue"} translate-x-[6px]`}
        alt=""
        width={18}
        height={16}
        style={{
          objectFit: "contain",
        }}
      />
      <Image
        src={getBasicIcon("Arrow-Right 2")}
        className={`${renal && "svg-blue"} translate-x-[-6px]`}
        alt=""
        width={18}
        height={16}
        style={{
          objectFit: "contain",
        }}
      />
    </>
  );
};
