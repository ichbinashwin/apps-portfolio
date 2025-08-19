import React from "react";

export default function MandiPrices() {
  const prices = [
    { crop: "Wheat", price: "₹2100/quintal" },
    { crop: "Tomato", price: "₹1400/quintal" },
    { crop: "Paddy", price: "₹1900/quintal" },
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light fw-bold">📊 Mandi Prices (Demo)</div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr><th>Crop</th><th>Price</th></tr>
          </thead>
          <tbody>
            {prices.map((item, i) => (
              <tr key={i}>
                <td>{item.crop}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
