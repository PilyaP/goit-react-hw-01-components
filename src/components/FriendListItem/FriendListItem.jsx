import PropTypes from 'prop-types';
import { FriendsCards,  Cards, Avatar, FriendsNames } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsCards>
      <Cards status={isOnline}></Cards>
      <Avatar src={avatar} alt={name} width="48" />
      <FriendsNames>{name}</FriendsNames>
    </FriendsCards>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};