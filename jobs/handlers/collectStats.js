import { Logger } from "../../Logger.js";

export const collectStats = (job, done) => {
  Logger.info("System stats collected");
  done();
};
