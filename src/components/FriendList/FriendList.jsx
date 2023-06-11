import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ name, avatar, isOnline }) => (
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  const classIsOnline = [css.status];
  if (isOnline) classIsOnline.push(css.true);

  return (
    <li className={css.item} key={name}>
      <span className={classIsOnline.join(' ')}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width={48} />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
