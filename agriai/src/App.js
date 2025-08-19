import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import CropUpload from "./components/CropUpload";
import Weather from "./components/Weather";
import MandiPrices from "./components/MandiPrices";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <SplashScreen key="splash" onFinish={() => setLoading(false)} />
        ) : (
          <motion.div
            className="container mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Navbar />
            <h1 className="text-center text-success">🌱 AgriAI</h1>
            <p className="text-center">AI-powered farming assistant for better yield and income</p>
            <div className="row mt-5 g-4">
              <div className="col-12 col-lg-6">
                <Chatbot />
                <Weather />
              </div>
              <div className="col-12 col-lg-6">
                <CropUpload />
                <MandiPrices />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;