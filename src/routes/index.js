const express = require(`express`);
const router = express.Router();

router.use(`/auth`, require("./authRoutes"));
router.use("/storage", require("./storageRoutes"));

module.exports = router;
