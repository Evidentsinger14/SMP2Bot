const Discord = require("discord.js");
require("dotenv").config();
const fs = require("fs");

// LET'S DEFINE SOME SHITTTT
global.token = process.env.BOT_TOKEN;
global.startup_message = process.env.STARTUP_MESSAGE;
global.staff_roles = process.env.STAFF_ROLES;
global.push_url = process.env.PUSH_URL;
global.prefix = process.env.BOT_PREFIX;

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

module.exports.client = client;

client.events = new Discord.Collection();

// Event Handler
fs.readdirSync("./events/").forEach(() => {
    const jsFiles = fs.readdirSync("./events/").filter(f => f.split(".").pop() === "js");
    if ( jsFiles.length <= 0 ) return console.log("[EVENT HANDLER] - Can't find any events.");
    jsFiles.forEach(event => {
        const eventGet = require(`./events/${event}`);
        try{
            client.events.set(eventGet.name, eventGet);
        } catch (error) {
            return console.error(error);
        }
    })
});

client.login(token).then(() => console.log(startup_message));

