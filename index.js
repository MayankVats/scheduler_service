import { agenda } from "./jobs/index.js";
import { schedule } from "./jobs/scheduler.js";

async function main() {
  // must be called before any job scheduling
  await agenda.start();

  await schedule.scheduleRoomService({
    message: "Room service notification sent!",
  });
}

async function graceful() {
  // Stops the job queue processing and waits till all current jobs finishes
  await agenda.drain();
  process.exit(0);
}

process.on("SIGINT", graceful);

main();
