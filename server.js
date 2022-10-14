const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./lib/connectDb");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");

const app = express();
require("dotenv").config();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("*", (req, res) => {
  res.status(404).json("404 - Not Found");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on ${PORT} - port`));
