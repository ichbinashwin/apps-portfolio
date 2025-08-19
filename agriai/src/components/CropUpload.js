import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CropUpload() {
  const [file, setFile] = useState(null);

  return (
    <motion.div 
      className="card mb-4 shadow-sm"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="card-header bg-light fw-bold">📸 Crop Disease Detection (Demo)</div>
      <div className="card-body text-center">
        <input type="file" onChange={e => setFile(URL.createObjectURL(e.target.files[0]))} />
        {file && (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={file} 
              alt="Crop" 
              className="img-fluid rounded shadow mt-3" 
              style={{ maxHeight: "250px", objectFit: "cover" }}
            />
            <p className="mt-2 text-success">🤖 Mock AI: Looks healthy (demo)</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}