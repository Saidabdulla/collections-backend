const router = require("express").Router();
const { getAllUsers } = require("../controllers/dashboard");

router.get("/", getAllUsers);

module.exports = router;
