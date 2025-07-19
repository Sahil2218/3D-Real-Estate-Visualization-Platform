import React from "react";
import { useLocation } from "react-router-dom";
import ModelViewer from "../components/ModelViewer";

const ViewerPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const modelPath = query.get("model");

  if (!modelPath) {
    return <h2 style={{ textAlign: "center", marginTop: "2rem" }}>⚠️ No model path provided.</h2>;
  }

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
      <ModelViewer glbPath={`/models/${modelPath}`} />
    </div>
  );
};

export default ViewerPage;
