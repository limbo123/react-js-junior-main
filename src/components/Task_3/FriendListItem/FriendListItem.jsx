import React from "react";
import PropTypes from 'prop-types';

import styles from "./FriendListItem.module.css"
import defaultProfileImg from "../../../static/profile-default.jpg"

const onlineStatusStyle = {
    online: {
        backgroundColor: "#1fb500",
    },

    offline: {
        backgroundColor: "#ff1100",
    }
}

const FriendListItem = ({ avatar, name, isOnline }) => {
    return(
        <li className={styles.item}>
            <span className={styles.status} style={isOnline ? onlineStatusStyle.online : onlineStatusStyle.offline}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
};

FriendListItem.defaultProps = {
    avatar: defaultProfileImg,
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;