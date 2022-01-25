import React from "react";
import PropTypes from 'prop-types';

import styles from "./Profile.module.css";
import defaultProfileImg from "../../../static/profile-default.jpg"

const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={styles.avatar}
    />
    <p className={styles.name}>{username}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
  </div>
    )
};

Profile.defaultProps = {
  avatar: defaultProfileImg,
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.exact({
        likes: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
    })
};

export default Profile;