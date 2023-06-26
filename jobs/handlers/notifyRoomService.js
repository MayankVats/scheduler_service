import { Logger } from "../../Logger.js";

export const notifyRoomService = (job, done) => {
  const { message } = job.attrs.data;
  Logger.info(message);
  done();
};
