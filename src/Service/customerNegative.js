const utilLog = require("../Util/utilLog");

class CustomerNegative {
  constructor(client) {
    this.Client = client;
   }
   
   CheckStatusBlocked() {
      const utilLogExec = new utilLog();
      console.log("Init Check Status Blocked ===>");
      utilLogExec.LogClient(this.Client);

   }
}

module.exports = CustomerNegative;