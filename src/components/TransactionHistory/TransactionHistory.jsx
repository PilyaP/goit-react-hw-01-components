import PropTypes from 'prop-types';
import {
    Transactions,
    TableThead,
    Table,
    TableItem,
    HistoryTableData,
    Data,
    DataItem,
} from "./TransactionHistory.styled";

export const TransactionHistory = ({items}) => {
    return (
    <Transactions>
      <TableThead>
        <Table>
          <TableItem>Type</TableItem>
          <TableItem>Amount</TableItem>
          <TableItem>Currency</TableItem>
        </Table>
      </TableThead>
      <HistoryTableData>
        {items.map(({ id, type, amount, currency }) => (
          <Data key={id} DataType={type}>
            <DataItem>{type}</DataItem>
            <DataItem>{amount}</DataItem>
            <DataItem>{currency}</DataItem>
          </Data>
        ))}
      </HistoryTableData>
    </Transactions>
  );
};


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
    ).isRequired,
    };
