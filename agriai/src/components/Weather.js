import React from "react";

export default function Weather() {
  return (
    <div className="card mb-4">
      <div className="card-header bg-light fw-bold">🌤️ Weather Forecast (Demo)</div>
      <div className="card-body">
        <p>Today: Sunny, 32°C</p>
        <p>Tomorrow: Rain expected, 28°C</p>
      </div>
    </div>
  );
}
