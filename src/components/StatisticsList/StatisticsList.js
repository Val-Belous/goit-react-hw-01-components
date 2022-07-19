import PropTypes from 'prop-types';
import { StatisticsListItem } from 'components/StatisticsListItem/StatisticsListItem';
import styles from './StatisticsList.module.css';

export const StatisticsList = ({ stats }) => {
  return (
    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsListItem key={id} text={label} percentage={percentage} />
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
