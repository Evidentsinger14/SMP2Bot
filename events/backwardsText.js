const { client } = require("../index.js");

client.on("messageCreate", async message => {
    if(message.author.bot) return;


    let randomNumber = Math.ceil(Math.random() * 10);
    let messageContent = message.content;

    if(randomNumber % 2 === 0){
        stringReverse(messageContent)
    }


    function stringReverse(message) {
        let splitThisMotherfucker = message.split("");
        let reverseThisMotherfucker = splitThisMotherfucker.reverse();
        let joinThisMotherfucker = reverseThisMotherfucker.join("");
        message.reply(joinThisMotherfucker);
    }


})
