import React, { useState } from "react";

export default function CropUpload() {
  const [file, setFile] = useState(null);

  return (
    <div className="card mb-4">
      <div className="card-header bg-light fw-bold">📸 Crop Disease Detection (Demo)</div>
      <div className="card-body text-center">
        <input type="file" onChange={e => setFile(URL.createObjectURL(e.target.files[0]))} />
        {file && (
          <>
            <img src={file} alt="Crop" className="img-fluid mt-3" style={{ maxHeight: "200px" }} />
            <p className="mt-2 text-success">🤖 Mock AI: Looks healthy (demo)</p>
          </>
        )}
      </div>
    </div>
  );
}
