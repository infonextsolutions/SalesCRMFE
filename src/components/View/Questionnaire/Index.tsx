import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React, { useState } from "react";

const AddText = ({ top, title, width, change,index }: any) => {
  return (
    <div
      className="w-[100%] "
      style={{
        width: width ? width : "100%",
        marginTop: top,
      }}
    >
      {/* <input
      placeholder="Write short answer"
        onChange={(e: any) => {
          change(index,e.target.value);
        }}
        type="text"
        className="w-[100%] bg-white text-[#8a9099] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
      /> */}
    </div>
  );
};

const TextBox = ({index,question,answer}:any) => {
  return (
    <>
      <p className="text-[#000] text-[16px] font-medium">
        Q{index+1}.  {question} 
      </p>
      <input
        name=""
        id=""
        className="w-[100%] h-[40px] outline-none mt-[16px] bg-[#fff] border-[#E8E9EB] border-[2px] rounded-xl px-[10px] font-medium py-[1px]"
        placeholder="Write your Answer"
        value={answer}
      />
    </>
  );
};
const TextBox2 = ({index,question,answer}:any) => {
  return (
    <>
       <p className="text-[#000] text-[16px] font-medium">
        Q{index+1}.  {question} 
      </p>
      <textarea
        name=""
        id=""
        className="w-[100%] h-[150
          px] outline-none mt-[16px] bg-[#fff] border-[#E8E9EB] border-[2px] rounded-xl px-[10px] font-medium py-[10px] px-[13px]"
        placeholder="Write your Answer" 
        value={answer}
      />
    </>
  );
};
const AddTextBox = ({index,change}:any) => {
  return (
    <>
      
      {/* <textarea
        name=""
        id=""
        className="w-[100%] h-[90px] outline-none mt-[16px] bg-[#fff] border-[#E8E9EB] border-[2px] rounded-xl px-[10px] font-medium py-[10px] px-[13px]"
        placeholder="Write your Answer"
        onChange={(e:any)=>change(index,e.target.value)}
      ></textarea> */}
    </>
  );
};

interface Question {
  id: number;
  questionText: string;
  answerType: string;
}

const NewQuestions: React.FC = () => {
  

  return (
    <div>
      
    </div>
  );
};


