import { JobHandlers } from "../handlers.js";

export const roomServiceDefinition = (agenda) => {
  console.log("roomServiceDefinition");
  agenda.define("notify-room-service", JobHandlers.notifyRoomService);
};
