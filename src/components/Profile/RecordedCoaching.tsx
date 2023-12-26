import ButtonDropDown from "@/utils/Button/Button";
import Navigator from "@/utils/customNavigator";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Chart = ({ title, percent }: any) => {
  return (
    <div className="w-[10px] h-[100%] flex flex-col items-center relative">
      <div className="w-[10px] h-[100%] mb-[15px] bg-[#f7f8ff] rounded-t-[19px] relative overflow-hidden">
        <div
          className="w-[100%] bg-bg-red bottom-0 absolute rounded-t-[19px]"
          style={{ height: percent }}
        ></div>
      </div>
      <div className="text-[10px] leading-[13px] min-h-[40px] flex items-center justify-center tracking-sm font-medium text-[#8A9099] text-center absolute bottom-[-25px]">
        {title}
      </div>
    </div>
  );
};

const ChartContainer = ({ children }: any) => {
  return (
    <div className="w-[100%] h-[220px] mt-[40px] flex">
      <div className="w-[4%] h-[100%] flex flex-col justify-between items-center text-[#8A9099]">
        <p>100</p>
        <p>75</p>
        <p>50</p>
        <p>25</p>
        <p className="mb-[20px]">0</p>
      </div>
      <div className="w-[92%] h-[100%] flex justify-between pr-[30px] pl-[30px]">
        {children}
      </div>
    </div>
  );
};

const ScriptBuilding = ({ script }: { script: ScriptBuilding }) => {
  return (
    <div className="w-[100%] h-[350px] bg-[#fff] rounded-xl shrink-0  py-[19px]">
      <div className="w-[100%] flex items-center justify-between">
        <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
          Script Building Blocks
        </h1>
      </div>
      <ChartContainer>
        {/* percent={`${script.closing}%`} */}
        <Chart title={"Opening"} percent={`${script.Opening}%`} />
        <Chart
          title={"Lead Qualififcation"}
          percent={`${script["Lead Qualification"]}%`}
        />
        <Chart
          title={"Need Discovery"}
          percent={`${script["Need Discovery"]}%`}
        />
        <Chart
          title={"Key Value Proposition"}
          percent={`${script["Key Value Proposition"]}%`}
        />
        <Chart
          title={"Product Knowledge"}
          percent={`${script["Product Knowledge"]}%`}
        />
        <Chart
          title={"Price Discussion"}
          percent={`${script["Price Discussion"]}%`}
        />
        <Chart title={"Closing"} percent={`${script.Closing}%`} />
      </ChartContainer>
    </div>
  );
};

const Selling = ({ selling }: { selling: SellingSkills }) => {
  return (
    <div className="w-[100%] h-[350px] bg-[#fff] rounded-xl shrink-0  py-[19px]">
      <div className="w-[100%] flex items-center justify-between">
        <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
          Selling Skills
        </h1>
      </div>
      <ChartContainer>
        <Chart
          title={"Consultative Selling"}
          percent={`${selling["Consultative Selling"]}%`}
        />
        <Chart title={"Empathy"} percent={`${selling.Empathy}%`} />
        <Chart
          title={"Listening Skills"}
          percent={`${selling["Listening Skills"]}%`}
        />
        <Chart title={"Confidence"} percent={`${selling.Confidence}%`} />
        <Chart
          title={"Urgency Creation"}
          percent={`${selling["Urgency Creation"]}%`}
        />
        <Chart
          title={"Positive Energy"}
          percent={`${selling["Positive Energy"]}%`}
        />
        <Chart
          title={"Rapport Building"}
          percent={`${selling["Rapport Building"]}%`}
        />
        <Chart title={"Politeness"} percent={`${selling.Politeness}%`} />
      </ChartContainer>
    </div>
  );
};

