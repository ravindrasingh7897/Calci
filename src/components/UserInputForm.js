import React, { useState } from "react";

const UserInputForm = ({ onCalculate }) => {
  const [revenue, setRevenue] = useState("");
  const [growthRate, setGrowthRate] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (revenue > 0 && growthRate >= 0) {
      onCalculate(Number(revenue), Number(growthRate));
    } else {
      alert("Please enter valid values for revenue and growth rate.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>Current Revenue:</label>
        <input
          type="number"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          placeholder="Enter current revenue"
        />
      </div>
      <div>
        <label>Annual Growth Rate (%):</label>
        <div>
          <input
            type="range"
            min="0"
            max="100"
            value={growthRate}
            onChange={(e) => setGrowthRate(e.target.value)}
          />
          <span>{growthRate}%</span>
        </div>
      </div>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default UserInputForm;
