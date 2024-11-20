export const downloadCSV = (projections) => {
    const csvContent =
      "Year,Revenue\n" +
      projections.map((rev, index) => `Year ${index + 1},${rev}`).join("\n");
  
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "revenue_projections.csv";
    link.click();
  };
  