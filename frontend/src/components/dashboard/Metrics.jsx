import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  SalesBox,
  BoxIcon,
  BoltIcon,
  BriefCase,
} from '../../icons';
import Card from '../card/Card';

const Metrics = () => {
  const [metrics, setMetrics] = useState({
    Sales: null,
    purchase: null,
    po: null,
    fg: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMetrics = async () => {
      try {
        const res = await axios.get('/api/metrics');
        setMetrics(res.data);
      } catch (err) {
        console.error('Failed to fetch metrics:', err);
      } finally {
        setLoading(false);
      }
    };

    getMetrics();
  }, []);

  const { Sales, purchase, po, fg } = metrics;

  if (loading) return null;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
      <Card
        title="Sales"
        icon={SalesBox}
        value={Sales?.amount}
        percent={Sales?.percent}
        className="min-h-[160px] p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md rounded-xl"
      />
      <Card
        title="Purchase"
        icon={BoxIcon}
        value={purchase?.amount}
        percent={purchase?.percent}
        className="min-h-[160px] p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md rounded-xl"
      />
      <Card
        title="PO"
        icon={BriefCase}
        value={po?.quantity}
        percent={po?.percent}
        className="min-h-[160px] p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md rounded-xl"
      />
      <Card
        title="Finished Goods"
        icon={BoltIcon}
        value={fg?.quantity}
        percent={fg?.percent}
        className="min-h-[160px] p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md rounded-xl"
      />
    </div>
  );
};

export default Metrics;