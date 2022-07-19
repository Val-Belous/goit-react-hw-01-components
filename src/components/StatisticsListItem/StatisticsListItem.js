import PropTypes from 'prop-types';
import styles from './StatisticsListItem.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsListItem = ({ text, percentage }) => {
  return (
    <li
      className={styles.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={styles.label}>{text}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsListItem.propTypes = {
  text: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
