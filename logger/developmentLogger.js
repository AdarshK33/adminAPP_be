// const winston = require('winston')


const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const developmentLogger = () => {
    const myFormat = printf(({ level, message, timestamp }) => {
        return `${timestamp} ${level}: ${message}`;
      });
    
    return createLogger({
        level: 'debug',
        // format: winston.format.simple(),
        format: combine(
            format.colorize(),
            label({ label: 'right meow!' }),
            timestamp({format: "HH:mm:ss DD-MM-YYYY"}),
            myFormat
          ),
    
        //defaultMeta: { service: 'user-service' },
        transports: [
            new transports.Console(),
            new transports.File({
                filename: 'errors.log',
                
              })
        ],
      });
}

  module.exports = developmentLogger;