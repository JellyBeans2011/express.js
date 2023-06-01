const whitelist = ['http://localhost:3000'];
const optinsCors = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not Allowed!'));
        };
    }
};

module.exports = optinsCors;