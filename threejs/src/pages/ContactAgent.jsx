import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactAgent = () => {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(""); // state for selected agent
  const [floorPlan, setFloorPlan] = useState(null); // state for file upload

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const res = await axios.get("http://localhost:5004/api/agents");
        setAgents(res.data);
      } catch (err) {
        console.error("Error fetching agents:", err);
      }
    };
    fetchAgents();
  }, []);

  // Handle agent selection
  const handleAgentChange = (e) => {
    setSelectedAgent(e.target.value);
  };

  // Handle floor plan file selection
  const handleFileChange = (e) => {
    setFloorPlan(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedAgent || !floorPlan) {
      alert("Please select an agent and upload a floor plan.");
      return;
    }

    const formData = new FormData();
    formData.append("agentId", selectedAgent);
    formData.append("floorPlan", floorPlan);

    try {
      const res = await axios.post("http://localhost:5004/api/floorplans/upload-floorplan", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Floor plan uploaded successfully!");
      // Optionally reset the form or handle success
    } catch (err) {
      console.error("Error uploading floor plan:", err);
      alert("Error uploading floor plan.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact an Agent</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-semibold">Select an Agent</label>
          <select
            className="w-full p-3 border rounded-md"
            value={selectedAgent}
            onChange={handleAgentChange}
          >
            <option value="">Select an agent</option>
            {agents.map((agent) => (
              <option key={agent._id} value={agent._id}>
                {agent.username}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-lg font-semibold">Upload 2D Floor Plan</label>
          <input
            type="file"
            className="w-full p-3 border rounded-md"
            onChange={handleFileChange}
            accept="image/*, .pdf"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactAgent;
