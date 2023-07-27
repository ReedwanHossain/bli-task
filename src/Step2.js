import React from "react";

const Step2 = ({ formData, setFormData, fileUpload, handleSubmit }) => {
  return (
    <div className="rounded-lg shadow-lg p-8">
      <h2 className="mb-4 text-3xl font-bold">Step 2</h2>
      <form onSubmit={handleSubmit}>
        <p className="mb-4">
          <span className="font-semibold">Project Name:</span>{" "}
          {formData.projectName}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Project Description:</span>{" "}
          {formData.projectDescription}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Client:</span> {formData.client}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Contractor:</span>{" "}
          {formData.contractor}
        </p>

        <label htmlFor="fileUpload" className="block mb-2">
          File Upload (CSV only):
        </label>
        <input
          type="file"
          id="fileUpload"
          accept=".csv"
          onChange={fileUpload}
          className="mb-4 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {formData.csvData ? (
          <>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="max_X" className="block mb-2">
                  Max X:
                </label>
                <input
                  type="number"
                  id="max_X"
                  value={formData.csvData.max_X}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      csvData: { ...formData.csvData, max_X: e.target.value },
                    })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="min_X" className="block mb-2">
                  Min X:
                </label>
                <input
                  type="number"
                  id="min_X"
                  value={formData.csvData.min_X}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      csvData: { ...formData.csvData, min_X: e.target.value },
                    })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="max_Y" className="block mb-2">
                  Max Y:
                </label>
                <input
                  type="number"
                  id="max_Y"
                  value={formData.csvData.max_X}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      csvData: { ...formData.csvData, max_X: e.target.value },
                    })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="min_Y" className="block mb-2">
                  Min Y:
                </label>
                <input
                  type="number"
                  id="min_Y"
                  value={formData.csvData.min_Y}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      csvData: { ...formData.csvData, min_Y: e.target.value },
                    })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="max_Z" className="block mb-2">
                  Max Z:
                </label>
                <input
                  type="number"
                  id="max_Z"
                  value={formData.csvData.max_Z}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      csvData: { ...formData.csvData, max_Z: e.target.value },
                    })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="min_Z" className="block mb-2">
                  Min Z:
                </label>
                <input
                  type="number"
                  id="min_Z"
                  value={formData.csvData.min_Z}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      csvData: { ...formData.csvData, min_Z: e.target.value },
                    })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="max_X" className="block mb-2">
                  Max X:
                </label>
                <input
                  type="number"
                  id="max_X"
                  value={formData.manual.max_X}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      manual: { ...formData.manual, max_X: e.target.value },
                    })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="min_X" className="block mb-2">
                  Min X:
                </label>
                <input
                  type="number"
                  id="min_X"
                  value={formData.manual.min_X}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      manual: { ...formData.manual, min_X: e.target.value },
                    })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="max_Y" className="block mb-2">
                  Max Y:
                </label>
                <input
                  type="number"
                  id="max_Y"
                  value={formData.manual.max_Y}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      manual: { ...formData.manual, max_Y: e.target.value },
                    })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="min_Y" className="block mb-2">
                  Min Y:
                </label>
                <input
                  type="number"
                  id="min_X"
                  value={formData.manual.min_Y}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      manual: { ...formData.manual, min_Y: e.target.value },
                    })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="max_Z" className="block mb-2">
                  Max Z:
                </label>
                <input
                  type="number"
                  id="max_Z"
                  value={formData.manual.max_Z}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      manual: { ...formData.manual, max_Z: e.target.value },
                    })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="min_Z" className="block mb-2">
                  Min Z:
                </label>
                <input
                  type="number"
                  id="min_Z"
                  value={formData.manual.min_Z}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      manual: { ...formData.manual, min_Z: e.target.value },
                    })
                  }
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Step2;
