import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export const FriendListItem = ({ img, text, status }) => {
  return (
    <li className={styles.status}>
      {status ? (
        <span className={styles.green}>{status}</span>
      ) : (
        <span className={styles.red}>{status}</span>
      )}
      <img className="avatar" src={img} alt="User avatar" width="48" />
      <p className="name">{text}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
