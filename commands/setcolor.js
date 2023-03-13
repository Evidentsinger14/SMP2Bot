module.exports.run = async (client, message, args) =>{

    let color = "#000000";


    function clrGen(args){
        let clr;
        if(args[0] === "random"){
            clr = color.replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
        } else {
            clr = args[0];
        }
        return clr;
    }
    message.channel.send(clrGen(args[0]));

}
