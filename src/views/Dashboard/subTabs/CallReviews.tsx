import React from 'react'
import DealsCard from "@/components/customComponents/360_components/cardDeals";
import BarChartVertical from '@/components/analysis/Call/Charts/BarChartVertical';
import EmotionalAnalysisComp from "@/components/customComponents/360_components/SRM_Bdm_Dashboard/Emotional_Analysis";
import {
    AvgCallScore,
    NoOfQuesAsked,
    SellingSkills,
    HighIntentCallVolume,
    CallsDisposition,
    SalesRepSentimentScore,
} from '@/constants/chartFields';
import {
    avgCallScore,
    callDisposition,
    highIntentCallVolume,
    salesRepSentimentScore,
} from "@/constants/dummyData";
import NoiseAndVolumeChart from '@/components/analysis/Call/Charts/NoiseAndVolumeChart';
import CallSentiment from '@/components/customComponents/360_components/CallSentiment';

const CallReviews = ({
    tabData,
    sellingData,
    getSellingData,
    noOfQuesAsked,
}: {
    tabData?: any,
    sellingData?: any,
    getSellingData?: any,
    noOfQuesAsked?: any,
}) => {
    // SDR/BDM; Manager
    if (tabData?.key === "QA Analyst") {
        return (
            <div className="w-[100%] mt-4">
                <div className="flex w-[100%] justify-between flex-wrap gap-4 py-4">
                    <DealsCard
                        label="Total Calls For Review"
                        icon="/Images/Icons/Basic/UpArrow.svg"
                        count={100}
                        percent={58.8}
                    />
                    <DealsCard
                        label="On Time Call Reviews"
                        icon="/Images/Icons/Basic/DownArrow.svg"
                        count={76}
                        percent={50}
                    />
                    <DealsCard
                        label="Late Call Reviews"
                        icon="/Images/Icons/Basic/BottomArrow.svg"
                        count={18}
                        percent={27.3}
                    />
                </div>
                <div className="w-[100%] flex justify-between flex-wrap mt-5">
                    <div className="w-[52%] flex flex-col gap-6 ">
                        <BarChartVertical
                            getSellingData={getSellingData}
                            title="Selling Skills"
                            data={sellingData}
                            template={SellingSkills}
                            options={[
                                { key: "", label: "Select Sales Rep" },
                                { key: "", label: "John C." },
                                { key: "", label: "Barbara Oaklay" },
                                { key: "", label: "Diana J." },
                                { key: "", label: "Jacob Wilson" },
                            ]}
                        />
                        <BarChartVertical
                            title="High Intent Call Volume"
                            template={HighIntentCallVolume}
                            data={highIntentCallVolume}
                            options={[
                                { key: "", label: "Select Sales Rep" },
                                { key: "", label: "John C." },
                                { key: "", label: "Barbara Oaklay" },
                                { key: "", label: "Diana J." },
                                { key: "", label: "Jacob Wilson" },
                            ]}
                        />
                        <EmotionalAnalysisComp />
                        <BarChartVertical
                            title="Sales Rep Sentiment Score"
                            template={HighIntentCallVolume}
                            data={highIntentCallVolume}
                            options={[
                                { key: "", label: "Select Sales Rep" },
                                { key: "", label: "John C." },
                                { key: "", label: "Barbara Oaklay" },
                                { key: "", label: "Diana J." },
                                { key: "", label: "Jacob Wilson" },
                            ]}
                        />
                    </div>
                    <div className="w-[46%] flex flex-col gap-6">
                        <BarChartVertical
                            title="Call Score Graph"
                            template={NoOfQuesAsked}
                            data={avgCallScore}
                            options={[
                                { key: "", label: "Select Sales Rep" },
                                { key: "", label: "John C." },
                                { key: "", label: "Barbara Oaklay" },
                                { key: "", label: "Diana J." },
                                { key: "", label: "Jacob Wilson" },
                            ]}
                        />
                        <BarChartVertical
                            title="Number of Questions Asked"
                            template={NoOfQuesAsked}
                            data={noOfQuesAsked}
                            options={[
                                { key: "", label: "Select Sales Rep" },
                                { key: "", label: "John C." },
                                { key: "", label: "Barbara Oaklay" },
                                { key: "", label: "Diana J." },
                                { key: "", label: "Jacob Wilson" },
                            ]}
                        />
                        <CallSentiment />
                        <BarChartVertical
                            title="Call Disposition"
                            template={CallsDisposition}
                            data={callDisposition}
                            options={[
                                { key: "", label: "Select Sales Rep" },
                                { key: "", label: "John C." },
                                { key: "", label: "Barbara Oaklay" },
                                { key: "", label: "Diana J." },
                                { key: "", label: "Jacob Wilson" },
                            ]}
                        />
                        <NoiseAndVolumeChart />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="w-[100%] mt-4">
                <div className="flex w-[100%] justify-between flex-wrap gap-4 py-4">
                    <DealsCard
                        label="Total Calls For Review"
                        icon="/Images/Icons/Basic/UpArrow.svg"
                        count={100}
                        percent={58.8}
                    />
                    <DealsCard
                        label="On Time Call Reviews"
                        icon="/Images/Icons/Basic/DownArrow.svg"
                        count={76}
                        percent={50}
                    />
                    <DealsCard
                        label="Late Call Reviews"
                        icon="/Images/Icons/Basic/BottomArrow.svg"
                        count={18}
                        percent={27.3}
                    />
                </div>
                <div className="w-[100%] flex justify-between flex-wrap mt-5">
                    <div className="w-[52%] flex flex-col gap-6 ">
                        {/* top scoring calls */}
                        <BarChartVertical
                            getSellingData={getSellingData}
                            title="Selling Skills"
                            data={sellingData}
                            template={SellingSkills}
                            options={[
                                { key: "", label: "Select Sales Rep" },
                                { key: "", label: "John C." },
                                { key: "", label: "Barbara Oaklay" },
                                { key: "", label: "Diana J." },
                                { key: "", label: "Jacob Wilson" },
                            ]}
                        />
                        <BarChartVertical
                            title="High Intent Call Volume"
                            template={HighIntentCallVolume}
                            data={highIntentCallVolume}
                            options={[
                                { key: "", label: "Select Sales Rep" },
                                { key: "", label: "John C." },
                                { key: "", label: "Barbara Oaklay" },
                                { key: "", label: "Diana J." },
                                { key: "", label: "Jacob Wilson" },
                            ]}
                        />
                        <EmotionalAnalysisComp />
                        <BarChartVertical
                            title="Sales Rep Sentiment Score"
                            template={SalesRepSentimentScore}
                            data={salesRepSentimentScore}
                            options={[
                                { key: "", label: "Select Sales Rep" },
                                { key: "", label: "John C." },
                                { key: "", label: "Barbara Oaklay" },
                                { key: "", label: "Diana J." },
                                { key: "", label: "Jacob Wilson" },
                            ]}
                        />
                    </div>
                    <div className="w-[46%] flex flex-col gap-6">
                        <BarChartVertical
                            title="Call Score Graph"
                            template={NoOfQuesAsked}
                            data={avgCallScore}
                            options={[
                                { key: "", label: "Select Sales Rep" },
                                { key: "", label: "John C." },
                                { key: "", label: "Barbara Oaklay" },
                                { key: "", label: "Diana J." },
                                { key: "", label: "Jacob Wilson" },
                            ]}
                        />
                        <BarChartVertical
                            title="Number of Questions Asked"
                            template={NoOfQuesAsked}
                            data={avgCallScore}
                            options={[
                                { key: "", label: "Select Sales Rep" },
                                { key: "", label: "John C." },
                                { key: "", label: "Barbara Oaklay" },
                                { key: "", label: "Diana J." },
                                { key: "", label: "Jacob Wilson" },
                            ]}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CallReviews