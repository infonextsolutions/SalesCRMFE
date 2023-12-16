import React from "react";
import Chart from "react-apexcharts";
import { options } from "./data";

const SoleChart = ({ i, title, w, data }: any) => {
  const option1: any = options[i];
  const data1: any = data[i];
  const data2: any = data[i + 1];
  console.log();
  return (
    <div
      className=" shrink-0"
      style={{
        width: w,
        marginRight:
          data1[0].data.length < 5 ? (data2[0].data.length < 5 ? -29 : -39) : 0,
      }}
    >
      <h4 className="text-center translate-x-[-13px] text-[16px] font-medium text-text-norm">
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

const Charts = ({ data1 }: { data1: Root }) => {
  console.log(data1);

  const data = [
    [
      {
        data: [
          {
            x: "Call Purpose",
            y: data1.call_purpose,
          },
          {
            x: "Compnay Intro",
            y: data1.company_intro,
          },
          {
            x: "Self Credentialing",
            y: data1.self_credentialing,
          },
          {
            x: "Voice Mail",
            y: data1.voice_mail,
          },
        ],
      },
    ],
    [
      {
        data: [
          {
            x: "Real time cues",
            y: data1.real_time_cues,
          },
          {
            x: "Post Call Analytics",
            y: data1.post_call_analytics,
          },
          {
            x: "Integration",
            y: data1.integration,
          },
        ],
      },
    ],
    [
      {
        data: [
          {
            x: "Open Ended",
            y: data1.open_ended,
          },
          {
            x: "Sales Coaching",
            y: data1.sales_coaching,
          },
          {
            x: "Sales Visibility",
            y: data1.sales_visibility,
          },
        ],
      },
    ],
    [
      {
        data: [
          {
            x: "Dialer",
            y: data1.dialer,
          },
          {
            x: "Revenue Potential",
            y: data1.revenue_potential,
          },
          {
            x: "CRM",
            y: data1.CRM,
          },
          {
            x: "Web Conferencing",
            y: data1.web_conferencing,
          },
          {
            x: "Decision Maker",
            y: data1.decision_maker,
          },
        ],
      },
    ],
    [
      {
        data: [
          {
            x: "Better Sales Visibility",
            y: data1.better_sales_visibility,
          },
          {
            x: "Conversion rate",
            y: data1.conversion_rate,
          },
          {
            x: "Improved Customer Experience",
            y: data1.improved_customer_experience,
          },
          {
            x: "Ramp Time",
            y: data1.ramp_time,
          },
          {
            x: "Actionable Insights",
            y: data1.actionable_insights,
          },
          {
            x: "Data Driven Coaching",
            y: data1.data_driven_coaching,
          },
        ],
      },
    ],
    [
      {
        data: [
          {
            x: "Trial",
            y: data1.trail,
          },
          {
            x: "Next Steps",
            y: data1.next_steps,
          },
          {
            x: "Email",
            y: data1.email,
          },
          {
            x: "Zoom Demo",
            y: data1.zoom_demo,
          },
          {
            x: "Meeting",
            y: data1.meeting,
          },
          {
            x: "Closure",
            y: data1.closure,
          },
          {
            x: "Call",
            y: data1.call,
          },
        ],
      },
    ],
  ];
  return (
    <div className="mt-[40px] flex">
      <SoleChart title="Opening" i={0} w={300} data={data} />
      <SoleChart title="Product Knowledge" i={1} w={280} data={data} />
      <SoleChart title="Need Discovery" i={2} w={300} data={data} />
      <SoleChart title="Lead Qualification" i={3} w={300} data={data} />
      <SoleChart title="Key Value Proposition" i={4} w={300} data={data} />
      <SoleChart title="Closing" i={5} w={150} data={data} />
    </div>
  );
};

export default Charts;

interface Root {
  _id: string;
  call_purpose: number;
  company_intro: number;
  self_credentialing: number;
  voice_mail: number;
  real_time_cues: number;
  post_call_analytics: number;
  integration: number;
  open_ended: number;
  sales_coaching: number;
  sales_visibility: number;
  dialer: number;
  CRM: number;
  decision_maker: number;
  revenue_potential: number;
  web_conferencing: number;
  better_sales_visibility: number;
  improved_customer_experience: number;
  actionable_insights: number;
  conversion_rate: number;
  ramp_time: number;
  data_driven_coaching: number;
  trail: number;
  email: number;
  meeting: number;
  closure: number;
  call: number;
  next_steps: number;
  zoom_demo: number;
  createdAt: string;
  updatedAt: string;
}
