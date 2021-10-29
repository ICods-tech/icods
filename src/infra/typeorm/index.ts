import "reflect-metadata";
import { createConnection } from "typeorm";

export async function startConnection(): Promise<any> { await run() }

async function run() {
  console.log("Starting connection...")
  const connection = await createConnection()
  console.log(connection.isConnected ? "Connection established" : "Connection failed")
}