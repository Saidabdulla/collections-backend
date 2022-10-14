const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/dashboard");
const { protect, checkAdmin } = require("../middleware/auth");

router.get("/", protect, checkAdmin, getAllUsers);
router.get("/:id", protect, checkAdmin, getUserById);
router.put("/update/:id", protect, checkAdmin, updateUser);
router.delete("/delete/:id", protect, checkAdmin, deleteUser);
// as author

module.exports = router;
