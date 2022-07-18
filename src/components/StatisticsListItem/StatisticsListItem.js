// import PropTypes from 'prop-types';

export const StatisticsListItem = ({ text, percentage }) => {
  return (
    <li className="item">
      <span className="label">{text}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

// StatisticsListItem.propTypes = {
//   text: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
// };
