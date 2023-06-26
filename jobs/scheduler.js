import { agenda } from "./index.js";

export const schedule = {
  scheduleRoomService: async (data) => {
    console.log("Room Service");
    await agenda.every("*/5 * * * * *", "notify-room-service", data);
    // await agenda.now("notify-room-service", data);
  },
  statsService: async (data) => {
    await agenda.every("*/20 * * * * *", "collection-stats", data);
  },
};
