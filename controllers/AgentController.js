var AgentProxy = require("../proxy/agent");

module.exports = {
  index: (req, res, next) => {
    AgentProxy.getUserList(req, res, (list) => {
      // console.log(list);return;
      
      res.render("agent/index", {list: list});
    });
  }

  
}