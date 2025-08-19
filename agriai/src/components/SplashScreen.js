import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // Splash duration
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div 
      className="d-flex flex-column justify-content-center align-items-center vh-100 bg-success text-white position-relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="display-3 fw-bold mb-3"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        🌱 AgriAI
      </motion.h1>
      <motion.p
        className="lead"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        AI-powered Farming Assistant
      </motion.p>

      {/* Crop/Grass Loader */}
      <div className="loader-container position-absolute bottom-0 mb-4" style={{ width: "60%", maxWidth: "300px", height: "6px", overflow: "hidden", borderRadius: "3px", backgroundColor: "#006400" }}>
        <motion.div
          style={{
            display: "flex",
            width: "200%",
            height: "100%",
          }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        >
          {/* Repeat small crop/grass images */}
          {Array.from({ length: 20 }).map((_, i) => (
            <img 
              key={i} 
              src="https://i.ibb.co/2s2y6hM/grass.png" 
              alt="grass" 
              style={{ height: "100%", marginRight: "2px" }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}