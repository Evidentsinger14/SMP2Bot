const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message) =>{

    const totalMembers = client.guilds.cache.map(guild => guild.memberCount).reduce((a,b) => a + b, 0);
    const totalChannels = "this.doesNotWork"

    const days = Math.floor(client.uptime / 86400000);
    const hours = Math.floor(client.uptime / 3600000) % 24;
    const minutes = Math.floor(client.uptime / 60000) % 60;
    const seconds = Math.floor(client.uptime / 1000) % 60;

    const uptimeValue = `${days}d, ${hours}h, ${minutes}m, ${seconds}s`

    const embed = new MessageEmbed()

        .setColor("YELLOW")
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            //Latency stuff
            { name: '**Latency Info**', value: `** **`, inline: false },
            { name: 'Bot Latency:', value: `${Date.now() - message.createdTimestamp}ms`, inline: true },
            { name: 'API Latency:', value: `${Math.round(client.ws.ping)}ms`, inline: true },

            // Member Stuff
            // TODO
            // Total Channels Seen
            { name: '**Member Info**', value: `** **`, inline: false },
            { name: 'Total Guild Members', value: `${totalMembers}`, inline: true },
            { name: 'Total Channels Seen', value: `${totalChannels}`, inline: true },

            // Bot related information
            // TODO
            // x
            { name: '**Bot Info**', value: `** **`, inline: false },
            { name: 'Uptime', value: `${uptimeValue}`, inline: true },
)

    return message.channel.send({ embeds: [embed]});
}
