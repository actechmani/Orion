import {ApexOptions} from 'apexcharts'
import React from 'react'
import ReactApexChart from 'react-apexcharts'

const PieChart: React.FC = () => {
  const chartData = {
    series: [25, 48],

    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      labels: ['Existing Customer', 'New Customer'],
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
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex]
        },
        position: 'top',
        horizontalAlign: 'left',
        itemMargin: {
          horizontal: 25,
          vertical: 0,
        },
      },

      grid: {
        padding: {
          top: 0,
          left: -20,
          right: -40,
          bottom: -20,
        },
      },
      //

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'top',
              horizontalAlign: 'left',
            },
          },
        },
      ],
    } as ApexOptions,
  }

  return (
    <div className='card card-xl-stretch mb-xl-8  '>
      <div className='card-header border-0  ps-10 mb-0 pb-0'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-0 '>AWS Cost Recommendation</span>
        </h3>
      </div>
      <div className='card-body ps-0 pe-0 pt-0 mt-0'>
        <div id='kt_charts_widget_1_chart' className='mt-0 pt-0 mb-0 ' style={{height: '230px'}}>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type='donut'
            width={300}
          />
        </div>
      </div>
    </div>
  )
}

export default PieChart
