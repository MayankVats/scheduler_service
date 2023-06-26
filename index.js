import { agenda } from "./jobs/index.js";
import { schedule } from "./jobs/scheduler.js";

agenda.on("ready", () => {
  schedule.scheduleRoomService({
    message: "Room service notification sent!",
  });
});
