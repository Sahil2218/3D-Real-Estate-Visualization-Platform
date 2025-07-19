import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ModelsPreview from './pages/ModelsPreview';
import UploadProperty from './pages/UploadProperty';
import ViewerPage from './pages/ViewerPage';
import ContactAgent from './pages/ContactAgent';
import AgentLogin from './pages/AgentLogin';
import AgentSignup from "./pages/AgentSignup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models-preview" element={<ModelsPreview />} />
        <Route path="/upload" element={<UploadProperty />} />
        <Route path="/viewer" element={<ViewerPage />} />
        <Route path="/contact-agent" element={<ContactAgent />} />
        <Route path="/agent-login" element={<AgentLogin />} />
        <Route path="/agent-signup" element={<AgentSignup />} />
        <Route path="/contact-agent" element={<ContactAgent />} />
      </Routes>
    </Router>
  );
};

export default App;
