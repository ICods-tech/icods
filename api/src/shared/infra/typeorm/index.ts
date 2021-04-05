import "reflect-metadata";
import { createConnection } from "typeorm";

export async function startConnection(): Promise<any> { await run() }

async function run() {
  const connection = await createConnection()
}