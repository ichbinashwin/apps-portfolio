import React, { useState } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { text: input, sender: "farmer" }, { text: "🤖 Mock AI Reply: This is where advice will appear.", sender: "bot" }]);
    setInput("");
  };

  return (
    <div className="card mb-4">
      <div className="card-header bg-light fw-bold">AI Chatbot (Demo)</div>
      <div className="card-body" style={{ height: "200px", overflowY: "scroll" }}>
        {messages.map((msg, i) => (
          <p key={i} className={msg.sender === "bot" ? "text-success" : "text-primary"}>{msg.sender}: {msg.text}</p>
        ))}
      </div>
      <div className="card-footer d-flex">
        <input className="form-control me-2" value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about farming..." />
        <button className="btn btn-success" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
