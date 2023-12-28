import DeleteCategory from "@/components/Indicator/basic/deleteCategory";
import EditCategory from "@/components/Indicator/basic/editCategory";
import Backdrop from "@/components/View/Backdrop/Center";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Button, { ButtonProps } from "@/utils/Button/Button";
import Image from "next/image";
import React, { useState } from "react";

const NavigationWithEditAndDeleteButtons = ({
  buttons,
  title,
}: NavigationProps) => {
  const [deleteForms, setDeleteForms] = useState(false);
  const [editForms, setEditForms] = useState(false);
  const [bool, setBool] = useState(true);

  const cancelDeleteForms = () => {
    setBool(false);
    setTimeout(() => {
      setDeleteForms(false);
      setBool(true);
    }, 500);
  };
  const cancelEditForms = () => {
    setBool(false);
    setTimeout(() => {
      setEditForms(false);
      setBool(true);
    }, 500);
  };
  return (
    <>
      {editForms && (
        <Backdrop bool={bool}>
          <EditCategory
            submit={() => {}}
            cancel={cancelEditForms}
            title={title}
          />
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
      <div className="w-[100%] min-h-[100px] flex items-center justify-between">
        <div className="flex w-[50%] gap-6 items-center">
          <h1 className=" text-[#3F434A] font-medium text-3xl">{title}</h1>
          <div className="flex gap-1">
            <Image
              className="cursor-pointer"
              onClick={() => setEditForms(true)}
              src={getBasicIcon("Edit")}
              alt=""
              // fill={true}
              width={25}
              height={25}
              style={{
                objectFit: "contain",
              }}
            />{" "}
            <Image
              className="cursor-pointer"
              src={getBasicIcon("Delete")}
              onClick={() => setDeleteForms(true)}
              alt=""
              // fill={true}
              width={25}
              height={25}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        {buttons?.length > 0 && (
          <div className="w-[50%] flex justify-end ">
            {buttons.map((item, i) => {
              return (
                <Button
                  dropdown={item.dropdown}
                  click={item.click}
                  value={item.value}
                  list={item.list}
                  icon={item.icon}
                  text={item.text}
                  id={item.id}
                  onClick1={item.onClick1}
                  key={i}
                  light={item.light}
                  dark={item.dark}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default NavigationWithEditAndDeleteButtons;

interface NavigationProps {
  buttons: ButtonProps[];
  children?: JSX.Element[] | JSX.Element;
  title: String;
}
