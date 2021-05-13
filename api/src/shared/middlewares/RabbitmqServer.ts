import { Connection, Channel, connect, Message } from "amqplib";

export default class RabbitmqServer {
  private conn: Connection;
  private channel: Channel;

  constructor(private uri: string) {}

  async start(){
    this.conn = await connect(this.uri);
    this.channel = await this.conn.createChannel();
    console.log("connected successfully to rabbitmq")
  }

  async publishInQueue(queue: string, message: string) {
    return this.channel.sendToQueue(queue, Buffer.from(message));
  }

  async publishInExchange(
    exchange: string,
    routingKey: string,
    message: string
  ){
    return this.channel.publish(exchange, routingKey, Buffer.from(message));
  }

}
