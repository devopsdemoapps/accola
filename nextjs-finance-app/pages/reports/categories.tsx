import { NextPage } from 'next';
import { ReportTable } from '../../components/ReportTable';
import { useEffect, useState } from 'react';

interface CategoryReport {
  category: string;
  total: number;
}

const CategoriesReport: NextPage = () => {
  const [reports, setReports] = useState<CategoryReport[]>([]);

  useEffect(() => {
    fetch('/api/report/categories')
      .then(response => response.json())
      .then(data => setReports(data));
  }, []);

  return (
    <div>
      <h1>Expenses by Category</h1>
      <ReportTable reports={reports} />
    </div>
  );
};

export default CategoriesReport;