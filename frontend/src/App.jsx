import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import DermaForm from "./components/DermaForm";
import DermaAILanding from "./components/SectionFade";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState([]);

  return (
    <Router>
      <Header /> {/* ✅ Global header visible on all pages */}

      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<DermaAILanding />} />

        {/* DermaForm Page */}
        <Route
          path="/dermaai"
          element={
            <div className="app-container">
              <h1 className="app-title">🌸 Derma AI – Skincare Advice</h1>

              <div className="content-wrapper">
                {/* Left Side - Form */}
                <div className="form-section">
                  <DermaForm setAdvice={setAdvice} />
                </div>

                {/* Right Side - Output */}
                <div className="output-section">
                  <div className="advice-box">
                    <h2>Personalized Advice</h2>
                    {advice && advice.length > 0 ? (
                      <ul>
                        {advice.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="placeholder">🩺 Fill the form to get advice!</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
