import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ReportTable from '../../components/ReportTable';
import ReportForm from '../../components/ReportForm';
import { Report } from '../../api/report';

const WeeklyReport: NextPage = () => {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    fetch('/api/report/weekly')
      .then(response => response.json())
      .then(data => setReports(data));
  }, []);

  return (
    <div>
      <h1>Weekly Expense Report</h1>
      <ReportForm />
      <ReportTable reports={reports} />
    </div>
  );
};

export default WeeklyReport;