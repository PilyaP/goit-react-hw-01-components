
import PropTypes from 'prop-types';
import { Friends } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';






export const FriendList = ({ friends }) => {
  
    return (
        <Friends>
            {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                
                />
            
            ))}
        </Friends>
    );
}; 


FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};