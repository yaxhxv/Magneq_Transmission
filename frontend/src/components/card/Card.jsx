import { ArrowUpIcon, ArrowDownIcon } from '../../icons';
import Badge from '../common/Badge';

const Card = ({ title, icon: Icon, value, percent }) => {
  const isPositive = typeof percent === 'string' && percent.trim().startsWith('+');
  const trendColor = isPositive ? 'success' : 'error';
  const TrendIcon = isPositive ? ArrowUpIcon : ArrowDownIcon;

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 min-h-[170px] shadow-sm transition-colors">
      <div className="flex items-center justify-center w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-xl">
        <Icon className="w-6 h-6 text-gray-800 dark:text-white" />
      </div>
      <div className="flex items-end justify-between mt-6">
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">{title}</span>
          <h4 className="mt-2 text-lg font-bold text-gray-800 dark:text-white">
            {value ?? '—'}
          </h4>
        </div>
        <Badge color={trendColor}>
          <TrendIcon />
          {percent ?? '—'}
        </Badge>
      </div>
    </div>
  );
};

export default Card;