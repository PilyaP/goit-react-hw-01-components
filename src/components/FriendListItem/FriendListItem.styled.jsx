import styled from '@emotion/styled';


export const FriendsCards = styled.li`
height: 60px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  gap: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 30px;
`;
export const FriendsNames= styled.p`
font-size: 22px;
  font-weight: bold;
  color: #000000;
`;

export const Cards = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    switch (status) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'black';
    }
  }};
`;