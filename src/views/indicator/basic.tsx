import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavbarWithButton from "@/components/app/Navbar/NavbarWithButton";
import Backdrop from "@/components/View/Backdrop";
import Navigator from "@/utils/customNavigator";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Navigation from "@/components/app/Navigation";
import Image from "next/image";


const sideBarItems = [
  "Introduction",
  "Agenda Setting",
  "Company Introduction",
  "Product/Service",
  "Probing",
  "Next Steps Discussion",
  "Objection Handling",
];

const Indicator = () => {
  const router = useRouter();

  const [currIndicatorValues, setCurrIndicatorValues] = useState<any>([
    {
      id: 1,
      key: "1",
      label: "Hi",
      alternative_values: [
        {
          id: 1,
          value: "Hey",
        },
        {
          id: 2,
          value: "Hello",
        },
        {
          id: 3,
          value: "Hey There",
        },
      ],
      scoreWeightage: 1,
    },
    {
      id: 2,
      key: "2",
      label: "Hi",
      alternative_values: [
        {
          id: 1,
          value: "Hey",
        },
        {
          id: 2,
          value: "Hello",
        },
        {
          id: 3,
          value: "Hey There",
        },
      ],
      scoreWeightage: 1,
    },
    {
      id: 3,
      key: "3",
      label: "Hi",
      alternative_values: [
        {
          id: 1,
          value: "Hey",
        },
        {
          id: 2,
          value: "Hello",
        },
        {
          id: 3,
          value: "Hey There",
        },
      ],
      scoreWeightage: 1,
    },
    {
      id: 4,
      key: "4",
      label: "Hi",
      alternative_values: [
        {
          id: 1,
          value: "Hey",
        },
        {
          id: 2,
          value: "Hello",
        },
        {
          id: 3,
          value: "Hey There",
        },
      ],
      scoreWeightage: 1,
    },
  ]);

  const [indicatorTypes, setIndicatorTypes] = useState([
    {
      key: "introduction",
      label: "Introduction",
      scoreWeightage: 8,
      edit: false,
      categories: [
        {
          key: "greetings",
          label: "Greetings",
          scoreWeightage: 8,
        },
        {
          key: "name",
          label: "Name",
          scoreWeightage: 8,
        },
        {
          key: "title_and_roles",
          label: "Title and Roles",
          scoreWeightage: 8,
        },
        {
          key: "responsibilities",
          label: "Responsibilities",
          scoreWeightage: 8,
        },
      ],
    },
    {
      key: "agenda_setting",
      label: "Agenda Setting",
      scoreWeightage: 8,
      edit: false,
      categories: [
        {
          key: "agenda",
          label: "Agenda",
          scoreWeightage: 8,
        },
        {
          key: "report_building",
          label: "Report Building",
          scoreWeightage: 8,
        },
      ],
    },
    {
      key: "company_intro",
      label: "Company Introduction",
      scoreWeightage: 8,
      edit: false,
      categories: [
        {
          key: "company_overview",
          label: "Company Overview",
          scoreWeightage: 8,
        },
        {
          key: "value_proposition",
          label: "Value Proposition",
          scoreWeightage: 8,
        },
      ],
    },
    {
      key: "product_service",
      label: "Product/Service",
      scoreWeightage: 8,
      edit: false,
      categories: [
        {
          key: "product_demo",
          label: "Product Demo/Information",
          scoreWeightage: 8,
        },
        {
          key: "benefits",
          label: "Benefits",
          scoreWeightage: 8,
        },
        {
          key: "use_cases",
          label: "Use Cases",
          scoreWeightage: 8,
        },
      ],
    },
    {
      key: "probing",
      label: "Probing",
      scoreWeightage: 8,
      edit: false,
      categories: [
        {
          key: "identifying_needs",
          label: "Identifying Needs",
          scoreWeightage: 8,
        },
        {
          key: "understanding_challenges",
          label: "Understanding Challenges",
          scoreWeightage: 8,
        },
      ],
    },
    {
      key: "next_step_discussion",
      label: "Next Steps Discussion",
      scoreWeightage: 8,
      edit: false,
      categories: [
        {
          key: "proposing_demo",
          label: "Proposing Demo",
          scoreWeightage: 8,
        },
        {
          key: "scheduling_follow_up",
          label: "Scheduling Follow-Up",
          scoreWeightage: 8,
        },
      ],
    },
    {
      key: "objecting_handling",
      label: "Objecting Handling",
      scoreWeightage: 8,
      edit: false,
      categories: [
        {
          key: "solution_offering",
          label: "Solution Offering",
          scoreWeightage: 8,
        },
        {
          key: "address_concerns",
          label: "Address Concerns",
          scoreWeightage: 8,
        },
      ],
    },

  ]);

  const [currIndicatorType, setCurrIndicatorType] = useState(0);
  const [currIndicatorCategory, setCurrIndicatorCategory] = useState(0);

  useEffect(() => {
    const handleBeforeHistoryChange = () => {
      router.events.on("beforeHistoryChange", handleBeforeHistoryChange);
      router.beforePopState(() => {
        router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
        return true;
      });
    };

    handleBeforeHistoryChange();

    return () => {
      router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
    };
  }, []);

  const [delPopup, setDelPopup] = useState<any>({ open: false, payload: {} });
  const [indicatorSetting, setIndicatorSetting] = useState(false);
  const [indicatorCategoryScoring, setIndicatorCategoryScoring] = useState<any>({ open: false, payload: {} });
  const [indicatorValueScoring, setIndicatorValueScoring] = useState<any>({ open: false, payload: {} });
  const [editIndicatorCategory, setEditIndicatorCategory] = useState<any>({ open: false, payload: {} });
  const [newIndicatorCategory, setNewIndicatorCategory] = useState<any>({ open: false, payload: {} });
  const [editIndicatorValue, setEditIndicatorValue] = useState<any>({ open: false, payload: {} });
  const [newIndicatorValue, setNewIndicatorValue] = useState<any>({ open: false, payload: {} });
  const [currICTab, setCurrICTab] = useState(0);
  const [ICTabs, setICTabs] = useState([
    { id: 0, title: "Score Settings" },
    { id: 1, title: "Time Settings" },
  ]);

  const handleIndicatorSettingClick = () => {
    console.log('handle indicator click')
    setIndicatorSetting(!indicatorSetting);
  };

  const handleICTabNavigation = (val: any) => {
    setCurrICTab(val);
  };

  const cancelDelete = () => {
    setDelPopup({ open: !delPopup.open, payload: {} });
  };

  const handleISCancel = () => {
    if (currICTab === 0) {
      let isEdit = false;
      indicatorTypes?.forEach((item: any) => {
        if (item?.edit) {
          isEdit = true;
        }
      });
      if (isEdit) {
        setIndicatorTypes((currIndicatorTypes: any) => {
          return currIndicatorTypes?.map((item: any) => {
            if (item?.key === "") {
              return null;
            } else {
              return { ...item, edit: false };
            }
          });
        });
      } else {
        setIndicatorSetting(false);
      }
    } else {
      setIndicatorSetting(false);
    }
  };

  const getScoreWeightageSum = (type?: "CATEGORY" | "VALUE" | null) => {
    if (type === "CATEGORY") {
      return indicatorTypes?.[currIndicatorType]?.categories?.reduce((acc: number, item: any) => {
        return acc + item?.scoreWeightage;
      }, 0);
    } else if (type === "VALUE") {
      return currIndicatorValues?.reduce((acc: number, item: any) => {
        return acc + item?.scoreWeightage;
      }, 0);
    } else {
      return indicatorTypes?.reduce((acc: number, item: any) => {
        return acc + item?.scoreWeightage;
      }, 0);
    }
  };

  const addNewIndicatorType = () => {
    setIndicatorTypes([...indicatorTypes, { key: "", label: "", scoreWeightage: 0, edit: true, categories: [] }]);
  };

  const addNewIndicatorCategory = () => {
    setIndicatorTypes((currTypes: any) => {
      return currTypes?.map((typeItem: any, typeIdx: number) => {
        if (typeIdx === currIndicatorType) {
          return {
            ...typeItem,
            categories: [...typeItem.categories, { key: "", label: "", scoreWeightage: 0, edit: true }]
          };
        } else {
          return typeItem;
        }
      });
    });
  };

  const addNewIndicatorValue = () => {
    setCurrIndicatorValues([...currIndicatorValues, { key: "", label: "", scoreWeightage: 0, alternative_values: [], edit: true }]);
  };

  const delIndicatorType = (payload: any) => {
    const { key, id } = payload;
    setIndicatorTypes((currIndicatorTypes: any) => {
      return currIndicatorTypes?.filter((item: any) => item?.key !== key);
    });
  };

  const delIndicatorCategory = (payload: any) => {
    const { key } = payload;
    setIndicatorTypes((currTypes: any) => {
      return currTypes?.map((typeItem: any, typeIdx: number) => {
        if (typeIdx === currIndicatorType) {
          return {
            ...typeItem,
            categories: typeItem?.categories?.filter((item: any) => item.key !== key)
          };
        } else {
          return typeItem;
        }
      });
    });
  };

  const delIndicatorValueFromTable = (payload: any) => {
    const { key } = payload;
    setCurrIndicatorValues((currValues: any) => {
      return currValues?.filter((item: any) => item?.key !== key);
    });
  };

  const delIndicatorValue = (payload: any) => {
    const { key } = payload;
    setDelPopup({ open: true, payload: { key: key } });
  };

  const editIndicatorType = (payload: any) => {
    const { key, id } = payload;
    setIndicatorTypes((currIndicatorTypes: any) => {
      return currIndicatorTypes?.map((item: any) => {
        if (item?.key === key) {
          return { ...item, edit: true };
        } else {
          return item;
        }
      });
    });
  };

  const handleEditIndicatorCategory = (payload: any) => {
    const { key } = payload;
    setIndicatorTypes((currIndicatorTypes: any) => {
      return currIndicatorTypes?.map((item: any, typeIdx: number) => {
        if (typeIdx === currIndicatorType) {
          return item?.categories?.map((categoryItem: any, categoryIndex: number) => {
            if (categoryItem?.key === key) {
              return { ...categoryItem, edit: true };
            } else {
              return categoryItem;
            }
          });
        } else {
          return item;
        }
      });
    });
  };

  const handleEditIndicatorValueFromTable = (payload: any) => {
    const { key, id } = payload;
    setCurrIndicatorValues((currValues: any) => {
      return currValues?.map((item: any) => {
        if (item?.key === key) {
          return { ...item, edit: true };
        } else {
          return item;
        }
      });
    });
  };

  const handleEditIndicatorValue = (payload: any) => {
    const { key } = payload;
    setEditIndicatorValue({ open: true, payload: {} });
  };

  const handleAdd = (prev: any, next: any) => {
    console.log('handle add', next);
    if (next === 0) {
      setNewIndicatorCategory({ open: true });
    } else if (next === 1) {
      setNewIndicatorValue({ open: true });
    }
  };

  const handleAddScore = (prev: any, next: any) => {
    console.log('handle add score', next);
    if (next === 0) {
      setIndicatorCategoryScoring({ open: true });
    } else if (next === 1) {
      setIndicatorValueScoring({ open: true });
    }
  };

  const formatString = (payload: any, type: "SEPARATE" | "COMBINE" = "SEPARATE") => {
    if (type === "SEPARATE") {
      return payload.split(",");
    } else {
      return payload?.join(",");
    }
  };

  const scoreSettingTab = () => {
    return (
      <div className="w-[100%] text-black px-[30px] pt-[20px]">
        <table className="w-[100%]">
          <tr>
            <th className="text-left">Indicator Type</th>
            <th className="text-left"></th>
            <th className="text-left">Score Weightage<br />(out of 100)</th>
            <th className="text-left"></th>
          </tr>
          {indicatorTypes?.map((indicatorType: any, index: number) => (
            <tr key={index}>
              <td>
                <input type="text" value={indicatorType?.label} className={`bg-white ${indicatorType?.edit ? "border-2 border-black-900" : ""}`} disabled={!indicatorType?.edit} />
              </td>
              <td className="">
                {!indicatorType?.edit && (
                  <button className="" onClick={() => editIndicatorType({ key: indicatorType?.key })}>
                    <img src={getBasicIcon("Edit")} alt="Edit" className="" />
                  </button>
                )}
              </td>
              <td>
                <input type="text" className={`bg-white w-[80px] ${indicatorType?.edit ? "border-2 border-black-900" : ""}`} value={indicatorType?.scoreWeightage} disabled={!indicatorType?.edit} />
              </td>
              <td>
                <button className="" onClick={() => delIndicatorType({ key: indicatorType?.key })}>
                  <img src={getBasicIcon("Delete")} alt="Delete" className="" />
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <button className="text-black text-[14px]" onClick={addNewIndicatorType}>Add New Indicator Type</button>
            </td>
            <td></td>
            <td>
              <span className="text-green">Sum: {getScoreWeightageSum()}</span>
            </td>
            <td></td>
          </tr>
        </table>
      </div>
    );
  };

  const timeSettingTab = () => {
    return (
      <div className="w-[100%] text-black px-[30px] pt-[20px]">
        <table className="w-[100%]">
          <tr>
            <th className="text-left">Indicator Type</th>
            <th className="text-left">Start Time (MM:SS)</th>
            <th className="text-left">End Time (MM:SS)</th>
          </tr>
          {indicatorTypes?.map((indicatorType: any, index: number) => (
            <tr key={index} className="">
              <td>{indicatorType?.label}</td>
              <td className="">
                <input type="text" className="w-[50px] mr-[6px] bg-white" value={indicatorType?.startTimeMin || "00"} />
                <input type="text" className="w-[50px] bg-white" value={indicatorType?.startTimeSec || "00"} />
              </td>
              <td className="">
                <input type="text" className="w-[50px] bg-white mr-[6px]" value={indicatorType?.endTimeMin || "00"} />
                <input type="text" className="w-[50px] bg-white" value={indicatorType?.endTimeSec || "00"} />
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  };

  return (
    <>
      {indicatorSetting && (
        <Backdrop>
          <div className="">
            <Navigator width={false} callback={handleICTabNavigation} current={currICTab} list={ICTabs} />
            {currICTab === 0 ? scoreSettingTab() : timeSettingTab()}
            <div className="text-black w-[100%] flex justify-end gap-[20px] p-[40px]">
              <button className="">Save</button>
              <button className="" onClick={handleISCancel}>Cancel</button>
            </div>
          </div>
        </Backdrop>
      )}
      {indicatorCategoryScoring.open && (
        <Backdrop>
          <div className="w-[100%] text-black px-[30px] pt-[20px]">
            <h2 className="text-[24px] font-medium">Indicator Category Scoring</h2>
            <table className="w-[100%]">
              <tr>
                <th className="text-left">Indicator Category</th>
                <th className="text-left"></th>
                <th className="text-left">Score Weightage<br />(out of 100)</th>
                <th className="text-left"></th>
              </tr>
              {indicatorTypes?.[currIndicatorType]?.categories?.map((categoryItem: any, index: number) => (
                <tr key={index}>
                  <td>
                    <input type="text" value={categoryItem?.label} className={`bg-white ${categoryItem?.edit ? "border-2 border-black-900" : ""}`} disabled={!categoryItem?.edit} />
                  </td>
                  <td className="">
                    {!categoryItem?.edit && (
                      <button className="" onClick={() => handleEditIndicatorCategory({ key: categoryItem?.key })}>
                        <img src={getBasicIcon("Edit")} alt="Edit" className="" />
                      </button>
                    )}
                  </td>
                  <td>
                    <input type="text" className={`bg-white w-[80px] ${categoryItem?.edit ? "border-2 border-black-900" : ""}`} value={categoryItem?.scoreWeightage} disabled={!categoryItem?.edit} />
                  </td>
                  <td>
                    <button className="" onClick={() => delIndicatorCategory({ key: categoryItem?.key })}>
                      <img src={getBasicIcon("Delete")} alt="Delete" className="" />
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <button className="text-black text-[14px]" onClick={addNewIndicatorCategory}>Add New Indicator Category</button>
                </td>
                <td></td>
                <td>
                  <span className="text-green">Sum: {getScoreWeightageSum("CATEGORY")}</span>
                </td>
                <td></td>
              </tr>
            </table>
            <div className="text-black w-[100%] flex justify-end gap-[20px] p-[40px]">
              <button className="">Save</button>
              <button className="" onClick={() => setIndicatorCategoryScoring({ open: false })}>Cancel</button>
            </div>
          </div>
        </Backdrop>
      )}
      {indicatorValueScoring.open && (
        <Backdrop>
          <div className="w-[100%] text-black px-[30px] pt-[20px]">
            <table className="w-[100%]">
              <tr>
                <th className="text-left">Indicator Value</th>
                <th className="text-left"></th>
                <th className="text-left">Score Weightage<br />(out of 100)</th>
                <th className="text-left"></th>
              </tr>
              {currIndicatorValues?.map((valueItem: any, index: number) => (
                <tr key={index}>
                  <td>
                    <input type="text" value={valueItem?.label} className={`bg-white ${valueItem?.edit ? "border-2 border-black-900" : ""}`} disabled={!valueItem?.edit} />
                  </td>
                  <td className="">
                    {!valueItem?.edit && (
                      <button className="" onClick={() => handleEditIndicatorValueFromTable({ key: valueItem?.key })}>
                        <img src={getBasicIcon("Edit")} alt="Edit" className="" />
                      </button>
                    )}
                  </td>
                  <td>
                    <input type="text" className={`bg-white w-[80px] ${valueItem?.edit ? "border-2 border-black-900" : ""}`} value={valueItem?.scoreWeightage} disabled={!valueItem?.edit} />
                  </td>
                  <td>
                    <button className="" onClick={() => delIndicatorValueFromTable({ key: valueItem?.key })}>
                      <img src={getBasicIcon("Delete")} alt="Delete" className="" />
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <button className="text-black text-[14px]" onClick={addNewIndicatorValue}>Add New Indicator Value</button>
                </td>
                <td></td>
                <td>
                  <span className="text-green">Sum: {getScoreWeightageSum("VALUE")}</span>
                </td>
                <td></td>
              </tr>
            </table>
            <div className="text-black w-[100%] flex justify-end gap-[20px] p-[40px]">
              <button className="">Save</button>
              <button className="" onClick={() => setIndicatorValueScoring({ open: false })}>Cancel</button>
            </div>
          </div>
        </Backdrop>
      )}
      {delPopup.open && (
        <Backdrop>
          <div className="p-[40px] text-black">
            <h2 className="">Are you sure you want to delete {`"${delPopup?.payload?.key}"`}?</h2>
            <p className="text-black text-[12px] ">
              <span className="font-bold">Note: </span>
              <span>Associated score will also be deleted and will be equally distributed for other indicator types.</span>
            </p>
            <div className="text-black w-[100%] flex justify-end gap-[20px]">
              <button className="" onClick={cancelDelete}>Cancel</button>
              <button className="">Delete</button>
            </div>
          </div>
        </Backdrop>
      )}
      {editIndicatorValue.open && (
        <Backdrop>
          <div className="text-black p-[40px]">
            <div className="flex items-center justify-between">
              <h2 className="text-[24px] font-medium">Edit Indicator Value</h2>
              <button onClick={() => setEditIndicatorValue({ open: false, payload: {} })}>
                <img src={getBasicIcon("Cross")} alt="close" />
              </button>
            </div>
            <div className="">
              <div className="flex flex-col mt-[14px]">
                <label htmlFor="iv" className="">Indicator Value Name</label>
                <input type="text" className="bg-white border-[2px]" id="iv" />
              </div>
              <div className="flex flex-col mt-[14px]">
                <label htmlFor="avftiv" className="">Alternate Values for the Indicator Value</label>
                <input type="text" className="bg-white border-[2px]" id="avftiv" placeholder="Enter comma-separated values" />
              </div>
            </div>
            <div className="flex w-[100%] justify-end mt-[30px]">
              <button className="">Create</button>
            </div>
          </div>
        </Backdrop>
      )}
      {newIndicatorValue.open && (
        <Backdrop>
          <div className="text-black p-[40px]">
            <div className="flex items-center justify-between">
              <h2 className="text-[24px] font-medium">New Indicator Value</h2>
              <button onClick={() => setNewIndicatorValue({ open: false, payload: {} })}>
                <img src={getBasicIcon("Cross")} alt="close" />
              </button>
            </div>
            <div className="">
              <div className="flex flex-col mt-[14px]">
                <label htmlFor="iv" className="">Indicator Value Name</label>
                <input type="text" className="bg-white border-[2px]" id="iv" placeholder="Name" />
              </div>
              <div className="flex flex-col mt-[14px]">
                <label htmlFor="avftiv" className="">Alternate Values for the Indicator Value</label>
                <input type="text" className="bg-white border-[2px]" id="avftiv" placeholder="Enter comma-separated values" />
              </div>
            </div>
            <div className="flex w-[100%] justify-end mt-[30px]">
              <button className="">Create</button>
            </div>
          </div>
        </Backdrop>
      )}
      {editIndicatorCategory.open && (
        <Backdrop>
          <div className="text-black p-[40px]">
            <div className="flex items-center justify-between">
              <h2 className="text-[24px] font-medium">Edit Indicator Category</h2>
              <button onClick={() => setEditIndicatorCategory({ open: false, payload: {} })}>
                <img src={getBasicIcon("Cross")} alt="close" />
              </button>
            </div>
            <div className="">
              <div className="flex flex-col mt-[14px]">
                <label htmlFor="iv" className="">Indicator Category Name</label>
                <input type="text" className="bg-white border-[2px]" id="iv" value={editIndicatorCategory?.payload?.value} />
              </div>
            </div>
            <div className="flex w-[100%] justify-end mt-[30px]">
              <button className="">Save</button>
            </div>
          </div>
        </Backdrop>
      )}
      {newIndicatorCategory.open && (
        <Backdrop>
          <div className="text-black p-[40px]">
            <div className="flex items-center justify-between">
              <h2 className="text-[24px] font-medium">New Indicator Category</h2>
              <button onClick={() => setNewIndicatorCategory({ open: false, payload: {} })}>
                <img src={getBasicIcon("Cross")} alt="close" />
              </button>
            </div>
            <div className="">
              <div className="flex flex-col mt-[14px]">
                <label htmlFor="iv" className="">Indicator Category Name</label>
                <input type="text" className="bg-white border-[2px]" id="iv" value={editIndicatorCategory?.payload?.value} placeholder="Name" />
              </div>
              <div className="flex flex-col mt-[14px]">
                <label htmlFor="iv" className="">Add New Indicator Value</label>
                <input type="text" className="bg-white border-[2px]" id="iv" value={editIndicatorCategory?.payload?.value} placeholder="Name" />
              </div>
              <div className="flex flex-col mt-[14px]">
                <label htmlFor="iv" className="">Alternatives</label>
                <input type="text" className="bg-white border-[2px]" id="iv" value={editIndicatorCategory?.payload?.value} placeholder="Enter Comma-separated values" />
              </div>
            </div>
            <div className="flex w-[100%] justify-end mt-[30px]">
              <button className="">Create</button>
            </div>
          </div>
        </Backdrop>
      )}
      <NavbarWithButton
        src="Indicators"
        mainTitle={`Indicators > ${indicatorTypes?.[currIndicatorType]?.label}`}
        title={indicatorTypes?.[currIndicatorType]?.categories?.[currIndicatorCategory]?.label}
        buttons={[
          {
            text: "Indicator Settings",
            dropdown: true,
            id: 1,
            icon: "Settings",
            light: false,
            dark: true,
            onClick1: handleIndicatorSettingClick,
            list: [],
          },
        ]}
      />
      <div className="w-[100%] bg-white pt-6 min-h-[90vh] pl-[20px] pr-[10px] flex">
        <div className="flex flex-col gap-4 bg-[#F0F0F0] rounded-3xl">
          <h2 className="bg-[#909193] text-white font-bold text-xl p-4 px-12 rounded-tl-2xl">
            Indicator Types
          </h2>
          <ul className="flex flex-col gap-4 items-center text-black">
            {indicatorTypes.map((item: any, index: number) => (
              <li
                key={index}
                onClick={() => setCurrIndicatorType(index)}
                value={item?.key}
                className={`${currIndicatorType == index ? "text-bg-red" : ""
                  } font-medium cursor-pointer`}
              >
                {item?.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#fe50430c] p-4 w-[80%]">
          <div className="w-[70%] flex items-start justify-between ">
            {indicatorTypes?.[currIndicatorType]?.categories?.map((it: any, index: number) => (
              <button
                key={index}
                onClick={() => { setCurrIndicatorCategory(index) }}
                className={
                  currIndicatorCategory === index
                    ? "focus:outline-none text-white bg-bg-red  font-medium rounded-lg text-md px-7 py-2"
                    : "text-black font-medium text-md px-7 py-2"
                }
              >
                {it?.label}
              </button>
            ))}
          </div>
          <hr className="mt-4" />
          <Navigation
            title={"Greetings"}
            buttons={[
              {
                text: "Score",
                dropdown: true,
                id: 0,
                click: handleAddScore,
                light: false,
                dark: true,
                list: [{ id: 0, title: "Indicator Category Score" }, { id: 1, title: "Indicator Value Score" }],
                value: 0,
              },
              {
                text: "Add",
                dropdown: true,
                id: 1,
                icon: "Plus",
                click: handleAdd,
                light: false,
                dark: false,
                list: [{ id: 0, title: "Indicator Category" }, { id: 1, title: "Indicator Value" }],
              },
            ]}
          />
          <div>
            <div className="flex justify-between w-[80%]">
              <h4 className="text-gray-600 font-semibold">Indicator Value</h4>
              <h4 className="text-gray-600 font-semibold">Alternative Values</h4>
              <h4 className="text-gray-600 font-semibold">Score</h4>
            </div>
            <hr className="mt-2" />

            {currIndicatorValues?.map((data: any, index: number) => (
              <div key={data.id}>
                <div className=" w-[99%] flex justify-between">
                  <div className=" h-[auto] flex justify-between w-[80%] py-4">
                    <h4 className="text-gray-600 font-semibold">
                      {data.label}
                    </h4>
                    <div className="flex flex-col gap-3">
                      {data.alternative_values.map((item: any) => (
                        <h4 key={item.id} className="text-gray-600 font-semibold">
                          {item.value}
                        </h4>
                      ))}
                    </div>
                    <h4 className="text-gray-600 font-semibold">{data.scoreWeightage}</h4>
                  </div>
                  <div className="flex gap-4 w-[10%] h-[62px]">
                    <button className="w-[20px] h-[20px]" onClick={() => handleEditIndicatorValue({ key: index })}>
                      <Image
                        src={getBasicIcon("Edit")}
                        alt=""
                        // fill={true}
                        width={30}
                        height={30}
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </button>
                    <button className="w-[20px] h-[20px]" onClick={() => delIndicatorValue({ key: index })}>
                      <Image
                        src={getBasicIcon("Delete")}
                        alt=""
                        // fill={true}
                        width={30}
                        height={30}
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Indicator;

interface props {
  data: any;
}
