// Replace with actual Amazon Nova API integration
const axios = require("axios");

const callNovaAPI = async (prompt) => {
  // Placeholder: use OpenAI API or Nova API
  // Example using fetch/axios to Nova endpoint
  return `Simulated Nova response for: ${prompt}`;
};

const patientAgent = async (symptoms) => {
  return symptoms; // Simple echo for MVP
};

const doctorAgent = async (patientInput) => {
  const prompt = `You are a rural doctor. Patient says: "${patientInput}". Provide a diagnosis and one follow-up question.`;
  return await callNovaAPI(prompt);
};

const healthWorkerAgent = async (doctorOutput, location) => {
  const prompt = `You are a community health worker in ${location}. Patient got advice: "${doctorOutput}". Suggest preventive care tips and nearest clinics.`;
  return await callNovaAPI(prompt);
};

module.exports = { patientAgent, doctorAgent, healthWorkerAgent };