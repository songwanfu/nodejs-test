// var orm = require("orm");
var AgentProxy = require("../proxy/agent");
module.exports = {
  index: (req, res, next) => {
    AgentProxy.getUserList(req, res, (list) => {
      res.render("index", {list: list});
    });
  }

  
}