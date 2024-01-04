import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavbarWithButton from "@/components/app/Navbar/NavbarWithButton";
import Backdrop from "@/components/View/Backdrop";
import Navigator from "@/utils/customNavigator";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Navigation from "@/components/app/Navigation";
import Image from "next/image";
import axios from "axios";
import { useAppDispatch } from "@/store/store";
import { setError, setSuccess } from "@/store/ai";

const dummyIndicators = [{
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
},];


const Indicator = () => {
  const [apiData, setApiData] = useState([]);
  const [valuesApiData, setValuesApiData] = useState([]);

  const [indicatorTypes, setIndicatorTypes] = useState<any>([]);

  const [currIndicatorType, setCurrIndicatorType] = useState(0);
  const [currIndicatorCategory, setCurrIndicatorCategory] = useState(0);
  const [currIndicatorValue, setCurrIndicatorValue] = useState<any>(0);
  const [editCategoryIdx, setEditCategoryIdx] = useState<any>(0);

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

  const dispatch = useAppDispatch();

  const formatData = (data: any) => {
    const newIndicators: any = [];
    data?.result?.forEach((item: any) => {
      let typeIdx = -1;
      if (newIndicators.find((it: any, index: number) => {
        typeIdx = index;
        return it?.key === item.type;
      })) {
        let categoryIdx = -1;
        if (newIndicators[typeIdx].categories?.find((it: any, index: number) => {
          categoryIdx = index;
          return it?.key === item.category;
        })) {
          if (!newIndicators[typeIdx].categories?.[categoryIdx]?.values) {
            newIndicators[typeIdx].categories[categoryIdx].values = [];
          }
          newIndicators[typeIdx].categories?.[categoryIdx]?.values?.push({
            oid: item._id,
            key: item.value,
            label: item.value,
            alternatives: item.alternative,
            scoreWeightage: parseInt(item?.score || "0"),
          });
        } else if (typeIdx !== -1) {
          newIndicators[typeIdx].categories.push({
            oid: item._id,
            key: item?.category,
            label: item?.category,
            scoreWeightage: 1,
          });
        }
      } else {
        newIndicators.push({
          oid: item._id,
          key: item?.type,
          label: item?.type,
          scoreWeightage: parseInt(item?.score || "0"),
          edit: false,
          categories: [
            {
              oid: item._id,
              key: item?.category,
              label: item?.category,
              scoreWeightage: 1,
            }
          ]
        });
      }
    });
    setIndicatorTypes(newIndicators);
  };

  const getTypes = () => {
    // if sdr/bdm user then find-all otherwise getTypesById
    axios.get(
      "https://sales365.trainright.fit/api/indicator/find-all?page=0&limit=10"
    )
      .then((res: any) => {
        formatData(res.data);
      })
      .catch((err: any) => {
        console.log('------ getTypes : error ------', err);
      });
  };

  const getTypesById = (id: any) => {
    axios.get(
      `https://sales365.trainright.fit/api/indicator/find-by-id?id=${id}`
    )
      .then((res: any) => {
        console.log('============ indicator : data ============', res);
      })
      .catch((err: any) => {

      });
  };

  const getValues = () => {
    axios.get(
      "https://sales365.trainright.fit/api/indicator/getIndicatorValues?userId=65782fb3cae5f857818476dd"
    )
      .then((res: any) => {
        console.log('============ indicator : data ============', res);
      })
      .catch((err: any) => {

      });
  };

  const deleteIndicatorById = (id: any, type: "INDICATOR" | "CATEGORY" | "VALUE" | any) => {
    axios.delete(
      `https://sales365.trainright.fit/api/indicator/delete-by-id?id=${id}`
    )
      .then((res: any) => {
        if (type === "INDICATOR") {
          setIndicatorSetting(false);
        } else if (type === "CATEGORY") {
          setNewIndicatorCategory({ open: false, payload: {} });
          setIndicatorCategoryScoring({ open: false, payload: {} });
        } else if (type === "VALUE") {
          setNewIndicatorValue({ open: false, payload: {} });
          setIndicatorValueScoring({ open: false, payload: {} });
        }
        setDelPopup({ open: false, payload: {} });
        dispatch(setSuccess({
          show: true,
          success: `Deleted ${type.toLowerCase()} successfully.`,
        }));
        getTypes();
      })
      .catch((err: any) => {
        dispatch(setError({
          show: true,
          error: `Error Occured`,
        }));
      });
  };

  const updateIndicator = (payload: any, type: "INDICATOR" | "CATEGORY" | "VALUE") => {
    axios.put(
      "https://sales365.trainright.fit/api/indicator/update", payload
    )
      .then((res: any) => {
        console.log('============ updateIndicator : res ============', res);
        if (type === "INDICATOR") {
          // setIndicatorSetting(false);
        } else if (type === "CATEGORY") {
          setIndicatorCategoryScoring({ open: false, payload: {} });
          setEditIndicatorCategory({ open: false, payload: {} });
        } else if (type === "VALUE") {
          setEditIndicatorValue({ open: false, payload: {} });
        }
        dispatch(setSuccess({
          show: true,
          success: `Successfully edited ${type.toLowerCase()}.`,
        }));
        getTypes();
      })
      .catch((err: any) => {
        dispatch(setError({
          show: true,
          error: "Error Occured!",
        }));
      });
  };

  const createIndicator = (payload: any, type: "INDICATOR" | "CATEGORY" | "VALUE" = "INDICATOR") => {
    axios.post(
      "https://sales365.trainright.fit/api/indicator/create", payload
    )
      .then((res: any) => {
        if (type === "INDICATOR") {
          setIndicatorSetting(false);
        } else if (type === "CATEGORY") {
          setNewIndicatorCategory({ open: false, payload: {} });
          setIndicatorCategoryScoring({ open: false, payload: {} });
        } else if (type === "VALUE") {
          setNewIndicatorValue({ open: false, payload: {} });
          setIndicatorValueScoring({ open: false, payload: {} });
        }
        dispatch(setSuccess({
          show: true,
          success: `New ${type.toLowerCase()} created.`,
        }));
        getTypes();
      })
      .catch((err: any) => {
        dispatch(setError({
          show: true,
          error: "Error Occured!",
        }));
      });
  };

  const handleNewIndicatorType = () => {
    indicatorTypes?.forEach((indicatorType: any) => {
      if (indicatorType?.new === true) {
        createIndicator({
          type: indicatorType.label,
          category: "",
          value: "",
          alternative: "",
          score: indicatorType.scoreWeightage,
          timeRestriction: "",
          comparisonType: "",
          speaker: "",
        }, "INDICATOR");
      } else if (indicatorType?.edit) {
        updateIndicator({
          _id: indicatorType.oid,
          type: indicatorType.label,
          category: indicatorType.category,
          value: indicatorType.value,
          alternative: indicatorType.alternatives,
          score: indicatorType.scoreWeightage,
          timeRestriction: "",
          comparisonType: "",
          speaker: "",
        }, "INDICATOR");
      }
    });
  };

  const handleNewIndicatorCategory = () => {
    createIndicator({
      type: indicatorTypes?.[currIndicatorType]?.label,
      category: newIndicatorCategory?.payload?.category,
      value: newIndicatorCategory?.payload?.value,
      alternative: newIndicatorCategory?.payload?.value,
      score: "",
      timeRestriction: "",
      comparisonType: "",
      speaker: "",
    }, "CATEGORY");
  };

  const handleNewIndicatorValue = () => {
    createIndicator({
      type: indicatorTypes?.[currIndicatorType]?.label,
      category: indicatorTypes?.[currIndicatorType]?.categories?.[currIndicatorCategory]?.label,
      value: newIndicatorValue?.payload?.value,
      alternative: newIndicatorValue?.payload?.alternatives,
      score: "",
      timeRestriction: "",
      comparisonType: "",
      speaker: "",
    }, "VALUE");
  };

  const setNewIndicatorTypeData = (idx: number, key: string, value: string) => {
    setIndicatorTypes((currIndicatorTypes: any) => {
      return currIndicatorTypes?.map((currIndicator: any, index: number) => {
        if (index === idx) {
          if (key === "score") {
            return {
              ...currIndicator,
              scoreWeightage: parseInt(value || "0"),
            };
          } else {
            return {
              ...currIndicator,
              label: value,
              key: value,
            };
          }
        } else {
          return currIndicator;
        }
      });
    });
  };

  const saveEditedValue = () => {
    updateIndicator({
      _id: indicatorTypes?.[currIndicatorType]?.categories?.[currIndicatorCategory]?.values?.[editIndicatorValue?.payload?.key]?.oid,
      type: indicatorTypes?.[currIndicatorType]?.label,
      category: indicatorTypes?.[currIndicatorType]?.categories?.[currIndicatorCategory]?.label,
      value: editIndicatorValue?.payload?.value,
      alternative: editIndicatorValue?.payload?.alternatives,
      score: indicatorTypes?.[currIndicatorType]?.scoreWeightage || "0",
      timeRestriction: "",
      comparisonType: "",
      speaker: "",
    }, "VALUE");
  };

  const saveEditedCategoryScoring = () => {
    indicatorTypes?.[currIndicatorType]?.categories?.forEach((categoryItem: any, index: number) => {
      if (categoryItem.edit == true && !categoryItem?.new) {
        updateIndicator({
          _id: categoryItem?.oid,
          category: categoryItem?.label,
          // type: indicatorTypes?.[currIndicatorType]?.label,
          // score: indicatorTypes?.[currIndicatorType]?.scoreWeightage || "0",
          // value: editIndicatorValue?.payload?.value,
          // alternative: editIndicatorValue?.payload?.alternatives,
          // timeRestriction: "",
          // comparisonType: "",
          // speaker: "",
        }, "CATEGORY");
      } else if (categoryItem?.new) {
        createIndicator({
          type: indicatorTypes?.[currIndicatorType]?.label,
          score: indicatorTypes?.[currIndicatorType]?.scoreWeightage,
          category: categoryItem?.label,
        }, "CATEGORY");
      }
    });
  };

  const saveEditedValueScoring = () => {
    indicatorTypes?.[currIndicatorType]?.categories?.[currIndicatorCategory]?.values?.forEach((valueItem: any, index: number) => {
      if (valueItem.new === true) {
        createIndicator({
          type: indicatorTypes?.[currIndicatorType]?.label,
          category: indicatorTypes?.[currIndicatorType]?.categories?.[currIndicatorCategory]?.label,
          value: valueItem?.label,
          alternative: "",
          score: indicatorTypes?.[currIndicatorType]?.scoreWeightage,
          timeRestriction: "",
          comparisonType: "",
          speaker: "",
        }, "VALUE");
      } else if (valueItem.edit == true && !valueItem?.new) {
        updateIndicator({
          _id: valueItem?.oid,
          category: valueItem?.label,
          value: valueItem.label
          // type: indicatorTypes?.[currIndicatorType]?.label,
          // score: indicatorTypes?.[currIndicatorType]?.scoreWeightage || "0",
          // value: editIndicatorValue?.payload?.value,
          // alternative: editIndicatorValue?.payload?.alternatives,
          // timeRestriction: "",
          // comparisonType: "",
          // speaker: "",
        }, "VALUE");
      }
    });
  };

  const handleDeleteSubmit = () => {
    let id = '';
    const type = delPopup?.payload?.type;
    if (type === "TYPE") {
      id = indicatorTypes?.[delPopup?.payload?.key]?.oid;
    } else if (type === "CATEGORY") {
      id = indicatorTypes?.[currIndicatorType]?.categories?.[delPopup?.payload?.key]?.oid;
    } else if (type === "VALUE") {
      id = indicatorTypes?.[currIndicatorType]?.categories?.[currIndicatorCategory]?.values?.[delPopup?.payload?.key]?.oid;
    }
    deleteIndicatorById(id, delPopup?.payload?.type);
  };


  useEffect(() => {
    getTypes();
  }, []);

  useEffect(() => {
    setCurrIndicatorCategory(0);
  }, [currIndicatorType]);
  //   const handleBeforeHistoryChange = () => {
  //     router.events.on("beforeHistoryChange", handleBeforeHistoryChange);
  //     router.beforePopState(() => {
  //       router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
  //       return true;
  //     });
  //   };

  //   handleBeforeHistoryChange();

  //   return () => {
  //     router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
  //   };
  // }, []);

  const handleIndicatorSettingClick = () => {
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
      return indicatorTypes?.[currIndicatorType]?.categories?.[currIndicatorCategory]?.values?.reduce((acc: number, item: any) => {
        return acc + item?.scoreWeightage;
      }, 0);
    } else {
      return indicatorTypes?.reduce((acc: number, item: any) => {
        return acc + item?.scoreWeightage;
      }, 0);
    }
  };

  const addNewIndicatorType = () => {
    setIndicatorTypes([...indicatorTypes, { key: "", label: "", scoreWeightage: 0, edit: true, categories: [], new: true }]);
  };

  const addNewIndicatorCategory = () => {
    setIndicatorTypes((currTypes: any) => {
      return currTypes?.map((typeItem: any, typeIdx: number) => {
        if (typeIdx === currIndicatorType) {
          return {
            ...typeItem,
            categories: [...typeItem.categories, { key: "", label: "", scoreWeightage: 0, edit: true, new: true }]
          };
        } else {
          return typeItem;
        }
      });
    });
  };

  const addNewIndicatorValue = () => {
    setIndicatorTypes((currTypes: any) => {
      return currTypes?.map((typeItem: any, typeIdx: any) => {
        if (typeIdx === currIndicatorType) {
          return {
            ...typeItem,
            categories: typeItem?.categories?.map((catItem: any, catIdx: number) => {
              if (catIdx === currIndicatorCategory) {
                const newCatItem = { ...catItem };
                if (!catItem.values) newCatItem.values = [];
                newCatItem.values.push({
                  key: "",
                  label: "",
                  new: true,
                  edit: true,
                  scoreWeightage: 0,
                  alternatives: "",
                });
                return newCatItem;
              } else {
                return catItem;
              }
            }),
          }
        } else {
          return typeItem;
        }
      });
    });
  };

  const handleEditIndicatorCategoryData = (payload: any) => {
    const { key, value } = payload;
    if (value) {
      setIndicatorTypes((currIndicatorTypes: any) => {
        return currIndicatorTypes?.map((currTypeItem: any, typeIdx: number) => {
          if (typeIdx === currIndicatorType) {
            return {
              ...currTypeItem,
              categories: currTypeItem.categories?.map((categoryItem: any, categoryIdx: number) => {
                if (categoryIdx === key) {
                  return {
                    ...categoryItem,
                    edit: true,
                    key: value,
                    label: value
                  }
                } else {
                  return categoryItem;
                }
              }),
            }
          } else {
            return currTypeItem;
          }
        });
      });
    } else {
      setIndicatorTypes((currIndicatorTypes: any) => {
        return currIndicatorTypes?.map((currTypeItem: any, typeIdx: number) => {
          if (typeIdx === currIndicatorType) {
            return {
              ...currTypeItem,
              categories: currTypeItem.categories?.map((categoryItem: any, categoryIdx: number) => {
                if (categoryIdx === key) {
                  return {
                    ...categoryItem,
                    edit: true,
                  }
                } else {
                  return categoryItem;
                }
              }),
            }
          } else {
            return currTypeItem;
          }
        });
      });
    }
  };

  const handleEditValueData = (payload: any) => {
    const { key, value } = payload;
    if (value) {
      setIndicatorTypes((currIndicatorTypes: any) => {
        return currIndicatorTypes?.map((currTypeItem: any, typeIdx: number) => {
          if (typeIdx === currIndicatorType) {
            return {
              ...currTypeItem,
              categories: currTypeItem.categories?.map((categoryItem: any, categoryIdx: number) => {
                if (categoryIdx === currIndicatorCategory) {

                  return {
                    ...categoryItem,
                    values: categoryItem?.values?.map((valItem: any, valIdx: number) => {
                      if (valIdx === key) {
                        return {
                          ...valItem,
                          key: value,
                          label: value,
                        }
                      } else {
                        return valItem;
                      }
                    }),
                  }
                } else {
                  return categoryItem;
                }
              }),
            }
          } else {
            return currTypeItem;
          }
        });
      });
    } else {

    }
  };

  const handleEditIndicatorType = (payload: any) => {
    const { key } = payload;
    setIndicatorTypes((currTypes: any) => {
      return currTypes?.map((typeItem: any, typeIdx: number) => {
        if (typeIdx === key) {
          return {
            ...typeItem,
            edit: true,
          }
        } else {
          return typeItem;
        }
      });
    });
  };

  const handleEditIndicatorValue = (payload: any) => {
    const { key } = payload;
    setCurrIndicatorValue(key);
    setEditIndicatorValue({
      open: true, payload: {
        key: key,
        value: indicatorTypes?.[currIndicatorType]?.categories?.[currIndicatorCategory]?.values?.[key]?.key,
        alternatives: indicatorTypes?.[currIndicatorType]?.categories?.[currIndicatorCategory]?.values?.[key]?.alternatives,
      }
    });
  };

  const handleDeleteIndicatorType = (payload: any) => {
    const { key } = payload;
    setDelPopup({
      open: true, payload: {
        key: key,
        type: "TYPE",
        label: indicatorTypes?.[key]?.key
      }
    });
  };

  const handleDeleteIndicatorCategory = (payload: any) => {
    const { key } = payload;
    setDelPopup({
      open: true, payload: {
        key: key,
        type: "CATEGORY",
        label: indicatorTypes?.[currIndicatorType]?.categories?.[key]?.key
      }
    });
  };

  const handleDeleteIndicatorValue = (payload: any) => {
    const { key } = payload;
    setCurrIndicatorValue(key);
    setDelPopup({
      open: true, payload: {
        key: key,
        type: "VALUE",
        label: indicatorTypes?.[currIndicatorType]?.categories?.[currIndicatorCategory]?.values?.[key]?.key
      }
    });
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
                <input type="text" value={indicatorType?.label} className={`bg-white ${indicatorType?.edit ? "border-2 border-black-900" : ""}`} disabled={!indicatorType?.edit} onInput={(e: any) => setNewIndicatorTypeData(index, "type", e.target.value)} />
              </td>
              <td className="">
                {!indicatorType?.edit && (
                  <button className="" onClick={() => handleEditIndicatorType({ key: index })}>
                    <img src={getBasicIcon("Edit")} alt="Edit" className="" />
                  </button>
                )}
              </td>
              <td>
                <input type="text" className={`bg-white w-[80px] ${indicatorType?.edit ? "border-2 border-black-900" : ""}`} value={indicatorType?.scoreWeightage} disabled={!indicatorType?.edit} onInput={(e: any) => setNewIndicatorTypeData(index, "score", e.target.value)} />
              </td>
              <td>
                <button className="" onClick={() => handleDeleteIndicatorType({ key: index })}>
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
              <button className="" onClick={handleNewIndicatorType}>Save</button>
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
                    <input type="text" value={categoryItem?.label} className={`bg-white ${categoryItem?.edit ? "border-2 border-black-900" : ""}`} disabled={!categoryItem?.edit} onInput={(e: any) => handleEditIndicatorCategoryData({ key: index, value: e.target.value })} />
                  </td>
                  <td className="">
                    {!categoryItem?.edit && (
                      <button className="" onClick={() => handleEditIndicatorCategoryData({ key: index })}>
                        <img src={getBasicIcon("Edit")} alt="Edit" className="" />
                      </button>
                    )}
                  </td>
                  <td>
                    <input type="text" className={`bg-white w-[80px] ${categoryItem?.edit ? "border-2 border-black-900" : ""}`} value={categoryItem?.scoreWeightage} disabled={!categoryItem?.edit} />
                  </td>
                  <td>
                    <button className="" onClick={() => handleDeleteIndicatorCategory({ key: index })}>
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
              <button className="" onClick={() => saveEditedCategoryScoring()}>Save</button>
              <button className="" onClick={() => setIndicatorCategoryScoring({ open: false })}>Cancel</button>
            </div>
          </div>
        </Backdrop>
      )}
      {indicatorValueScoring.open && (
        <Backdrop>
          <div className="w-[100%] text-black px-[30px] pt-[20px]">
            <h2 className="text-[24px] font-medium">Indicator Value Scoring</h2>
            <table className="w-[100%]">
              <tr>
                <th className="text-left">Indicator Value</th>
                <th className="text-left"></th>
                <th className="text-left">Score Weightage<br />(out of 100)</th>
                <th className="text-left"></th>
              </tr>
              {indicatorTypes?.[currIndicatorType]?.categories?.[currIndicatorCategory]?.values?.map((valueItem: any, index: number) => (
                <tr key={index}>
                  <td>
                    <input type="text" value={valueItem?.label} className={`bg-white ${valueItem?.edit ? "border-2 border-black-900" : ""}`} disabled={!valueItem?.edit}
                      onInput={(e: any) => handleEditValueData({ key: index, value: e.target.value })}
                    />
                  </td>
                  <td className="">
                    {!valueItem?.edit && (
                      <button className="" onClick={() => handleEditIndicatorValue({ key: index })}>
                        <img src={getBasicIcon("Edit")} alt="Edit" className="" />
                      </button>
                    )}
                  </td>
                  <td>
                    <input type="text" className={`bg-white w-[80px] ${valueItem?.edit ? "border-2 border-black-900" : ""}`} value={valueItem?.scoreWeightage} disabled={!valueItem?.edit} />
                  </td>
                  <td>
                    <button className="" onClick={() => handleDeleteIndicatorValue({ key: index })}>
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
              <button className="" onClick={() => saveEditedValueScoring()}>Save</button>
              <button className="" onClick={() => setIndicatorValueScoring({ open: false })}>Cancel</button>
            </div>
          </div>
        </Backdrop>
      )}
      {delPopup.open && (
        <Backdrop>
          <div className="p-[40px] text-black">
            <h2 className="">Are you sure you want to delete {`"${delPopup?.payload?.label}"`}?</h2>
            <p className="text-black text-[12px] ">
              <span className="font-bold">Note: </span>
              <span>Associated score will also be deleted and will be equally distributed for other indicator types.</span>
            </p>
            <div className="text-black w-[100%] flex justify-end gap-[20px]">
              <button className="" onClick={cancelDelete}>Cancel</button>
              <button className="" onClick={handleDeleteSubmit}>Delete</button>
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
                <input type="text" className="bg-white border-[2px]" id="iv" value={editIndicatorValue?.payload?.value} onInput={(e: any) => setEditIndicatorValue({ open: true, payload: { ...editIndicatorValue.payload, value: e.target.value } })} />
              </div>
              <div className="flex flex-col mt-[14px]">
                <label htmlFor="avftiv" className="">Alternate Values for the Indicator Value</label>
                <input type="text" className="bg-white border-[2px]" id="avftiv" placeholder="Enter comma-separated values" value={editIndicatorValue?.payload?.alternatives} onInput={(e: any) => setEditIndicatorValue({ open: true, payload: { ...editIndicatorValue.payload, alternatives: e.target.value } })} />
              </div>
            </div>
            <div className="flex w-[100%] justify-end mt-[30px]">
              <button className="" onClick={saveEditedValue}>Save</button>
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
                <input type="text" className="bg-white border-[2px]" id="iv" value={indicatorTypes?.[currIndicatorType]?.categories?.[currIndicatorCategory]?.label} onInput={(e: any) => handleEditIndicatorCategoryData({ key: currIndicatorCategory, value: e.target.value })} />
              </div>
            </div>
            <div className="flex w-[100%] justify-end mt-[30px]">
              <button className="" onClick={() => saveEditedCategoryScoring()}>Save</button>
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
                <input type="text" className="bg-white border-[2px]" id="iv" placeholder="Name" value={newIndicatorValue?.payload?.value} onInput={(e: any) => setNewIndicatorValue({ open: true, payload: { ...newIndicatorValue.payload, value: e.target.value } })} />
              </div>
              <div className="flex flex-col mt-[14px]">
                <label htmlFor="avftiv" className="">Alternate Values for the Indicator Value</label>
                <input type="text" className="bg-white border-[2px]" id="avftiv" placeholder="Enter comma-separated values" value={newIndicatorValue?.payload?.category} onInput={(e: any) => setNewIndicatorValue({ open: true, payload: { ...newIndicatorValue.payload, alternatives: e.target.value } })} />
              </div>
            </div>
            <div className="flex w-[100%] justify-end mt-[30px]">
              <button className="" onClick={handleNewIndicatorValue}>Create</button>
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
                <input type="text" className="bg-white border-[2px]" id="iv" value={newIndicatorCategory?.payload?.category} onInput={(e: any) => setNewIndicatorCategory({ open: true, payload: { ...newIndicatorCategory.payload, category: e.target.value } })} placeholder="Name" />
              </div>
              <div className="flex flex-col mt-[14px]">
                <label htmlFor="iv" className="">Add New Indicator Value</label>
                <input type="text" className="bg-white border-[2px]" id="iv" value={newIndicatorCategory?.payload?.value} onInput={(e: any) => setNewIndicatorCategory({ open: true, payload: { ...newIndicatorCategory.payload, value: e.target.value } })} placeholder="Name" />
              </div>
              <div className="flex flex-col mt-[14px]">
                <label htmlFor="iv" className="">Alternatives</label>
                <input type="text" className="bg-white border-[2px]" id="iv" value={newIndicatorCategory?.payload?.alternatives} onInput={(e: any) => setNewIndicatorCategory({ open: true, payload: { ...newIndicatorCategory.payload, alternatives: e.target.value } })} placeholder="Enter Comma-separated values" />
              </div>
            </div>
            <div className="flex w-[100%] justify-end mt-[30px]">
              <button className="" onClick={handleNewIndicatorCategory} >Create</button>
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
            title={indicatorTypes?.[currIndicatorType]?.categories?.[currIndicatorCategory]?.label}
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
            leftBtns={[
              {
                icon: "Edit",
                dropdown: false,
                id: 1,
                dark: true,
                list: [],
                onClick1: () => {
                  handleEditIndicatorCategoryData({ key: currIndicatorCategory });
                  setEditIndicatorCategory({
                    open: true,
                    payload: {
                      value: indicatorTypes?.[currIndicatorType]?.categories?.[currIndicatorCategory]?.label
                    }
                  });
                },
              },
              {
                icon: "Delete",
                dropdown: false,
                id: 2,
                dark: true,
                list: [],
                onClick1: () => handleDeleteIndicatorCategory({ key: currIndicatorCategory }),
              }
            ]}
          />
          <div>
            <div className="flex justify-between w-[80%]">
              <h4 className="text-gray-600 font-semibold">Indicator Value</h4>
              <h4 className="text-gray-600 font-semibold">Alternative Values</h4>
              <h4 className="text-gray-600 font-semibold">Score</h4>
            </div>
            <hr className="mt-2" />

            {indicatorTypes?.[currIndicatorType]?.categories?.[currIndicatorCategory]?.values?.map((data: any, index: number) => (
              <div key={index}>
                <div className=" w-[99%] flex justify-between">
                  <div className=" h-[auto] flex justify-between w-[80%] py-4">
                    <h4 className="text-gray-600 font-semibold">
                      {data?.label}
                    </h4>
                    <div className="flex flex-col gap-3">
                      {formatString(data?.alternatives)?.map((item: any) => (
                        <h4 key={item.id} className="text-gray-600 font-semibold">
                          {item}
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
                    <button className="w-[20px] h-[20px]" onClick={() => handleDeleteIndicatorValue({ key: index })}>
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
