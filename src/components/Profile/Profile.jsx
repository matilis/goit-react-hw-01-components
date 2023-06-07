import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="Avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li>
        <span className={css.category}>Followers</span>
        <span className={css.result}>{stats.followers}</span>
      </li>
      <li>
        <span className={css.category}>Views</span>
        <span className={css.result}>{stats.views}</span>
      </li>
      <li>
        <span className={css.category}>Likes</span>
        <span className={css.result}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
