import { collectStatsDefinition } from "./collectStats.js";
import { roomServiceDefinition } from "./roomService.js";

const definitions = [collectStatsDefinition, roomServiceDefinition];

export const registerJobs = (agenda) => {
  definitions.forEach((definition) => definition(agenda));
};
