import { JobHandlers } from "../handlers.js";

export const collectStatsDefinition = (agenda) => {
  agenda.define("collect-stats", JobHandlers.collectStatistics);
};
