import { collectStatsDefinition } from "./collectStats.js";
import { roomServiceDefinition } from "./roomService.js";

const definitions = [collectStatsDefinition, roomServiceDefinition];

export const allDefinitions = (agenda) => {
  definitions.forEach((definitions) => definitions(agenda));
};
