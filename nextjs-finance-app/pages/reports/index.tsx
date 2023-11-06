import React from 'react';
import Link from 'next/link';
import { ReportTable } from '../../components/ReportTable';

const Reports: React.FC = () => {
  return (
    <div>
      <h1>Reports</h1>
      <nav>
        <ul>
          <li>
            <Link href="/reports/monthly">
              <a>Monthly</a>
            </Link>
          </li>
          <li>
            <Link href="/reports/weekly">
              <a>Weekly</a>
            </Link>
          </li>
          <li>
            <Link href="/reports/yearly">
              <a>Yearly</a>
            </Link>
          </li>
          <li>
            <Link href="/reports/categories">
              <a>By Categories</a>
            </Link>
          </li>
        </ul>
      </nav>
      <ReportTable />
    </div>
  );
};

export default Reports;