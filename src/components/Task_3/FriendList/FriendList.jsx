import React from "react";
import PropTypes from 'prop-types';
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {

    return (
        <ul className="friend-list">
        {friends.map(friend => {
            return (
                <FriendListItem 
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
            );
        })}
    </ul>
    );

};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}

export default FriendList;