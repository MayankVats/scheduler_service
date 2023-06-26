import Agenda from "agenda";
import { allDefinitions } from "./definitions/index.js";

const mongoURI = "mongodb://localhost:27017/jobs";

export const agenda = new Agenda({
  db: {
    address: mongoURI,
    collection: "roomServiceJobs",
    options: { useUnifiedTopology: true },
  },
  maxConcurrency: 20,
});

agenda
  .on("ready", () => console.log("Agenda started"))
  .on("error", () => console.log("Agenda connection error"));

allDefinitions(agenda);
