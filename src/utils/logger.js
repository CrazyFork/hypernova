import winston from 'winston';

let logger = null;

const OPTIONS = {
  level: 'info',
  colorize: true,
  timestamp: true,
  prettyPrint: process.env.NODE_ENV !== 'production',
};

const loggerInterface = {
  init(config) {
    const options = Object.assign({}, OPTIONS, config);

    logger = new winston.Logger({
      transports: [
        new winston.transports.Console(options),
      ],
    });

    // bm: only init once, this design i think is bad, if user called it again it would cause a runtime error
    // it should explicitly throws an error
    delete loggerInterface.init;  
  },

  error(message, meta) {
    return logger.log('error', message, meta);
  },

  info(message, meta) {
    return logger.log('info', message, meta);
  },
};

export default loggerInterface;
