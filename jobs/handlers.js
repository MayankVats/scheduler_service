import { Logger } from "../Logger.js";

export const JobHandlers = {
  notifyRoomService: async (job, done) => {
    const { message } = job.attrs;
    console.log("Room service handler");
    Logger.info(message);
    done();
  },

  collectStatistics: async (job, done) => {
    Logger.info("System stats collected");
    done();
  },
};
