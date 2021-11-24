import "reflect-metadata";
import { createConnection } from "typeorm";
const logger = require("../middlewares/Logger");

export async function startConnection(): Promise<any> { await run() }

async function run() {
  const connection = await createConnection()
  if (connection.isConnected) {
    logger.info("Connection established")
  } else {
    logger.error("Connection failed")
  }
}
