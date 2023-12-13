import React from 'react'
import GaugeChart from 'react-gauge-chart';

const NoiseAndVolumeChart = () => {
    return (
        <div className="w-[700px] h-[250px] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px] ml-[50px]">
            <h3 className='text-black'>Noise and Volume Chart</h3>
            <div className='chart-container flex'>
                <div className=''>
                    <GaugeChart
                        id="gauge-chart1"
                        className="w-[30px]"
                        nrOfLevels={12}
                        colors={["yellow", "red"]}
                        percent={.2}
                        hideText={true}
                        arcWidth={.3}
                    />
                    <span className='text-black'>Noisy</span>
                </div>
                <div className=''>
                    <GaugeChart
                        id="gauge-chart2"
                        className="w-[30px]"
                        nrOfLevels={12}
                        colors={["yellow", "red"]}
                        percent={.2}
                        hideText={true}
                        arcWidth={.3}
                    />
                    <span className='text-black mx-auto'>Low Volume</span>
                </div>
            </div>
        </div>
    )
}

export default NoiseAndVolumeChart