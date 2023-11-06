import React from 'react';
import Link from 'next/link';
import { GetServerSideProps } from 'next';

import { ExpenseTable } from '../components/ExpenseTable';
import { CategoryTable } from '../components/CategoryTable';
import { CurrencyTable } from '../components/CurrencyTable';
import { ReportTable } from '../components/ReportTable';

import styles from '../styles/Home.module.css';

type Props = {
  expenses: any[],
  categories: any[],
  currencies: any[],
  reports: any[]
};

const Home: React.FC<Props> = ({ expenses, categories, currencies, reports }) => {
  return (
    <div className={styles.container}>
      <h1>Personal Finance Tracker</h1>
      <Link href="/admin">
        <a>Admin Panel</a>
      </Link>
      <ExpenseTable expenses={expenses} />
      <CategoryTable categories={categories} />
      <CurrencyTable currencies={currencies} />
      <ReportTable reports={reports} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const resExpenses = await fetch('http://localhost:3000/api/expense');
  const expenses = await resExpenses.json();

  const resCategories = await fetch('http://localhost:3000/api/category');
  const categories = await resCategories.json();

  const resCurrencies = await fetch('http://localhost:3000/api/currency');
  const currencies = await resCurrencies.json();

  const resReports = await fetch('http://localhost:3000/api/report');
  const reports = await resReports.json();

  return {
    props: {
      expenses,
      categories,
      currencies,
      reports
    },
  };
};

export default Home;