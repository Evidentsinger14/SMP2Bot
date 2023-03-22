const {MessageEmbed, Util } = require("discord.js");

module.exports.run = async (client, message, args) =>{

    const isPermitted = message.member.permissions.has("MANAGE_EMOJIS_AND_STICKERS")

    if(!isPermitted){
        message.channel.send("You are not permitted to use that");
        return;
    }

    const embed = new MessageEmbed()
    .setColor("DARK_RED")
    .setDescription(`:x: Incorrect format\n Correct format: ${prefix}steal [emoji]`)

    if (!args.length){
    return message.channel.send({ embeds: [embed] });
    }

    for (const raw_emoji of args){
        const parsed_emoji = Util.parseEmoji(raw_emoji);
        if(parsed_emoji.id){
            const extension = parsed_emoji.animated ? ".gif" : ".png";
            const url = `https://cdn.discordapp.com/emojis/${parsed_emoji.id + extension}`;
            try {
                if(args[1] === "--debug"){
                    message.reply(
                        "Emoji ID: " + parsed_emoji.id +
                        "Emoji Raw Info: " + parsed_emoji
                    )
                } else {
                    message.guild.emojis.create(url, parsed_emoji.name).then((emoji) => {
                        message.channel.send(`Added ${emoji.url}`);
                    });
                }

            } catch (error) {

                message.channel.send("Could not add emoji");
                return;

            }
        }
    }
}
