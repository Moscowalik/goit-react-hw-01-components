import PropTypes from 'prop-types';
import s from './Friendlist.module.css';

function Friendlist({ friends }) {
  return (
    <ul className={s.friendlist}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <span className={friend.isOnline ? s.statusOnline : s.status}></span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

Friendlist.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default Friendlist;
