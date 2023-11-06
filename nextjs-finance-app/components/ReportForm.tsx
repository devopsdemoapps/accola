import React, { useState } from 'react';

interface ReportFormProps {
  onSubmit: (data: { period: string, category: string }) => void;
}

const ReportForm: React.FC<ReportFormProps> = ({ onSubmit }) => {
  const [period, setPeriod] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ period, category });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Period:
        <select value={period} onChange={e => setPeriod(e.target.value)}>
          <option value="">Select period</option>
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="yearly">Yearly</option>
        </select>
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={e => setCategory(e.target.value)} />
      </label>
      <button type="submit">Generate Report</button>
    </form>
  );
};

export default ReportForm;