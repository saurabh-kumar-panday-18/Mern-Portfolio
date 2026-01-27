const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

const PORT = process.env.PORT || 5000;

const connectDB = require("./config/db");
dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("backend is running");
});

app.listen(PORT, (req, res) => {
  console.log(`server runnning on port ${PORT}`);
});
