import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import jsPDF from "jspdf";

Chart.register(...registerables);
const ResultPage = ({ formData }) => {
  const chartData = {
    labels: formData?.KP || [],
    datasets: [
      {
        label: "X Values",
        data: formData?.X || [],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const resultRef = useRef(null);

  const downloadPDF = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    doc.setFont("Inter-Regular", "normal");

    doc.html(resultRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };

  return (
    <div ref={resultRef} className="border rounded-lg p-8">
      <h2 className="mb-4 text-4xl font-bold">Result Page</h2>
      <table className="w-full table-auto text-xl">
        <tbody>
          <tr>
            <td className="font-semibold border px-4 py-2">Project Name:</td>
            <td className="border px-4 py-2">{formData.projectName}</td>
          </tr>
          <tr>
            <td className="font-semibold border px-4 py-2">
              Project Description:
            </td>
            <td className="border px-4 py-2">{formData.projectDescription}</td>
          </tr>
          <tr>
            <td className="font-semibold border px-4 py-2">Client:</td>
            <td className="border px-4 py-2">{formData.client}</td>
          </tr>
          <tr>
            <td className="font-semibold border px-4 py-2">Contractor:</td>
            <td className="border px-4 py-2">{formData.contractor}</td>
          </tr>
          {/* Display other input values in the table */}
          {formData.csvData ? (
            <>
              <tr>
                <td className="font-semibold border px-4 py-2">Max X:</td>
                <td className="border px-4 py-2">{formData.csvData.max_X}</td>
              </tr>
              <tr>
                <td className="font-semibold border px-4 py-2">Min X:</td>
                <td className="border px-4 py-2">{formData.csvData.min_X}</td>
              </tr>
              <tr>
                <td className="font-semibold border px-4 py-2">Max Y:</td>
                <td className="border px-4 py-2">{formData.csvData.max_Y}</td>
              </tr>
              <tr>
                <td className="font-semibold border px-4 py-2">Min Y:</td>
                <td className="border px-4 py-2">{formData.csvData.min_Y}</td>
              </tr>
              <tr>
                <td className="font-semibold border px-4 py-2">Max Z:</td>
                <td className="border px-4 py-2">{formData.csvData.max_Z}</td>
              </tr>
              <tr>
                <td className="font-semibold border px-4 py-2">Min Z:</td>
                <td className="border px-4 py-2">{formData.csvData.min_Z}</td>
              </tr>
            </>
          ) : (
            <>
              <tr>
                <td className="font-semibold border px-4 py-2">Max X:</td>
                <td className="border px-4 py-2">{formData.manual.max_X}</td>
              </tr>
              <tr>
                <td className="font-semibold border px-4 py-2">Min X:</td>
                <td className="border px-4 py-2">{formData.manual.min_X}</td>
              </tr>
              <tr>
                <td className="font-semibold border px-4 py-2">Max Y:</td>
                <td className="border px-4 py-2">{formData.manual.max_Y}</td>
              </tr>
              <tr>
                <td className="font-semibold border px-4 py-2">Min Y:</td>
                <td className="border px-4 py-2">{formData.manual.min_Y}</td>
              </tr>
              <tr>
                <td className="font-semibold border px-4 py-2">Max Z:</td>
                <td className="border px-4 py-2">{formData.manual.max_Z}</td>
              </tr>
              <tr>
                <td className="font-semibold border px-4 py-2">Min Z:</td>
                <td className="border px-4 py-2">{formData.manual.min_Z}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>

      <Bar
        data={chartData}
        options={{
          scales: {
            x: {
              type: "category",
              beginAtZero: true,
            },
            y: {
              type: "linear",
              beginAtZero: true,
            },
          },
        }}
      />

      <button
        onClick={downloadPDF}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download PDF
      </button>
    </div>
  );
};

export default ResultPage;
