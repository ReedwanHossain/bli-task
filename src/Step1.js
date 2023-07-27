import React from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold">Step 1</h2>
      <form onSubmit={nextStep}>
        <div className="mb-4">
          <label
            htmlFor="projectName"
            className="block text-lg font-semibold mb-2"
          >
            Project Name:
          </label>
          <input
            type="text"
            id="projectName"
            value={formData.projectName}
            onChange={(e) =>
              setFormData({ ...formData, projectName: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="projectDescription"
            className="block text-lg font-semibold mb-2"
          >
            Project Description:
          </label>
          <input
            type="text"
            id="projectDescription"
            value={formData.projectDescription}
            onChange={(e) =>
              setFormData({ ...formData, projectDescription: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="client" className="block text-lg font-semibold mb-2">
            Client:
          </label>
          <input
            type="text"
            id="client"
            value={formData.client}
            onChange={(e) =>
              setFormData({ ...formData, client: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="contractor"
            className="block text-lg font-semibold mb-2"
          >
            Contractor:
          </label>
          <input
            type="text"
            id="contractor"
            value={formData.contractor}
            onChange={(e) =>
              setFormData({ ...formData, contractor: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Step1;
