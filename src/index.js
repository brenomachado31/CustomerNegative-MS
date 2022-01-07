const customerNegative = require("./Service/customerNegative");

exports.handler =  async function(event, context) {

    console.log("START EVENT HANDLER");

    const exec = new customerNegative(event);
    exec.CheckStatusBlocked();

    console.log("START EVENT HANDLER");

    return context.logStreamName
}