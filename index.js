import { Logger } from "./Logger.js";
import schedule from "node-schedule";

function notifyRoomService() {
  Logger.info("Room Service Notification sent!");
}

function notifySystemSchedule() {
  Logger.info("Collecting Statistics!");
}

function sendEveryNSeconds() {
  Logger.info("Test Notification Sent!");
}

// "second minute  hour dayOfMonth month dayOfWeek"
// "  *      *      *       *        *       *    "
// "(0-59)  (0-59) (0-23) (1-31)   (1-12)  (0-7)  "

// Logs info every 5th second
// const job = schedule.scheduleJob("*/5 * * * * *", sendEveryNSeconds);

// Send Room service reminder Monday to Friday at 9:00AM
const roomServiceRule = new schedule.RecurrenceRule();
roomServiceRule.dayOfWeek = [1, 2, 3, 4, 5];
roomServiceRule.hour = 16; // 0 - 23
roomServiceRule.minute = 40; // 0 - 59
const roomService = schedule.scheduleJob(roomServiceRule, notifyRoomService);

// Collect system statistics every day at 12:00AM
const systemScheduleRule = new schedule.RecurrenceRule();
systemScheduleRule.hour = 0;
systemScheduleRule.minute = 0;
const systemSchedule = schedule.scheduleJob(
  systemScheduleRule,
  notifySystemSchedule
);
