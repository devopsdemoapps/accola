import React, { useEffect, useState } from 'react';
import { ReportTable } from '../../components/ReportTable';
import { ReportForm } from '../../components/ReportForm';
import { getYearlyReport } from '../../api/report';

const YearlyReport: React.FC = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    const data = await getYearlyReport();
    setReport(data);
  };

  return (
    <div>
      <h1>Yearly Report</h1>
      <ReportForm onFetchReport={fetchReport} />
      <ReportTable report={report} />
    </div>
  );
};

export default YearlyReport;