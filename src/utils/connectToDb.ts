import mongoose from "mongoose";
import config from "config";
import log from "./logger";

async function connectToDb() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    log.info("DB Connceted");
  } catch (error) {
    process.exit(1);
  }
}

export default connectToDb;
