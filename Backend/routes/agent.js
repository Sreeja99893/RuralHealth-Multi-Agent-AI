const express = require("express");
const router = express.Router();
const { runConversation } = require("../controllers/agentController");

router.post("/chat", runConversation);

module.exports = router;