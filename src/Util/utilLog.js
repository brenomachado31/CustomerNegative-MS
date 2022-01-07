class UtilLog {
    constructor() { }

    LogClient(client) {
        console.log("Start of client log writing");
        console.log(client.Id);
        console.log(client.InternalId);
        console.log(client.Blocked);
        console.log("End of client log writing");
    }    
}

module.exports = UtilLog;