import React from 'react';
import Link from 'next/link';
import { CategoryForm } from '../../components/CategoryForm';
import { CurrencyForm } from '../../components/CurrencyForm';
import { CategoryTable } from '../../components/CategoryTable';
import { CurrencyTable } from '../../components/CurrencyTable';

const AdminPage: React.FC = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <Link href="/admin/categories">Manage Categories</Link>
        <Link href="/admin/currency">Manage Currencies</Link>
      </nav>
      <CategoryForm />
      <CurrencyForm />
      <CategoryTable />
      <CurrencyTable />
    </div>
  );
};

export default AdminPage;