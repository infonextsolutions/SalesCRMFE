import { getBasicIcon } from "@/utils/AssetsHelper";
import SimpleButton from "@/utils/Button/SimpleButton";
import axios from "axios";
import "quill/dist/quill.snow.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import { Root } from "../EditLead/FormEditContainer";
import { useAppDispatch } from "@/store/store";
import { setError, setSuccess } from "@/store/ai";

const DropItems = ({ title, list, top, setEventType }: any) => {
  return (
    <div
      className="w-[100%] my-6"
      style={{
        marginTop: top,
      }}
    >
      <p className="block mb-2 text-sm font-medium text-[#8a9099] tracking-wide">
        {title}
      </p>

      <select
        className=" border border-gray-300 text-sm rounded-2xl tracking-wide text-[#3F434A] font-medium  block w-full p-2.5 bg-white"
        onChange={(e) => {
          setEventType(e.target.value);
        }}
      >
        {list.map((item: any, i: any) => (
          <option
            className="text-[#3F434A] "
            key={i}
            value={item.val}
            selected={item.selected}
          >
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

const DisabledAddText = ({ title, place }: any) => {
  return (
    <div className="w-[100%] mb-[15px]">
      <p className="w-[100%] text-[#8A9099] font-medium tracking-wide mb-[8px]">
        {title}
      </p>
      <input
        disabled
        className="cursor-not-allowed w-[100%] h-[41px] rounded-[14px] bg-[#D9D9D954] text-[#3F434A] px-[14px] outline-none text-[14px] font-medium tracking-wide"
        type="text"
        name=""
        placeholder={place}
        value={place}
        id=""
      />
    </div>
  );
};
const AddText = ({ title, place }: any) => {
  return (
    <div className="w-[100%] mb-[15px]">
      <p className="w-[100%] text-[#8A9099] font-medium tracking-wide mb-[8px]">
        {title}
      </p>
      <input
        className="w-[100%] h-[41px] rounded-[14px] bg-[#D9D9D954] text-[#3F434A] px-[14px] outline-none text-[14px] font-medium tracking-wide"
        type="text"
        name=""
        placeholder={place}
        id=""
      />
    </div>
  );
};

const Senders = () => {
  return (
    <div className="ml-[10px] h-[24px] border-gray border-[1px] flex items-center px-[10px] rounded-lg bg-gray-100">
      <p className="text-text-norm text-[12px] font-medium">Shraddha P.</p>
      <Image
        className="w-[10px] h-[10px] ml-[30px]"
        src={getBasicIcon("Cross")}
        width={10}
        height={10}
        alt=""
      />
    </div>
  );
};

// const SendersDetails = ({ change }: any) => {
//   return (
//     <div className="w-[100%] px-[15px] h-[42px] items-center bg-[#fff] flex justify-between">
//       <div className="flex items-center">
//         <p className="text-[14px] tracking-wide font-medium text-[#3F434A]">
//           To:
//         </p>
//         {/* <Senders /> */}
//       </div>
//       <input
//         type="text"
//         onChange={(e) => {
//           change(e.target.value);
//         }}
//         className="w-[100%] h-[100%] bg-[#fff] px-[10px] text-[14px] font-medium outline-none text-[#000]"
//       />
//     </div>
//   );
// };
const SendersDetails = ({ receiver, change }: any) => {
  return (
    <div className="w-[100%] px-[15px] h-[42px] items-center bg-[#fff] flex justify-between">
      <div className="flex items-center">
        <p className="text-[14px] tracking-wide font-medium text-[#3F434A]">
          To:
        </p>
        {/* <Senders /> */}
      </div>
      <input
        type="text"
        onChange={(e) => {
          change(receiver);
        }}
        className="w-[100%] h-[100%] bg-[#fff] px-[10px] text-[14px] font-medium outline-none text-[#000]"
      />
    </div>
  );
};

const Icon = ({ src }: any) => {
  return (
    <Image
      src={src}
      className={`mx-2`}
      alt="Bold"
      width={15}
      height={15}
      style={{
        objectFit: "contain",
      }}
    />
  );
};

const Toolbar = ({
  setIsBold,
  setIsItalic,
  isBold,
  isItalic,
  isUnderline,
  setIsUnderline,
}: any) => {
  return (
    <div className="ql-toolbar bg-gray-100 flex flex-wrap h-[40px] m space-x-2 sm:pr-4 items-center divide-gray-200  ql-snow">
      <div className="w-[38px] flex  pr-[10px] ">
        <Image
          src="/Images/Logo/Font.svg"
          className={` ml-3  svg-gray-2 cursor-pointer`}
          alt="Bold"
          width={15}
          height={15}
          style={{
            objectFit: "contain",
          }}
        />
        <Image
          src={getBasicIcon("Arrow Down 3")}
          width={20}
          className="cursor-pointer "
          height={20}
          alt=""
        />
      </div>
      <div className="border-x-[1px] border-x-[#E8E9EB] flex gap-1 ">
        <button
          className={`${isBold ? "bg-slate-300" : "bg-transparent"
            } p-1 rounded-lg w-[38px]  flex`}
          onClick={() => setIsBold((prev: any) => !prev)}
        >
          <Icon src="/Images/Logo/Bold.svg" />
        </button>
        <button
          className={`${isItalic ? "bg-slate-300" : "bg-transparent"
            } p-1 rounded-lg w-[38px]  flex`}
          onClick={() => setIsItalic((prev: any) => !prev)}
        >
          <Icon src="/Images/Logo/Italic.svg" />
        </button>
        <button
          className={`${isUnderline ? "bg-slate-300" : "bg-transparent"
            } p-1 rounded-lg w-[38px]  flex`}
          onClick={() => setIsUnderline((prev: any) => !prev)}
        >
          {" "}
          <Icon src="/Images/Logo/Underline.svg" />
        </button>
      </div>
      <div className="border-x-[1px] border-x-[#E8E9EB] flex">
        <Icon src="/Images/Logo/Link.svg" />
        <Icon src="/Images/Logo/Smile.svg" />
        <Icon src="/Images/Logo/Image.svg" />
      </div>
      <div className="border-x-[1px] border-x-[#E8E9EB] flex">
        <Icon src="/Images/Logo/List.svg" />
        <Icon src="/Images/Logo/Numbered List.svg" />
      </div>
      <div className="border-x-[1px] border-x-[#E8E9EB] flex">
        <Icon src="/Images/Logo/Align-Left.svg" />
        <Icon src={getBasicIcon("text-center")} />
        <Icon src={getBasicIcon("text-right")} />
        <Icon src={getBasicIcon("text-along")} />
      </div>
    </div>
  );
};

const TextBox = ({ content, title, isBold, isItalic, isUnderline }: any) => {
  return (
    <>
      <input
        name=""
        type="text"
        className="w-[100%] outline-none text-[14px] font-medium text-text-norm h-[40px] py-[10px] px-[18px] bg-[#fff]"
        placeholder="Title"
        onChange={(e: any) => {
          title(e.target.value);
        }}
      />
      <textarea
        name=""
        id=""
        onChange={(e: any) => {
          content(e.target.value);
        }}
        className={` ${isBold ? "font-bold" : "font-normal"} ${isItalic ? "italic" : "not-italic"
          } ${isUnderline ? "underline underline-offset-1" : "underline-offset-0"}
        w-[100%] outline-none text-[14px] text-text-norm h-[110px] py-[10px] px-[18px] bg-[#fff]`}
        placeholder="Type Something"
      ></textarea>
    </>
  );
};
const EmailLayout = ({ content }: any) => {
  const theme = "snow";
  const modules = {
    toolbar: [
      // [{ size: ['small', false, 'large', 'huge'] }],
      ["bold", "italic", "underline"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],

      ["link"],
    ],
  };
  const placeholder = "Type Something";

  const formats = [
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "list",
    "indent",
    "link",
  ];
  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
    placeholder,
  });
  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        content(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  // const {  } = useQuill({ theme, modules, formats, placeholder });

  return (
    <div className="text-black">
      <div className="min-h-[167px]" ref={quillRef} />
    </div>
  );
};
const SendEmail = ({ receiver, change, title, content, clicked }: any) => {
  return (
    <>
      <div className=" w-[100%] rounded-xl items-center border-[1px] ">
        <div className="w-[100%] items-center ml-4 py-2 ">
          <span className="text-[14px] tracking-wide font-medium text-[#3F434A]">
            To:
          </span>

          <span className="w-[100%] h-[100%] bg-[#fff] px-[10px] text-[14px] font-medium outline-none text-[#000]">
            {receiver}
          </span>
        </div>

        {/* <SendersDetails
          receiver={receiver}
          change={(e: any) => {
            change(e);
          }}
        /> */}

        {/* <Toolbar setIsBold={setIsBold} isBold={isBold} setIsItalic={setIsItalic} isItalic={isItalic} isUnderline={isUnderline} setIsUnderline={setIsUnderline}/>
        <TextBox title={title} content={content} isBold={isBold} isItalic={isItalic} isUnderline={isUnderline} /> */}

        <div className="w-full h-[210px] overflow-auto rounded-lg">
          <EmailLayout content={content} />
        </div>
      </div>
      <div className="w-[100%] flex my-[15px] items-center">
        <SimpleButton
          theme={1}
          text={"Send"}
          left={20}
          height={40}
          click={clicked}
          width={90}
          right={0}
        />
        <Image
          className="svg-gray-2 ml-[10px]"
          src={getBasicIcon("Attachment")}
          width={20}
          height={20}
          alt=""
        />
      </div>
    </>
  );
};

//condition to check refresh is present or not

const EmailPage = ({
  cancel,
  data,
  refresh,
  leadIdResult,
}: {
  cancel?: any;
  data?: any;
  refresh?: any;
  leadIdResult?: any;
}) => {
  // const [receiver, setReceiver] = useState<any>("");
  const [receiver, setReceiver] = useState<any>("");
  const [title, setTitle] = useState<any>("");
  const [content, setContent] = useState<any>("");
  const [sendTo, setSendTo] = useState<any>("");
  const emailList = [
    {
      title: "Client 1",
      val: "client1@email.com",
      selected: false,
    },
    {
      title: "Client 2",
      val: "client2@email.com",
      selected: false,
    },
    {
      title: "Client 3",
      val: "client3@email.com",
      selected: false,
    },
  ];
  const [newEmailList, setNewEmailList] = useState<any>([emailList]);
  const dispatch = useAppDispatch();
  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {
    if (window !== undefined) {
      setAccessToken(localStorage.getItem("access-token") || "");
    }
  }, []);

  const submit = (e1: any, e2: any, e3: any) => {
    const payload = {
      _id: data?._id,
      leadId: data._id,
      companyName: data.companyId?.company_name,
      clientPoc: "",
      email: e1,
      subject: e2,
      content: e3,
    };
    const url = "https://sales365.trainright.fit/api/send-email";
    const body = {
      email: e1,
      subject: e2,
      content: e3,
    };

    axios
      .post(url, payload, { headers: { Authorization: accessToken } })
      .then((e) => {
        cancel();
        refresh({ selected: 1 });
        dispatch(
          setSuccess({ show: true, success: "Email Sent Successfully!" })
        );
      })
      .catch((e) => {
        dispatch(setError({ show: true, error: "Error Occured" }));
      });
  };

  useEffect(() => {
    if (data && data.customerId) {
      const { customer_name, customer_email, contacts } = data.customerId;

      const updatedEmailList = []; // Create an empty array to store new values

      // Add customer ID's name and email to updatedEmailList
      updatedEmailList.push({
        title: customer_name,
        val: customer_email,
        selected: false,
      });

      // Loop through contacts and add their name and email to updatedEmailList
      contacts.forEach((contact: any) => {
        const { name, email } = contact;
        if (name !== "" && email !== "") {
          updatedEmailList.push({
            title: name,
            val: email,
            selected: false,
          });
        }
      });

      // Update the state with the new email list
      setNewEmailList(updatedEmailList);
    }

    axios
      .get(
        `https://sales365.trainright.fit/api/leads/find-by-id?id=${data?._id}`, {
        headers: {
          Authorization: accessToken
        }
      }
      )
      .then((res) => {
      })
      .catch((err) => {
      });
  }, [data, accessToken]);

  return (
    <div className="w-[100%] h-[100%]  py-[30px] pl-[40px] pr-[40px]  relative">
      <h1 className="text-[#3f434a] text-[31px] font-medium  mb-[24px] tracking-[1px]">
        New Email
      </h1>
      <div
        className="w-[30px] h-[30px] cursor-pointer rounded-xl absolute top-[30px] right-[30px] flex items-center justify-center bg-[#f8f8f8]"
        onClick={() => {
          cancel();
        }}
      >
        <Image
          className="w-[15px] h-[15px]"
          src={getBasicIcon("Cross")}
          width={15}
          height={15}
          alt=""
        />
      </div>
      <DisabledAddText
        title="Company Name*"
        place={data?.companyId?.company_name}
      />
      <DropItems
        title={"Send Email To"}
        top={20}
        setEventType={setReceiver}
        list={[
          {
            title: "Send Email To",
            val: 0,
            selected: true,
          },
          ...newEmailList,
        ]}
      />
      {/* <DropItems
        title={"Send Email To"}
        top={20}
        // setEventType={setAllocateCallOwner}
        list={[
          {
            title: "Send Email To",
            val: 0,
            selected: true,
          },
          {
            emailList.map((item) => (
              {
                title: item.name,
                val: item.email,
                selected: false
              }
            ) )
          },
          {
            title: "Client ABC",
            val: 0,
            selected: false,
          },
        ]}
      /> */}
      {/* <AddText title="Send Email To" place={"Client Name"} /> */}
      <SendEmail
        change={(e: any) => {
          setReceiver(e);
        }}
        receiver={receiver}
        title={(e: any) => {
          setTitle(e);
        }}
        content={(e: any) => {
          setContent(e);
        }}
        clicked={() => {
          submit(receiver, title, content);
        }}
      />
    </div>
  );
};

export default EmailPage;
