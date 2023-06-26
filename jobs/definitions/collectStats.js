import { JobHandlers } from "../handlers/index.js";

export const collectStatsDefinition = (agenda) => {
  agenda.define("collect-stats", JobHandlers.collectStats);
};
