module.exports.run = async (client, message, args) =>{

    let clr;
    switch (args[0]){
        case "random":
            clr = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
            break;
        default:
            clr = args[0];
            break;
    }
    message.channel.send("Your color is " + clr)
}
