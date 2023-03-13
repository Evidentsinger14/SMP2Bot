module.exports.run = async (client, message, args) =>{

    let clr;
    switch (args[0]) {
        case "random":
            clr = "#000000".replace(/0/g, function () {
                return (~~(Math.random() * 16)).toString(16);
            });
            break;
        default:
            clr = args[0];
            break;
    }

    if (args[1] === "--force"){
        message.reply("color " + clr + " has been forced.")
        return;

    }
    let regex = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";
    let match = clr.match(regex)
    message.channel.send(match);
    message.channel.send("Your color is " + clr)
}
