import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from 'react-apexcharts'
import ChartTab from '../common/ChartTab'

const StatisticsChart = () => {
  const [sales, setSales] = useState([])
  const [revenue, setRevenue] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/chartData') //Change this as per our API endpoint
        setSales(res.data.sales)
        setRevenue(res.data.revenue)
      } catch (error) {
        console.error('Error fetching chart data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const series = [
    { name: 'Sales', data:  [180, 190, 170,180, 190, 170,180, 190, 170] },
    { name: 'Revenue', data: [40, 30, 50,40, 30, 50,40, 30, 50] },
  ]

  const options = {
    chart: {
      type: 'area',
      height: 310,
      fontFamily: 'Outfit, sans-serif',
      toolbar: { show: false },
    },
    colors: ['#465FFF', '#9CB9FF'],
    stroke: { curve: 'straight', width: [2, 2] },
    fill: {
      type: 'gradient',
      gradient: { opacityFrom: 0.55, opacityTo: 0 },
    },
    markers: {
      size: 0,
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: { size: 6 },
    },
    grid: {
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    dataLabels: { enabled: false },
    tooltip: {
      enabled: true,
      x: { format: 'dd MMM yyyy' },
    },
    xaxis: {
      type: 'category',
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12px',
          colors: ['#6B7280'],
        },
      },
      title: { text: '', style: { fontSize: '0px' } },
    },
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Statistics
          </h3>
          <p className="mt-1 text-gray-500 text-sm dark:text-gray-400">
            Target you’ve set for each month
          </p>
        </div>
        <div className="flex items-start w-full gap-3 sm:justify-end">
          <ChartTab />
        </div>
      </div>
      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[1000px] xl:min-w-full">
          {!loading && (
            <Chart options={options} series={series} type="area" height={310} />
          )}
        </div>
      </div>
    </div>
  )
}

export default StatisticsChart