export const FriendListItem = ({ img, text, status }) => {
  return (
    <li className="item">
      <span className="status">{status}</span>
      <img className="avatar" src={img} alt="User avatar" width="48" />
      <p className="name">{text}</p>
    </li>
  );
};
