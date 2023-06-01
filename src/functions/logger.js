const fs = require('fs');
const path = require('path');
const { format } = require('date-fns');

const logger = (req, res, next) => {
    if (!fs.existsSync(path.join(__dirname, '..', '..', 'logs'))) {
        fs.mkdirSync(path.join(__dirname, '..', '..', 'logs'));
    };

    fs.appendFileSync(path.join(__dirname, '..', '..', 'logs', 'savedLogs.txt'), `${format(new Date, 'yyyy/MM/dd\tHH:mm:ss')}\t${req.method}\t${req.headers.origin}\t${req.url}\n`);
    next();
};

module.exports = logger;