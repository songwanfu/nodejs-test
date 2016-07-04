var moment = require("moment");
var Agent = null;
exports.getUserList = (req, res, callback) => {
    Agent = req.models.agent;
    Agent.find().all((err, users) => {
      if (err) return next(err);
      for (i in users) {
        users[i]['start_time'] = moment(users[i]['start_time']).format("YYYY-MM-DD HH:mm:ss");
        users[i]['end_time'] = moment(users[i]['start_time']).format("YYYY-MM-DD HH:mm:ss");
        users[i]['create_time'] = moment(users[i]['start_time']).format("YYYY-MM-DD HH:mm:ss");
      }
      callback(users);
    });
}