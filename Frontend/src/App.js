import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [symptoms, setSymptoms] = useState("");
  const [location, setLocation] = useState("Hyderabad");
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  // --- FEATURE 1: SPEECH TO TEXT (LISTENING) ---
  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support voice input. Please use Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN"; // Supports Indian accent
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSymptoms(transcript); // Automatically fills the symptoms input
    };

    recognition.start();
  };

  // --- FEATURE 2: TEXT TO SPEECH (SPEAKING) ---
  const speak = (text) => {
    const value = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(value);
  };

  const handleSend = async () => {
    if (!symptoms) return alert("Please enter symptoms");
    setLoading(true);
    setAdvice(""); 
    try {
      const res = await axios.post("http://localhost:5000/agent", { symptoms, location });
      setAdvice(res.data.aiResponse);
    } catch (error) {
      alert("Error: Ensure backend is running.");
    }
    setLoading(false);
  };

  const adviceParts = advice.includes("###") ? advice.split("###") : [advice, "", ""];
  const mapLink = `https://www.google.com/maps/search/hospitals+near+${location}`;

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "auto", fontFamily: "Arial" }}>
      <h1 style={{ color: "#2d5a27", textAlign: "center" }}>RuralHealth Multi-Agent AI 🌿</h1>
      
      <div style={{ background: "#f4f4f4", padding: "20px", borderRadius: "10px", marginBottom: "30px", textAlign: "center" }}>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "10px" }}>
          
          {/* SYMPTOMS INPUT + MIC BUTTON */}
          <div style={{ position: "relative", width: "50%" }}>
            <input 
              style={{ padding: "12px", width: "100%", paddingRight: "40px", borderRadius: "5px", border: "1px solid #ccc" }} 
              value={symptoms} 
              onChange={(e) => setSymptoms(e.target.value)} 
              placeholder="Describe symptoms..." 
            />
            <button 
              onClick={startListening}
              style={{ position: "absolute", right: "5px", top: "5px", border: "none", background: "none", cursor: "pointer", fontSize: "20px" }}
              title="Click to Speak"
            >
              {isListening ? "🛑" : "🎙️"}
            </button>
          </div>

          <input style={{ padding: "12px", width: "20%" }} value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
          
          <button style={{ padding: "12px 20px", background: "#2d5a27", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }} onClick={handleSend} disabled={loading}>
            {loading ? "Analyzing..." : "Get Advice"}
          </button>
        </div>
        {isListening && <p style={{ color: "red", fontSize: "12px" }}>Listening... Speak now.</p>}
      </div>

      {advice && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
          {/* Patient Agent Card */}
          <div style={{ background: "#e3f2fd", padding: "20px", borderRadius: "12px", borderTop: "8px solid #2196f3", position: "relative" }}>
            <h3>👤 Patient Agent</h3>
            <p>{adviceParts[0]}</p>
            <button onClick={() => speak(adviceParts[0])} style={{ background: "#2196f3", color: "white", border: "none", padding: "8px", borderRadius: "5px", cursor: "pointer", width: "100%" }}>
              🔈 Play Audio Advice
            </button>
          </div>

          {/* Doctor Agent Card */}
          <div style={{ background: "#ffebee", padding: "20px", borderRadius: "12px", borderTop: "8px solid #f44336" }}>
            <h3>🩺 Doctor Agent</h3>
            <p>{adviceParts[1]}</p>
          </div>

          {/* Health Worker Card */}
          <div style={{ background: "#e8f5e9", padding: "20px", borderRadius: "12px", borderTop: "8px solid #4caf50" }}>
            <h3>🏠 Health Worker</h3>
            <p>{adviceParts[2]}</p>
            <a href={mapLink} target="_blank" rel="noreferrer">
              <button style={{ background: "#4caf50", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer", width: "100%", marginTop: "10px" }}>
                📍 Find Nearby Hospitals
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;