import { BarChart } from '@mui/x-charts';
import React from 'react'


const GroupBarChartVertical = ({
    title = "",
    groups = [
        { label: "SDR/BDM", color: "#FE5143", key: "sdr" },
        { label: "Prospect", color: "#FFB839", key: "prospect" }
    ],
    data,
    template
}: any) => {
    const xLabels = template?.labels?.map((label: string, index: number) => template?.mappings?.[label]);

    let series: any[] = [];

    groups?.forEach((group: any, gIdx: number) => {
        const barData = template?.labels?.map((label: string, index: number) => {
            return data?.[group?.key]?.[label] || 0;
        });
        const seriesEntry = {
            data: barData,
            color: group?.color,
            label: group?.label,
        };
        series.push(seriesEntry);
    });

    return (
        <div className="w-[700px] h-[450px] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px] ml-[50px]">
            <h1 className='text-[20px] font-medium text-[#3F434A] tracking-wide'>{title}</h1>
            <div className='chart-container'>
                {
                    (data) && (
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: xLabels }]}
                            series={series}
                            width={580}
                            height={340}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default GroupBarChartVertical