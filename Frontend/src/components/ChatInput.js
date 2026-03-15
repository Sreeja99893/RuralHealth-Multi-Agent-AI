import React, { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [symptoms, setSymptoms] = useState("");
  const [location, setLocation] = useState("");

  const handleSend = () => {
    onSend(symptoms, location);
    setSymptoms("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter symptoms"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSend}>Get Advice</button>
    </div>
  );
};

export default ChatInput;