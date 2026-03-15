import React from "react";

function ChatWindow({ conversation }) {
  if (!conversation) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <p><b>Patient:</b> {conversation.symptoms}</p>
      <p><b>Doctor:</b> {conversation.doctorAdvice}</p>
      <p><b>Health Worker:</b> {conversation.healthWorkerAdvice}</p>
    </div>
  );
}

export default ChatWindow;