import { JobHandlers } from "../handlers/index.js";

export const roomServiceDefinition = (agenda) => {
  agenda.define("notify-room-service", JobHandlers.notifyRoomService);
};
