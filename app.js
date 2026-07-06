import express from "express";
const app = express();

app.use(express.json());

import studentRoutes from "./routes/student.routes.js";

app.use("/api/students", studentRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});