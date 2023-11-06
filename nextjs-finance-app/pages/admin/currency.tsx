import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import CurrencyForm from '../../components/CurrencyForm';
import CurrencyTable from '../../components/CurrencyTable';
import { Currency } from '../../api/currency';

const CurrencyPage: NextPage = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const fetchCurrencies = async () => {
    const res = await fetch('/api/currency');
    const data = await res.json();
    setCurrencies(data);
  };

  const addCurrency = async (currency: Currency) => {
    const res = await fetch('/api/currency', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currency),
    });
    if (res.ok) {
      fetchCurrencies();
    }
  };

  return (
    <div>
      <h1>Manage Currencies</h1>
      <CurrencyForm onAdd={addCurrency} />
      <CurrencyTable currencies={currencies} />
    </div>
  );
};

export default CurrencyPage;