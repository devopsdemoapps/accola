import React, { useState } from 'react';

interface CurrencyFormProps {
  onCurrencyAdd: (currency: string) => void;
}

const CurrencyForm: React.FC<CurrencyFormProps> = ({ onCurrencyAdd }) => {
  const [currency, setCurrency] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onCurrencyAdd(currency);
    setCurrency('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="currency">Currency:</label>
      <input
        type="text"
        id="currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        required
      />
      <button type="submit">Add Currency</button>
    </form>
  );
};

export default CurrencyForm;