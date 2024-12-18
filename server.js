import express from "express";
import taskRoutes from "./routes/tasks.js";

const app = express();
const port = 8000;

app.use("/api", taskRoutes);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
