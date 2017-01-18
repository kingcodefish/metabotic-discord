var fs = require("fs");
module.exports = {
    name: "compsci", // name of module
    commands: [],
    initialise: null, // or initialize. Might include file I/O
    close: null // to end. Might include file I/O. May return Promise.
};

// Discord Client
var Client = null;


var send = function(message, toSend) {
    message.channel.sendMessage(toSend).then(function() {
        console.log("Message sent.");
    }).catch(function() {
        console.log("Failed to send message.");
    });
};

var sendDM = function(message, toSend) {
    message.author.sendMessage(toSend).then(function() {
        console.log("DM sent.");
    }).catch(function() {
        console.log("Failed to send DM.");
    });
};

module.exports.commands.push({
    word: "cstopic",
    description: "Give a random CS term",
    execute: function(message, parsedMessage) {
		const csWords = ["Deterministic Finite Automata", "Turing Machine", "Polybius Square", "Checksum", "Nonce Key", "Caesar Cipher-26"];
        send(message, "Here's the CS term I recommend for you to check out: " + csWords[Math.random(0, csWords.length) | 0]);
    }
});

/** --- MODULE HANDLING --- **/
module.exports.initialise = function(client) {
    Client = client;
    console.log("Initialized " + module.exports.name + "...");
};
module.exports.close = function(client) {
    console.log("Closed " + module.exports.name + "...");
};
