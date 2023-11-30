const express = require("express");
const secureController = require("../controllers/secureController");
const { authenticateToken } = require("../middleware/authMiddleware");
const rateLimit = require("express-rate-limit");
const config = require("../config");

const router = express.Router();

const limiter = rateLimit(config.rateLimit);

router.use(authenticateToken);

router.get("/secure-endpoint", limiter, secureController.secureEndpoint);

module.exports = router;
