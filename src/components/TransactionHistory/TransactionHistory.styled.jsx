import styled from '@emotion/styled';



export const Transactions = styled.table`
    width: 750px;
  border-collapse: collapse;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
export const TableThead = styled.thead`
    height: 30px;
  background-color: blueviolet;
`;
export const Table = styled.tr`
    text-transform: uppercase;
`;
export const TableItem = styled.th`
    width: 250px;
`;
    export const HistoryTableData = styled.tbody`
`;
    export const Data = styled.tr`
  height: 30px;
  text-transform: capitalize;
  background-color: ${({ DataType }) => {
    switch (DataType) {
      case 'deposit':
        return 'tomato';
      case 'invoice':
        return 'green';
      case 'withdrawal':
        return 'yellow';
      case 'payment':
        return '#87CEFA';
      default:
        return 'white';
    }
  }};
`;

export const DataItem = styled.td`
      width: 250px;
  padding-left: 100px;
`;