import React from 'react';
import Metrics from '../components/dashboard/Metrics';
import StatisticsChart from '../components/dashboard/StatisticsChart';
import SalesTable from '../components/dashboard/SalesTable';

const Home = () => {
  return (
      <div className="grid grid-cols-12 gap-4 md:gap-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 md:p-6 rounded-lg shadow-sm">
        <div className="col-span-12 space-y-6 ">
          <Metrics />
        </div>

        <div className="col-span-12 ">
          <SalesTable />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>
      </div>
  );
};

export default Home;