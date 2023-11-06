import React from 'react';
import { Currency } from '../api/currency';

interface CurrencyTableProps {
  currencies: Currency[];
}

const CurrencyTable: React.FC<CurrencyTableProps> = ({ currencies }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Currency Code</th>
          <th>Currency Name</th>
        </tr>
      </thead>
      <tbody>
        {currencies.map((currency) => (
          <tr key={currency.id}>
            <td>{currency.code}</td>
            <td>{currency.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CurrencyTable;