import PropTypes from 'prop-types';
import { getRandomColor } from 'components/getRandomColor';
import {
    StatSection,
    Title,
    StatsList,
    StatsItem,
    Label,
    Quantity,
} from './Statistics.styled';



export const Statistics = ({ title, stats }) => {
    return (
        <StatSection>
            <Title>{title}</Title>
            <StatsList>
                {stats.map(({ id, label, percentage }) => (
                    <StatsItem bgColor={getRandomColor()} key={id}>
                        <Label>{label}</Label>
                        <Quantity>{percentage}</Quantity>
                    </StatsItem>
                ))}
            </StatsList>
        </StatSection>
    );
};


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};