// import PropTypes from 'prop-types';
import { StatisticsListItem } from 'components/StatisticsListItem/StatisticsListItem';

export const StatisticsList = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <StatisticsListItem key={id} text={label} percentage={percentage} />
      ))}
    </ul>
  );
};

// StatisticsList.propTypes = {
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ),
// };
