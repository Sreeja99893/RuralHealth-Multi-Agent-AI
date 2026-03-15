const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyDj3OTfT_bVB-X_QXoCeBVtugKCBr2vEWk");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function generateHealthAdvice(symptoms, location) {
  const prompt = `
    You are a Rural Health Multi-Agent System. 
    Symptoms: ${symptoms}
    Location: ${location}

    Provide advice from 3 perspectives, exactly separated by "###":

    AGENT 1 (Patient Agent): Provide simple first-aid advice. 
    IMPORTANT: Provide the advice first in English, then followed by a clear Telugu translation.
    ###
    AGENT 2 (Doctor Agent): Technical medical assessment and red flags.
    ###
    AGENT 3 (Health Worker Agent): Logistics and nearest clinic coordination steps.
  `;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error###Error###Error";
  }
}

module.exports = generateHealthAdvice;