const express = require("express");
const cors = require("cors");
const generateHealthAdvice = require("./services/geminiService");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/agent", async (req, res) => {
  const { symptoms, location } = req.body;
  try {
    const aiResponse = await generateHealthAdvice(symptoms, location);
    res.json({ aiResponse });
  } catch (error) {
    res.status(500).json({ aiResponse: "Backend Error---Try again---Try again" });
  }
});

// Add this to index.js temporarily to check available models
async function listModels() {
  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
  const result = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  console.log("Connection successful!");
}
listModels();

app.listen(5000, () => console.log("Server running on http://localhost:5000"));