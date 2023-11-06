import React from 'react';
import { Report } from '../api/report';

interface ReportTableProps {
  reports: Report[];
}

const ReportTable: React.FC<ReportTableProps> = ({ reports }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((report) => (
          <tr key={report.id}>
            <td>{report.category}</td>
            <td>{report.amount}</td>
            <td>{new Date(report.date).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportTable;