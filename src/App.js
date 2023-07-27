import React, { useState } from "react";
import Papa from "papaparse";
import Step1 from "./Step1";
import Step2 from "./Step2";
import ResultPage from "./ResultPage";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    client: "",
    contractor: "",
    csvData: null,
    KP: [],
    X: [],
    manual: {
      max_X: "",
      min_X: "",
      max_Y: "",
      min_Y: "",
      max_Z: "",
      min_Z: "",
    },
  });

  const nextStep = () => {
    setStep(2);
  };

  const fileUpload = (e) => {
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const csvData = results.data;
        const KP = [];
        const X = [];

        let max_X = Number.MIN_SAFE_INTEGER;
        let min_X = Number.MAX_SAFE_INTEGER;
        let max_Y = Number.MIN_SAFE_INTEGER;
        let min_Y = Number.MAX_SAFE_INTEGER;
        let max_Z = Number.MIN_SAFE_INTEGER;
        let min_Z = Number.MAX_SAFE_INTEGER;

        csvData.forEach((row) => {
          const x = parseFloat(row.X);
          const y = parseFloat(row.Y);
          const z = parseFloat(row.Z);

          max_X = Math.max(max_X, x);
          min_X = Math.min(min_X, x);
          max_Y = Math.max(max_Y, y);
          min_Y = Math.min(min_Y, y);
          max_Z = Math.max(max_Z, z);
          min_Z = Math.min(min_Z, z);

          KP.push(row.KP);
          X.push(row.X);
        });

        setFormData({
          ...formData,
          KP,
          X,
          csvData: {
            max_X,
            min_X,
            max_Y,
            min_Y,
            max_Z,
            min_Z,
          },
        });
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      style={{
        backgroundImage: "url('path_to_your_background_image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white rounded-lg shadow-lg p-8 w-2/3">
        {step === 1 && (
          <Step1
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <Step2
            formData={formData}
            setFormData={setFormData}
            fileUpload={fileUpload}
            handleSubmit={handleSubmit}
          />
        )}
        {step === 3 && <ResultPage formData={formData} />}

        {step === 3 && <table className="table-auto w-full mt-8"></table>}
      </div>
    </div>
  );
};

export default App;
