const customerNegative = require("../src/Service/customerNegative");

function ExecTest() {
    const customerNegativeExec = new customerNegative({Id: "123", InternalId: "123", Blocked: true});
    customerNegativeExec.CheckStatusBlocked();
}

ExecTest();