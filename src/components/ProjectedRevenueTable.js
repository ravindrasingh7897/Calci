import React from "react";

const ProjectedRevenueTable = ({ projections }) => {
  const highestGrowthYear = projections.reduce((max, curr, index, arr) => {
    if (index > 0) {
      const growth = curr - arr[index - 1];
      return growth > max.growth ? { year: index + 1, growth } : max;
    }
    return max;
  }, { year: 0, growth: 0 });

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Projected Revenue</th>
          </tr>
        </thead>
        <tbody>
          {projections.map((revenue, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index + 1 === highestGrowthYear.year ? "#d4edda" : "transparent",
              }}
            >
              <td>Year {index + 1}</td>
              <td>${revenue.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectedRevenueTable;
