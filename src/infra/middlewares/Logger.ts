const winston = require('winston')
const WinstonCloudWatch = require('winston-cloudwatch');

const AWS_LOG_GROUP = process.env.AWS_CW_GROUP;
const AWS_LOG_STREAM = process.env.AWS_CW_STREAM;
const AWS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_LOG_REGION = process.env.AWS_CW_REGION;

const logger = new winston.createLogger({
  format: winston.format.json(),
  transports: [
    new (winston.transports.Console)({
      timestamp: true,
      colorize: true,
    })
  ]
});

const cloudwatchConfig = {
  logGroupName: 'icods',
  logStreamName: 'icods-api',
  awsAccessKeyId: AWS_KEY_ID,
  awsSecretKey: AWS_ACCESS_KEY,
  awsRegion: 'us-east-1',
  messageFormatter: ({ level, message }:any) =>    {
    return `[${level}] : \nMessage: ${message}`;
  }
}
logger.add(new WinstonCloudWatch(cloudwatchConfig))

module.exports = logger
