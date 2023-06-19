import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React, { useState } from "react";

const AddText = ({ top, title, width, change }: any) => {
  return (
    <div
      className="w-[100%] "
      style={{
        width: width ? width : "100%",
        marginTop: top,
      }}
    >
      <p className="text-[16px] font-medium tracking-wide text-[#222]">
        {title}
      </p>
      <input
      placeholder="Write short answer"
        onChange={(e: any) => {
          change(e.target.value);
        }}
        type="text"
        className="w-[100%] bg-white text-[#8a9099] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
      />
    </div>
  );
};

const TextBox = () => {
  return (
    <>
      <p className="text-[#000] text-[16px] font-medium">
        Q1.  What are you looking in a product?
      </p>
      <textarea
        name=""
        id=""
        className="w-[100%] h-[90px] outline-none mt-[16px] bg-[#fff] border-[#E8E9EB] border-[2px] rounded-xl px-[10px] font-medium py-[10px] px-[13px]"
        placeholder="Write Short Answer"
      ></textarea>
    </>
  );
};

const Dropdown = () => {
  const list: any = [{ value: 1, selected: true, title: "Choose Type" }];

  return (
    <>
      <p className="text-[#000] text-[16px] font-medium">
        Q2. What is your budget range?
      </p>
      <div className="w-[100%] px-[10px] border-[1px] mt-[10px]  rounded-xl border-[#ccc]">
        <select
          id="countries"
          className="outline-none cursor-pointer capitalize text-gray-900 py-[10px] text-sm tracking-wide text-[#3F434A] font-medium  block w-full bg-white"
        >
          {list.map((item: any, i: any) => {
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

const Mcq = () => {
  const list: any = [
    { title: "option 1" },
    { title: "option 2" },
    { title: "option3" },
    { title: "other" },
  ];
  const [selected, setSelected] = useState(null);
  return (
    <>
      <p className="text-[#000] text-[16px] font-medium">
        Q3. Choose among the following?
      </p>
      <div className="w-[100%] flex flex-col">
        {list.map((item: any, i: any) => {
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

const Questionnaire = () => {
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
  const [selected, setSelected] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    // Handle saving the form data
    closeModal(); // Close the modal after saving
  };

  const questions = [0, 1, 2, 3, 4];

  return (
    <div className="w-[100%] min-h-[50vh]">
      <div className="flex items-center justify-between">
        <h1 className="text-[32px] font-medium text-[#3F434A]">Demo Call</h1>
        <button
          className="ml-auto items-center flex bg-renal-blue pl-[11px] rounded-xl pr-[11px] py-[8px]"
          onClick={openModal}
        >
          <Image
            src={getBasicIcon("edit")}
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
      {questions.map((item: any, i: any) => {
        return (
          <div className="w-[100%] my-[20px]" key={i}>
            {item === 0 && <TextBox />}
            {item === 1 && <Dropdown />}
            {item === 2 && <Mcq />}
          </div>
        );
      })}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-xl p-6 w-[744px]  h-[730px] overflow-y-scroll">
            <div className="flex justify-space-between">
              <h1 className="text-[#222] text-4xl font-semibold mb-4 mr-80">Edit Questionnaire</h1>
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
            
            

             <div className="w-[100%]">
        <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
          Title
        </p>
        <select
          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
          
        >
          <option value="" selected>
            Demo Call
          </option>
          <option value="1">1</option>
          
        </select>
      </div>

      <div className="py-1"></div>


      <AddText
        top={"10px"}
       
        title="Q1.What are you looking in a product?"
      />
      {/* State */}
      <div className="py-1 text-[16px] text-[#222]"></div>


                   <div className="w-[100%]">
        <p className="text-[16px] font-medium tracking-wide text-[#222]">
          Q2. What is your budget range?
        </p>
        <select
          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
          
        >
          <option value="" selected>
            Choose range
          </option>
          <option value="1">1</option>
          
        </select>
      </div>

      <div className="py-1"></div>

      <>
      <p className="text-[#000] text-[16px] font-medium">
        Q3. Choose among the following?
      </p>
      <div className="w-[100%] flex flex-col">
        {list.map((item: any, i: any) => {
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
              <p className="text-[14px] text-[#3F434A] leading-[14px] font-medium ml-[15px] mt-[-3px]">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </>

        
         <div className="py-1"></div>

         <p className="text-[#000] text-[16px] font-medium">
          <div
      className="w-[100%] "
      
    >
        <div className="flex">
          <p className="pt-4 pr-1">Q4.</p>
           <input
      placeholder="Write Question"
        
        type="text"
        className="w-[100%] bg-white text-[#8a9099] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
      />
     
      
        </div>

        <div className="flex flex-col ml-9">

           

      <div className="py-1 text-[16px] text-[#222]"></div>


          <div className="w-[100%]">
        <p className="text-[16px] font-medium tracking-wide text-[#8a9099]">
          Choose answer type
        </p>
        <select
          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[8px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
          
        >
          <option value="" selected>
            Check box
          </option>
          <option value="1">1</option>
          
        </select>
      </div>  



       <>
      
      <div className="w-[100%] flex flex-col">
        {list2.map((item: any, i: any) => {
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
              <p className="text-[14px] text-[#3F434A] leading-[14px] font-medium ml-[15px] mt-[-3px]">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </>


          </div>

          <div className="py-1 text-[16px] text-[#304FFD]"></div>
          <p className="pt-4 pr-1 text-[#304FFD]">Add Question</p>
    </div>
  

         
      </p>
      
    

      
          
      

            
            <form>
              {/* Render your form fields here */}
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={handleSave}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
