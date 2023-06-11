import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.titles}>Type</th>
          <th className={css.titles}>Amount</th>
          <th className={css.titles}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tableList}>
            <td className={css.tableItem}>{type}</td>
            <td className={css.tableItem}>{amount}</td>
            <td className={css.tableItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
