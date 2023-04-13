const { client } = require("../index.js");
// const { MessageEmbed } = require("discord.js")

client.on("messageCreate", async message => {
    // restart stuff
    if(message.channel.id === process.env.GITHUB_SPAM){
        process.exit(0)
    }

    if(message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    // Command Handler

    try {
        delete require.cache[require.resolve(`../commands/${cmd}.js`)];
        const command_file = require(`../commands/${cmd}.js`);
        command_file.run(client, message, args);
    } catch (error){
    }

    let randomNumber = Math.ceil(Math.random() * 10);
    let messageContent = message.content;

    if(randomNumber % 2 === 0){
        stringReverse(messageContent)
    }

    function stringReverse(message) {
        let splitThisMotherfucker = message.split("");
        let reverseThisMotherfucker = splitThisMotherfucker.reverse();
        let joinThisMotherfucker = reverseThisMotherfucker.join("");
        message.channel.send(joinThisMotherfucker);
    }
})
