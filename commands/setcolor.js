module.exports.run = async (client, message, args) =>{
    switch (args[0]){
        case "random":
            message.channel.send("Random Color")
            break;
        default:
            message.channel.send("A")
            break;
    }
}
