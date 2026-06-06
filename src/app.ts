import express from "express";
import cors from "cors";
import eventsRouter from "./api/v1/routes/events.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/events", eventsRouter);

export default app;
