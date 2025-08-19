import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!input) return;
    setMessages([
      ...messages,
      { text: input, sender: "farmer" },
      { text: "🤖 Mock AI Reply: This is where advice will appear.", sender: "bot" }
    ]);
    setInput("");
  };

  return (
    <motion.div 
      className="card mb-4 shadow-sm"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="card-header bg-light fw-bold">💬 AI Chatbot (Demo)</div>
      <div className="card-body" style={{ height: "220px", overflowY: "auto" }}>
        {messages.map((msg, i) => (
          <motion.p 
            key={i} 
            className={msg.sender === "bot" ? "text-success" : "text-primary"}
            initial={{ opacity: 0, x: msg.sender === "bot" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <strong>{msg.sender === "bot" ? "AI" : "You"}:</strong> {msg.text}
          </motion.p>
        ))}
      </div>
      <div className="card-footer d-flex">
        <input
          className="form-control me-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about farming..."
        />
        <button className="btn btn-success" onClick={sendMessage}>Send</button>
      </div>
    </motion.div>
  );
}