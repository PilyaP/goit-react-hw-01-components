import PropTypes from 'prop-types';
import {
    ProfileName,
    Description,
    Avatar,
    Name,
    Tag,
    Location,
    StatsList,
    StatsItem,
    Label,
    Quantity,
} from "./Profiled.styled";
export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileName key={username}>
            <Description>
                <Avatar src={avatar} alt={username}/>
                <Name>{username}</Name>
                <Tag>{tag}</Tag>
                <Location>{location}</Location>
            </Description>

        <StatsList>
            <StatsItem>
                <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </StatsItem>
                <StatsItem>
                <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </StatsItem>
                <StatsItem>
                <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </StatsItem>

        </StatsList>
        </ProfileName>
            );

};


Profile.propTypes = {
  username: PropTypes.string.isRequired, 
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};