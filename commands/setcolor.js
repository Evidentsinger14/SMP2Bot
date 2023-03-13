module.exports.run = async (client, message, args) =>{

    let color = "#000000";
    switch (args[0]){
        case "random":
            color.replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
            message.channel.send(color)
            break;
        default:
            color = args[0];
            break;
    }
}
