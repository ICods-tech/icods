import { Connection, Channel, connect } from "amqplib";
const logger = require("./Logger");

export default class RabbitmqServer {
  private conn: Connection;
  private channel: Channel;

  constructor(private uri: string) { }

  async start() {
    this.conn = await connect(this.uri);
    this.channel = await this.conn.createChannel();
    await this.channel.assertQueue(process.env.QUEUE_NAME as string, { durable: true });
    logger.log("connected successfully to rabbitmq")
  }

  async publishInQueue(queue: string, message: string) {
    return this.channel.sendToQueue(queue, Buffer.from(message));
  }

  async publishInExchange(
    exchange: string,
    routingKey: string,
    message: string
  ) {
    return this.channel.publish(exchange, routingKey, Buffer.from(message));
  }

}