const Emotion = ({ data }: { data: Emotion }) => {
  return (
    <div className="w-[100%] h-[350px] bg-[#fff] rounded-xl shrink-0  py-[19px]">
      <div className="w-[100%] flex items-center justify-between">
        <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
          Emotion Analysis
        </h1>
      </div>
      <ChartContainer>
        <Chart title={"Joy"} percent={`${data.Joy}%`} />
        <Chart title={"Trust"} percent={`${data.Trust}%`} />
        <Chart title={"Politeness"} percent={`${data.Politeness}%`} />
        <Chart title={"Satisfaction"} percent={`${data.Satisfaction}%`} />
        <Chart title={"Curiosity"} percent={`${data.Curiosity}%`} />
        {/* <Chart title={"Confidence"}  percent={`${data.}%`} /> */}
        {/* <Chart title={"Empathy"} percent={`${data.}%`} /> */}
        <Chart title={"Assertivenss"} percent={`${data.Assertiveness}%`} />
      </ChartContainer>
    </div>
  );
};

const Loader = () => {
  return (
    <div className="w-[100%] h-[500px]  flex items-center justify-center top-0 left-0">
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#ccc"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill={"#304dfd"}
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

const Coaching = ({ data }: any) => {
  const [loading, setLoading] = React.useState(true);
  const [checked, setChecked] = React.useState(true);
  const [data1, setData] = useState({
    scriptBuilding: {
      "Lead Qualification": 0,
      "Need Discovery": 0,
      "Product Knowledge": 0,
      "Price Discussion": 0,
      Closing: 0,
      Opening: 0,
      "Key Value Proposition": 0,
    },
    sellingSkills: {
      "Consultative Selling": 0,
      Empathy: 0,
      "Listening Skills": 0,
      Confidence: 0,
      "Urgency Creation": 0,
      "Positive Energy": 0,
      "Rapport Building": 0,
      Politeness: 0,
    },
    emotion: {
      Joy: 0,
      Trust: 0,
      Politeness: 0,
      Satisfaction: 0,
      Curiosity: 0,
      Assertiveness: 0,
    },
  });
  const [tab, setTab] = useState<any>(0);
  const tabs = [
    { id: 0, title: "Auto" },
    { id: 1, title: "Manual" },
  ];
  useEffect(() => {
    if (checked) {
      axios
        .post(
          "https://sales365.trainright.fit/api/indicator/getIndicatorValues",
          {
            id: data,
          }
        )
        .then((e) => {
          setData(e.data);
          setLoading(false);
        })
        .catch((e) => {});
      setChecked(false);
    }
  });
  const handleCallback = (payload: any) => {
    setTab(payload);
  };
  return (
    <div className="w-[100%] ">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>
            <h3 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
              Call Analysis
            </h3>
            <div className="flex justify-between gap-[10px]">
              <div className="w-[100%]">
                <div className="w-[100%] flex justify-between">
                  <span className="text-[gray]">Call Disposition</span>
                  <span>{data?.CallDisposition || "-"}</span>
                </div>
                <div className="w-[100%] flex justify-between">
                  <span className="text-[gray]">Call Type</span>
                  <span>{data?.CallType || "-"}</span>
                </div>
              </div>
              {tab === 1 && (
                <div className="w-[120px] flex flex-col items-center px-[6px]">
                  <span className="text-yellow">
                    {data?.CallScore || "Not Scored"}
                  </span>
                  <span className="text-[16px] font-medium">Call Score</span>
                </div>
              )}
            </div>
          </div>
          <Navigator
            width={false}
            callback={handleCallback}
            current={tab}
            list={tabs}
          />
          {tab === 0 && (
            <>
              <ScriptBuilding script={data1?.scriptBuilding} />
              <Selling selling={data1?.sellingSkills} />
              <Emotion data={data1?.emotion} />
            </>
          )}
          {tab === 1 && (
            <div>
              <div className="fieldset mt-[24px]">
                <span className="text-[16px] font-bold mb-[16px]">
                  Client Introduction
                </span>
                <div>
                  <div>
                    <label htmlFor="client_intro_mark0">
                      <input
                        type="radio"
                        id="client_intro_mark0"
                        name="client_intro"
                      />
                      <span>
                        <span className="font-medium">0 marks:</span>No
                        introduction or insufficient information about the
                        client.
                      </span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="client_intro_mark2">
                      <input
                        type="radio"
                        id="client_intro_mark2"
                        name="client_intro"
                      />
                      <span>
                        <span className="font-medium">2 marks:</span>Basic
                        information provided, but lacks personalization or
                        relevant details.
                      </span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="client_intro_mark4">
                      <input
                        type="radio"
                        id="client_intro_mark4"
                        name="client_intro"
                      />
                      <span>
                        <span className="font-medium">4 marks:</span>Adequate
                        introduction with some personalization and relevant
                        details about the client.
                      </span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="client_intro_mark5">
                      <input
                        type="radio"
                        id="client_intro_mark5"
                        name="client_intro"
                      />
                      <span>
                        <span className="font-medium">5 marks:</span>Execellent
                        introduction that demonstrates a strong understanding of
                        the client&apos;s background, industry.
                      </span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="client_intro_na">
                      <input
                        type="radio"
                        id="client_intro_na"
                        name="client_intro"
                      />
                      <span>Not applicable.</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="fieldset mt-[24px]">
                <span className="text-[16px] font-bold mb-[16px]">
                  Service Offerings
                </span>
                <div>
                  <div>
                    <label htmlFor="so_mark0">
                      <input
                        type="radio"
                        id="so_mark0"
                        name="service_offerings"
                      />
                      <span>
                        <span className="font-medium">0 marks:</span>No mention
                        or unclear explanation of the service offerings.
                      </span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="so_mark2">
                      <input
                        type="radio"
                        id="so_mark2"
                        name="service_offerings"
                      />
                      <span>
                        <span className="font-medium">2 marks:</span>Basic
                        description of the service offerings, but lacks clarity
                        or fails to highlight key benefits.
                      </span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="so_mark4">
                      <input
                        type="radio"
                        id="so_mark4"
                        name="service_offerings"
                      />
                      <span>
                        <span className="font-medium">4 marks:</span>Clear
                        explanation of the service offerings with an emphasis on
                        key benefits and value proposition.
                      </span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="so_mark5">
                      <input
                        type="radio"
                        id="so_mark5"
                        name="service_offerings"
                      />
                      <span>
                        <span className="font-medium">5 marks:</span>Detailed
                        and persuasive presentation of the service offerings,
                        highlighting specific features, benefits.
                      </span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="so_na">
                      <input type="radio" id="so_na" name="service_offerings" />
                      <span>Not applicable.</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="fieldset mt-[24px]">
                <span className="text-[16px] font-bold mb-[16px]">
                  Purpose of Call
                </span>
                <div>
                  <div>
                    <label htmlFor="pc_mark0">
                      <input
                        type="radio"
                        id="pc_mark0"
                        name="purpose_of_call"
                      />
                      <span>
                        <span className="font-medium">0 marks:</span>No
                        introduction or insufficient information about the
                        client.
                      </span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="pc_mark2">
                      <input
                        type="radio"
                        id="pc_mark2"
                        name="purpose_of_call"
                      />
                      <span>
                        <span className="font-medium">2 marks:</span>Basic
                        information provided, but lacks personalization or
                        relevant details.
                      </span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="pc_mark4">
                      <input
                        type="radio"
                        id="pc_mark4"
                        name="purpose_of_call"
                      />
                      <span>
                        <span className="font-medium">4 marks:</span>Adequate
                        introduction with some personalization and relevant
                        details about the client.
                      </span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="pc_mark5">
                      <input
                        type="radio"
                        id="pc_mark5"
                        name="purpose_of_call"
                      />
                      <span>
                        <span className="font-medium">5 marks:</span>Execellent
                        introduction that demonstrates a strong understanding of
                        the client&apos;s background, industry.
                      </span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="pc_na">
                      <input type="radio" id="pc_na" name="purpose_of_call" />
                      <span>Not applicable.</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form_btns"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Coaching;
export interface Root {
  scriptBuilding: ScriptBuilding;
  emotion: Emotion;
  sellingSkills: SellingSkills;
}

export interface ScriptBuilding {
  Opening: number;
  "Lead Qualification": number;
  "Need Discovery": number;
  "Product Knowledge": number;
  "Price Discussion": number;
  Closing: number;
  "Key Value Proposition": number;
}

export interface Emotion {
  Joy: number;
  Trust: number;
  Politeness: number;
  Satisfaction: number;
  Curiosity: number;
  Assertiveness: number;
}

export interface SellingSkills {
  "Consultative Selling": number;
  Empathy: number;
  "Listening Skills": number;
  Confidence: number;
  "Urgency Creation": number;
  "Positive Energy": number;
  "Rapport Building": number;
  Politeness: number;
}
