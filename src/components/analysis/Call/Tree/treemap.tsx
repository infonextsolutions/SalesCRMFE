import React from "react";
import Chart from "react-apexcharts";
import { options } from "./data";

const SoleChart = ({ i, title, w, data }: any) => {
  const option1: any = options[i];
  const data1: any = data[i];
  const data2: any = data[i + 1];
  return (
    <div
      className=" shrink-0"
      style={{
        width: w,
        marginRight:
          data1[0].data.length < 5 ? (data2[0].data.length < 5 ? -29 : -39) : 0,
      }}
    >
      <h4 className="text-[#8A9099] text-center translate-x-[-13px] text-[16px] font-medium">
        {title}
      </h4>
      <Chart
        options={option1}
        series={data1}
        type="treemap"
        height={500}
        width={w}
      />
    </div>
  );
};

const Charts = ({ data1 }: any) => {
  // Return early if data1 is not available
  if (!data1) {
    return <div className="mt-[40px] text-center">Loading charts...</div>;
  }

  const data = [
    [
      {
        data: [
          {
            x: "Call Purpose",
            y: data1?.call_purpose || 0,
          },
          {
            x: "Compnay Intro",
            y: data1?.company_intro || 0,
          },
          {
            x: "Self Credentialing",
            y: data1?.self_credentialing || 0,
          },
          {
            x: "Voice Mail",
            y: data1?.voice_mail || 0,
          },
        ],
      },
    ],
    [
      {
        data: [
          {
            x: "Real time cues",
            y: data1?.real_time_cues || 0,
          },
          {
            x: "Post Call Analytics",
            y: data1?.post_call_analytics || 0,
          },
          {
            x: "Integration",
            y: data1?.integration || 0,
          },
        ],
      },
    ],
    [
      {
        data: [
          {
            x: "Open Ended",
            y: data1?.open_ended || 0,
          },
          {
            x: "Sales Coaching",
            y: data1?.sales_coaching || 0,
          },
          {
            x: "Sales Visibility",
            y: data1?.sales_visibility || 0,
          },
        ],
      },
    ],
    [
      {
        data: [
          {
            x: "Dialer",
            y: data1?.dialer || 0,
          },
          {
            x: "Revenue Potential",
            y: data1?.revenue_potential || 0,
          },
          {
            x: "CRM",
            y: data1?.CRM || 0,
          },
          {
            x: "Web Conferencing",
            y: data1?.web_conferencing || 0,
          },
          {
            x: "Decision Maker",
            y: data1?.decision_maker || 0,
          },
        ],
      },
    ],
    [
      {
        data: [
          {
            x: "Better Sales Visibility",
            y: data1?.better_sales_visibility || 0,
          },
          {
            x: "Conversion rate",
            y: data1?.conversion_rate || 0,
          },
          {
            x: "Improved Customer Experience",
            y: data1?.improved_customer_experience || 0,
          },
          {
            x: "Ramp Time",
            y: data1?.ramp_time || 0,
          },
          {
            x: "Actionable Insights",
            y: data1?.actionable_insights || 0,
          },
          {
            x: "Data Driven Coaching",
            y: data1?.data_driven_coaching || 0,
          },
        ],
      },
    ],
    [
      {
        data: [
          {
            x: "Trial",
            y: data1?.trail || 0,
          },
          {
            x: "Next Steps",
            y: data1?.next_steps || 0,
          },
          {
            x: "Email",
            y: data1?.email || 0,
          },
          {
            x: "Zoom Demo",
            y: data1?.zoom_demo || 0,
          },
          {
            x: "Meeting",
            y: data1?.meeting || 0,
          },
          {
            x: "Closure",
            y: data1?.closure || 0,
          },
          {
            x: "Call",
            y: data1?.call || 0,
          },
        ],
      },
    ],
  ];
  return (
    <div className="mt-[40px] flex">
      <SoleChart title="Opening" i={0} w={270} data={data} />
      <SoleChart title="Product Knowledge" i={1} w={220} data={data} />
      <SoleChart title="Need Discovery" i={2} w={240} data={data} />
      <SoleChart title="Lead Qualification" i={3} w={200} data={data} />
      <SoleChart title="Key Value Proposition" i={4} w={210} data={data} />
      <SoleChart title="Closing" i={5} w={140} data={data} />
    </div>
  );
};

export default Charts;
