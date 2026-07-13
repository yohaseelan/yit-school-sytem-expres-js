import express from "express";
const app = express();

app.use(express.json());

import studentRoutes from "./routes/studentRoutes.js";

app.use("/api/students", studentRoutes);
app.get("/", (req, res) => {
    res.send("Welcome to the Student API");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});