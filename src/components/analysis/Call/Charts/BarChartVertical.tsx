import { BarChart } from '@mui/x-charts';
import React from 'react'

const Chart = ({ title, percent }: any) => {
    return (
        <div className="w-[10px] h-[100%] flex flex-col items-center relative">
            <div className="w-[16px] h-[100%] mb-[15px] bg-[#f7f8ff] rounded-[19px] relative overflow-hidden">
                <div
                    className="w-[100%] bg-renal-blue bottom-0 absolute rounded-[19px]"
                    style={{ height: percent }}
                ></div>
            </div>
            <div className="text-[10px] min-h-[40px] flex items-center justify-center tracking-sm font-medium text-[#8A9099] text-center absolute bottom-[-35px]">
                {title}
            </div>
        </div>
    );
};

const ChartContainer = ({ children }: any) => {
    return (
        <div className="w-[100%] h-[280px] mt-[40px] flex">
            <div className="w-[8%] h-[100%] flex flex-col justify-between items-center text-[#8A9099]">
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

const BarChartVertical = ({
    title
}: any) => {
    const formattedData = [
        { label: "Empathy", percent: 20 },
        { label: "Listening Skills", percent: 20 },
        { label: "Confidence", percent: 20 },
        { label: "Urgency Creation", percent: 20 },
        { label: "Positive Energy", percent: 20 },
        { label: "Rapport Building", percent: 20 },
        { label: "Politeness", percent: 20 },
    ];

    return (
        <div className="w-[700px] h-[450px] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px] ml-[50px]">
            <h3 className='text-black'>{title}</h3>
            <div className='chart-container'>
                {/* <BarChart 
                    xAxis
                /> */}
                <ChartContainer>
                    {
                        formattedData?.map((barItem: any, index: number) => (
                            <Chart
                                title={barItem?.label}
                                percent={`${barItem?.percent}%`}
                                key={index}
                            />
                        ))
                    }
                </ChartContainer>
            </div>
        </div>
    )
}

export default BarChartVertical