import { BarChart } from '@mui/x-charts';
import React from 'react'


const BarChartVertical = ({
    title = "",
    data,
    template
}: any) => {
    const xLabels = template?.labels?.map((label: string, index: number) => template?.mappings?.[label]);

    const barData = template?.labels?.map((label: string, index: number) => {
        return data?.[label] || 0;
    });

    return (
        <div className="w-[700px] h-[450px] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px] ml-[50px]">
            <h3 className='text-black'>{title}</h3>
            <div className='chart-container'>
                {
                    (data) && (
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: xLabels }]}
                            series={[{ data: barData }]}
                            width={580}
                            height={340}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default BarChartVertical