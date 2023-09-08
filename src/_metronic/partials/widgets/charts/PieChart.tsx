import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { KTIcon } from '../../../helpers';
import { Dropdown1 } from '../../content/dropdown/Dropdown1';

const PieChart: React.FC = () => {
    const chartData = {
        series: [1, 2],

        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
            labels: ["Existing Customer", "New Customer"],
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270,
                },
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                type: 'gradient',
            },
            legend: {
                formatter: function (val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
                },
            },

            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],
        } as ApexOptions,
    };

    return (
        <div className='card card-xl-stretch mb-xl-8 '>
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>AWS Cost Recommendation</span>
                </h3>

            </div>
            <div className='card-body'>
                <div id='kt_charts_widget_1_chart' style={{ height: '350px' }} >

                    <ReactApexChart
                        options={chartData.options}
                        series={chartData.series}
                        type="donut"
                        width={450}
                    />
                </div>
            </div>

        </div >





    );
};

export default PieChart;
