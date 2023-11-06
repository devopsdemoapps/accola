import { NextPage } from 'next';
import { ReportTable } from '../../components/ReportTable';
import { useEffect, useState } from 'react';
import { getMonthlyReport } from '../../api/report';

const MonthlyReport: NextPage = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    getMonthlyReport().then((data) => setReport(data));
  }, []);

  return (
    <div>
      <h1>Monthly Report</h1>
      <ReportTable report={report} />
    </div>
  );
};

export default MonthlyReport;