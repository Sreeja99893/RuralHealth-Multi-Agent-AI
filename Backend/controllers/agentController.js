const { patientAgent, doctorAgent, healthWorkerAgent } = require("../utils/novaClient");

const runConversation = async (req, res) => {
  try {
    const { symptoms, location } = req.body;

    // Step 1: Patient agent
    const patientInput = await patientAgent(symptoms);

    // Step 2: Doctor agent
    const doctorResponse = await doctorAgent(patientInput);

    // Step 3: Health worker agent
    const healthResponse = await healthWorkerAgent(doctorResponse, location);

    res.json({
      patient: patientInput,
      doctor: doctorResponse,
      healthWorker: healthResponse,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { runConversation };