function logInfo(info) {
    console.log(`${this.prefix}: ${info}`);
}

const logger = logInfo.bind({ prefix: '[INFO]' });

logger('Data received');

