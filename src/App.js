import React, { useState } from "react";
import UserInputForm from "./components/UserInputForm";
import ProjectedRevenueTable from "./components/ProjectedRevenueTable";
import RevenueSummary from "./components/RevenueSummary";
import RevenueChart from "./components/RevenueChart";
import Navbar from "./components/Navbar";
import { downloadCSV } from "./utils/csvUtils";
import "./App.css";

const App = () => {
  const [projections, setProjections] = useState([]);

  const handleCalculate = (revenue, growthRate) => {
    const calculatedProjections = [];
    for (let i = 0; i < 5; i++) {
      revenue += revenue * (growthRate / 100);
      calculatedProjections.push(Math.round(revenue));
    }
    setProjections(calculatedProjections); // Updates chart data only once
  };

  const handleDownload = () => {
    if (projections.length > 0) {
      downloadCSV(projections);
    } else {
      alert("No projections to download. Please calculate first.");
    }
  };

  return (
    <div className="full">
      <Navbar />
      <div className="app-container">
        <h1 style={{ textAlign: 'center' }}>Revenue Upside Calculator</h1>

        <UserInputForm onCalculate={handleCalculate} />
        {projections.length > 0 && (
          <>
            <ProjectedRevenueTable projections={projections} />
            <RevenueSummary projections={projections} />
            <RevenueChart projections={projections} />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <button onClick={handleDownload} className="download-btn">
                Download CSV
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