const Dropdown = ({index,question,option}:any) => {
  

  return (
    <>
      <p className="text-[#000] text-[16px] font-medium">
        Q{index+1}. {question}
      </p>
      <div className="w-[100%] px-[10px] border-[1px] mt-[10px]  rounded-xl border-[#ccc]">
        <select
          id="countries"
          className="outline-none cursor-pointer capitalize text-gray-900 py-[10px] text-sm tracking-wide text-[#3F434A] font-medium  block w-full bg-white"
        >
          {option &&  option.map((item: any, i: any) => {
            return (
              <option value={item.value} key={i} selected={item.selected}>
                {item.title}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

interface DropdownOption {
  value: number | null;
  selected: boolean;
  title: string;
}

const DropDownEditable = ({ind,setOption}:any) => {
  const [list, setList] = useState<DropdownOption[]>([
    { value: 1, selected: true, title: "" },
  ]);

  const addDropdownOption = () => {
    const lastOption = list[list.length - 1];

    // Check if the last option's title is not empty
    if (lastOption.title.trim() !== '') {
      setList((prevList) => [
        ...prevList,
        { value: null, selected: false, title: '' },
      ]);
    }
  };

  const deleteDropdownOption = (index: number) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const updateOption = (index: number, value: string) => {
    setList((prevList) => {
      const updatedList = [...prevList];
      updatedList[index].title = value;
      setOption(ind,list);
      return updatedList;
    });
  };

  return (
    <>
      <div className="w-[100%] px-[10px] border-[1px] mt-[10px] rounded-xl border-[#ccc]">
        <select
          id="countries"
          className="outline-none cursor-pointer capitalize text-gray-900 py-[10px] text-sm tracking-wide text-[#3F434A] font-medium block w-full bg-white"
        >
          {list.map((item, index) => (
            <option
              value={item.value?.toString()} // Convert value to string
              key={index}
              selected={item.selected}
              
            >
              {item.title}
            </option>
          ))}
        </select>
      </div>
      
      {/* {list.length > 1 && (
        <button
          className="text-red-500 px-2 py-1 ml-2"
          onClick={() => deleteDropdownOption(0)}
        >
          Delete Option
        </button>
      )} */}
      {list.map((item, index) => (
        <div key={index} className="flex mt-2">
          <input
            placeholder="write option"
            type="text"
            value={item.title}
            className="bg-white flex h-[40px] w-[360px] p-3 rounded-lg"
            onChange={(e) => updateOption(index, e.target.value)}
          />
          {index > 0 && (
            <button
              className="text-red-500 px-2 py-1 ml-2"
              onClick={() => deleteDropdownOption(index)}
            >
             <Image
            src={getBasicIcon("Delete")}
            className={`svg-black mt-[1px]`}
            alt=""
            width={15}
            height={15}
            style={{
              objectFit: "contain",
            }}
          />
            </button>
          )}
        </div>
      ))}
      <button className="text-[#304FFD] px-2 py-1 mt-2" onClick={addDropdownOption}>
        Add Option
      </button>
    </>
  );
};


const Mcq = ({index,question,option}:any) => {
  
  const [selected, setSelected] = useState(null);
  return (
    <>
      <p className="text-[#000] text-[16px] font-medium">
        Q{index+1}. {question}
      </p>
      <div className="w-[100%] flex flex-col">
        {option && option.map((item: any, i: any) => {
          return (
            <div key={i} className="flex items-center mt-[13px]">
              <div
                className="w-[16px] flex items-center justify-center overflow-hidden p-[2px] h-[16px] rounded-[50%] bg-[#F8F8F8] border-[#e8e9eb] border-[2px] cursor-pointer    "
                onClick={() => {
                  setSelected(i);
                }}
              >
                {selected === i && (
                  <div className="w-[8px] h-[8px] shrink-0 bg-[#304ffd] rounded-[50%]"></div>
                )}
              </div>
              <p className="text-[14px] text-[#000] leading-[14px] font-medium ml-[15px] mt-[-3px]">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};




const McqEditable = ({ind,setOption}:any) => {
  const [list, setList] = useState([{ title: "" }]);
  const [selected, setSelected] = useState<number | null>(null);

  const addOption = () => {
    setList((prevList) => [...prevList, { title: "" }]);
  };

  const deleteOption = (index: number) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const updateOption = (index: number, value: string) => {
    
    setList((prevList) => {
      const updatedList = [...prevList];
      updatedList[index].title = value;
      setOption(ind,list)
      return updatedList;
    }); 
  };
  
  return (
    <>
      
      <div className="w-[100%] flex flex-col">
        {list.map((item, index) => (
          <div key={index} className="flex items-center mt-[13px]">
            <div
              className="w-[16px] flex items-center justify-center overflow-hidden p-[2px] h-[16px] rounded-[50%] bg-[#E8E9EB] border-[#e8e9eb] border-[2px] cursor-pointer"
              onClick={() => {
                setSelected(index);
              }}
            >
              {selected === index && (
                <div className="w-[8px] h-[8px] shrink-0 bg-[#304ffd] rounded-[50%]"></div>
              )}
            </div>
            <input
              placeholder="write option"
              type="text"
              className="text-md text-[#000] bg-white rounded-lg p-4 leading-[14px] font-medium ml-[15px] mt-[-3px] w-[360px] h-[40px]"
              value={item.title}
              onChange={(e) => updateOption(index, e.target.value)}
            />
            {list.length > 1 && (
              <button
                className="ml-2"
                onClick={() => deleteOption(index)}
              >
               <Image
            src={getBasicIcon("Delete")}
            className={`svg-black mt-[1px]`}
            alt=""
            width={15}
            height={15}
            style={{
              objectFit: "contain",
            }}
          />
              </button>
            )}
          </div>
        ))}
      </div>
      <button className=" text-[#304FFD] px-2 py-1 mt-2" onClick={addOption}>
        Add Option
      </button>
    </>
  );
};
interface Option {
  title: string;
  selected: boolean;
}

const CheckboxEdit = ({ind,setOption}:any) => {
  const [options, setOptions] = useState<Option[]>([
    { title: "", selected: false }
  ]);

  const addOption = () => {
    setOptions((prevOptions) => [
      ...prevOptions,
      { title: "", selected: false }
    ]);
  };

  const deleteOption = (index: number) => {
    setOptions((prevOptions) =>
      prevOptions.filter((_, i) => i !== index)
    );
  };

  const updateOption = (index: number, value: string) => {
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index] = { ...updatedOptions[index], title: value };
      setOption(ind,updatedOptions)
      return updatedOptions;
    });
  };

  const toggleOption = (index: number) => {
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index] = {
        ...updatedOptions[index],
        selected: !updatedOptions[index].selected
      };
      return updatedOptions;
    });
  };

  return (
    <>
      <div className="w-full flex flex-col">
        { options.map((option, index) => (
          <div key={index} className="flex items-center mt-3">
            <input
              type="checkbox"
              className="mr-2 bg-white"
              checked={option.selected}
              onChange={() => toggleOption(index)}
            />
            <input
              type="text"
              className="text-md text-black bg-white h-[40px] rounded-lg p-2 leading-4 font-medium ml-2"
              value={option.title}
              onChange={(e) => updateOption(index, e.target.value)}
              placeholder="write option"
            />
            {options.length > 1 && (
              <button
                className="t ml-2"
                onClick={() => deleteOption(index)}
              >
               <Image
            src={getBasicIcon("Delete")}
            className={`svg-black mt-[1px]`}
            alt=""
            width={15}
            height={15}
            style={{
              objectFit: "contain",
            }}
          />
              </button>
            )}
          </div>
        ))}
      </div>
      <button className="text-blue-500 px-2 py-1 mt-2" onClick={addOption}>
        Add Option
      </button>
    </>
  );
};
const Checkbox = ({index,question,option}:any) => {
  const [options, setOptions] = useState<Option[]>([
    { title: "", selected: false }
  ]);

   

  

  const toggleOption = (index: number) => {
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index] = {
        ...updatedOptions[index],
        selected: !updatedOptions[index].selected
      };
      return updatedOptions;
    });
  };

  return (
    <>
     <p className="text-[#000] text-[16px] font-medium">
        Q{index+1}. {question}
      </p>
      <div className="w-full flex flex-col">

        {option && option.map((item:any, index:any) => (
          <div key={index} className="flex items-center mt-3">
            <input
              type="checkbox"
              className="mr-2 bg-white"
              checked={item.selected}
              onChange={() => toggleOption(index)}
            />
            <p className="text-black">{item.title}</p>
             
          </div>
        ))}
      </div>
      
    </>
  );
};




const Questionnaire = () => {
  


const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null);
const [questionList, setQuestionList] = useState<any[]>([{}]);
// const [questionList, setQuestionList] = useState<any[]>([{}]);
const [title,setTitle] = useState("")

  const addQuestion = () => {
  setSelectedQuestionIndex(null);
  const newQuestion = { question: '', answerType: '',answer:'',option:[] };
  setQuestionList([...questionList, newQuestion]);
};


  const updateQuestion = (index: number, question: string) => {
  setSelectedQuestionIndex(index);
  const updatedQuestions = [...questionList];
  updatedQuestions[index].question = question;
  setQuestionList(updatedQuestions);
};


  const updateAnswerType = (index: number, answerType: string) => {
    const updatedQuestions = [...questionList];
    updatedQuestions[index].answerType = answerType;
    setQuestionList(updatedQuestions);
  };
  
  const setOption = (index:number,option:any) =>{
    const updatedQuestions = [...questionList];
    updatedQuestions[index].option=option;
    setQuestionList(updatedQuestions);
    
  }
  
  const updateAnswer = (index: number, answer: any) => {
    const updatedQuestions = [...questionList];
    updatedQuestions[index].answer = answer;
    setQuestionList(updatedQuestions);
  };
  

  const deleteQuestion = (index: number) => {
  setSelectedQuestionIndex(null);
  const updatedQuestions = [...questionList];
  updatedQuestions.splice(index, 1);
  setQuestionList(updatedQuestions);
};
// Add this line to declare the questionText state variable
 // Add this line to declare the questionText state variable








  const [isModalOpen, setIsModalOpen] = useState(false);
   const list: any = [
    { title: "Project A" },
    { title: "Project B" },
    { title: "Project C" },
    { title: "other" },
  ];
   const list2: any = [
    { title: "Option 1" },
    { title: "Add option" },
   
  ];
    const [selectedQ3, setSelectedQ3] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  // const [selected, setSelected] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    // Handle saving the form data
    console.log(questionList);
    closeModal(); // Close the modal after saving
  };
 

  return (
    <div className="w-[100%] min-h-[50vh]">
      <div className="flex items-center justify-between">
        <h1 className="text-[32px] font-medium text-[#3F434A]">{title}</h1>
        <button
          className="ml-auto items-center flex bg-renal-blue pl-[11px] rounded-xl pr-[11px] py-[8px]"
          onClick={openModal}
        >
          <Image
            src={getBasicIcon("Edit")}
            className={`svg-white mt-[1px]`}
            alt=""
            width={15}
            height={15}
            style={{
              objectFit: "contain",
            }}
          />
          <p className="whitespace-nowrap font-medium  text-[14px] pl-[5px] pr-[5px] text-[#ffffff]">
            Edit
          </p>
        </button>
      </div>
      {/* {questions.map((item: any, i: any) => {
        return (
          <div className="w-[100%] my-[20px]" key={i}>
            {item === 0 && <TextBox  />}
            {item === 1 && <Dropdown />}
            {item === 2 && <Mcq />}
            
            {item === 3 && <NewQuestions/>}

          </div>
        );
      })} */}
      {
        questionList.map((questionItem:any,i:any)=>{
          return(
            <div className="w-[100%] my-[20px]" key={i}>
              {questionItem.answerType === 'Short Answer' && <TextBox index={i} question={questionItem.question} answer={questionItem.answer}/>}
              {questionItem.answerType === 'Long Answer' && <TextBox2 index={i} question={questionItem.question} answer={questionItem.answer}/>}
              {questionItem.answerType === 'Multiple Choice' && <Mcq index={i} question={questionItem.question} option={questionItem.option} />}
              {questionItem.answerType === 'Dropdown' && <Dropdown index={i} question={questionItem.question} option={questionItem.option}/>}
              {questionItem.answerType === 'Checkbox' && <Checkbox index={i} question={questionItem.question} option={questionItem.option}/>}
            </div>
          )
        })
      }

      {
        isModalOpen && (
        <div className="fixed inset-0 flex justify-center bg-gray-900 bg-opacity-50 overflow-y-scroll py-14">
          <div className="bg-white rounded-xl p-6 w-[675px] h-fit relative top-15">
            <div className="flex justify-between">
              <h1 className="text-[#222] text-4xl font-semibold mb-4">Edit Questionnaire</h1>
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            </div>
            
            
              {/* title  */}
             <div className="w-[100%]">
               <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
                  Title
                </p>
                <input
                name=""
                id=""
                className="w-[100%] h-[40px] outline-none mt-[8px] bg-[#fff] border-[#E8E9EB] border-[2px] rounded-xl px-[10px] font-medium py-[1px]"
                placeholder="Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
              
            </div> 
    <>
      {/* <p className="text-[#000] text-[16px] font-medium">
        Q3. Choose among the following?
      </p> */}
      {/* <div className="w-[100%] flex flex-col">
        {list.map((item: any, i: any) => {
          return (
            <div key={i} className="flex items-center mt-[13px]">
              <div
                className="w-[16px] flex items-center justify-center overflow-hidden p-[2px] h-[16px] rounded-[50%] bg-[#F8F8F8] border-[#e8e9eb] border-[2px] cursor-pointer    "
                onClick={() => {
                  setSelectedQ3(i);
                }}
              >
                {selectedQ3 === i && (
                  <div className="w-[8px] h-[8px] shrink-0 bg-[#304ffd] rounded-[50%]"></div>
                )}
              </div>
              <p className="text-[14px] text-[#3F434A] leading-[14px] font-medium ml-[15px] mt-[-3px]">
                {item.title}
              </p>
            </div>
          );
        })}
      </div> */}
    </>
 

     <div className="text-[#000] text-[16px] font-medium">
      <div className="w-[100%]"> 
        <div className="flex flex-col ml-9"> 
        <div className="py-1 text-[16px] text-[#222]"></div>
      </div>
 
      <div className="w-[100%] min-h-[43vh]">
      {questionList.map((questionItem: any, index: any) => {
        return (
          <div className="w-[100%] relative my-[20px] flex" key={index}>
            <div className="py-1 mt-3 mr-1 text-[16px] text-[#222]">
              Q{index + 1}. 
            </div>
            <div className="w-[89%]">
              <input
                className="w-[100%] bg-[#E8E9EB] text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[40px] outline-none"
                type="text"
                placeholder="Write Question*"
                value={questionItem.question}
                onChange={(e) => updateQuestion(index, e.target.value)}
                required
              />
              <p className=" pt-2 text-[#8A9099]"> Choose Answer Type</p>
              <select
                className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
                value={questionItem.answerType}
                onChange={(e) => updateAnswerType(index, e.target.value)}
              >
                <option value="">Select answer type</option>
                <option value="Short Answer">Short Answer</option>
                <option value="Long Answer">Long Answer</option>
                <option value="Multiple Choice">Multiple Choice</option>
                <option value="Dropdown">Dropdown</option>
                <option value="Checkbox">Checkbox</option>
              </select>
              {/* {questionItem.answerType === 'Short Answer' && <AddText top="10px" index={index} change={updateAnswer} />}
              {questionItem.answerType === 'Long Answer' && <AddTextBox index={index} change={updateAnswer} />} */}
              {questionItem.answerType === 'Multiple Choice' && <McqEditable ind={index} setOption={setOption} />}
              {questionItem.answerType === 'Dropdown' && <DropDownEditable ind={index} setOption={setOption} />}
              {questionItem.answerType === 'Checkbox' && <CheckboxEdit ind={index} setOption={setOption} /> } 
            </div>
            <button className="absolute right-1 top-5" onClick={() => deleteQuestion(index)}>
            <Image
            src={getBasicIcon("Delete")}
            className={`svg-black`}
            alt=""
            width={18}
            height={18}
            style={{
              objectFit: "contain",
            }}
          />
            </button>
          </div>
        );
      })}
      <button className="text-blue-500 px-4 py-2 rounded-md mt-4" onClick={addQuestion}>
        Add Question
      </button>
      </div>
    </div>
  

         
       </div>
            
            
    {/* Render your form fields here */}
      <button className="bg-blue-500 font-semibold text-[16px] text-white px-4 py-2 rounded-md ml-[85%]" onClick={handleSave}>
          Save
      </button>

            
          </div>
        </div>
        )
      }
    </div>
  );
};

export default Questionnaire;
