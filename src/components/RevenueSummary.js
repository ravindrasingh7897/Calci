import React from "react";

const RevenueSummary = ({ projections }) => {
  const totalRevenue = projections.reduce((sum, rev) => sum + rev, 0);
  const avgGrowthRate = ((projections[projections.length - 1] / projections[0]) ** (1 / 5) - 1) * 100;

  return (
    <div className="summary-container">
      
      <h3>Revenue Upside Summary</h3>
      <p>Total Revenue (5 years): ${totalRevenue.toLocaleString()}</p>
      <p>Average Annual Growth: {avgGrowthRate.toFixed(2)}%</p>
    </div>
  );
};

export default RevenueSummary;
