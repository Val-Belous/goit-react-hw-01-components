import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionsItem = ({ type, amount, currency }) => {
  return (
    <tr className={styles.table}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionsItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
