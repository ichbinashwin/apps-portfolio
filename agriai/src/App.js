import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import CropUpload from "./components/CropUpload";
import Weather from "./components/Weather";
import MandiPrices from "./components/MandiPrices";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center text-success">🌱 AgriAI</h1>
        <p className="text-center">AI-powered farming assistant for better yield and income</p>
        <div className="row mt-5">
          <div className="col-md-6">
            <Chatbot />
            <Weather />
          </div>
          <div className="col-md-6">
            <CropUpload />
            <MandiPrices />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
