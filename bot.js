var Discord = require('discord.js');
var bot = new Discord.Client();
var isReady = true;

bot.on("ready", () => {
    console.log("I am ready!");
  });

bot.on("message", (message) => {
    if (isReady && message.content.startsWith(".")) {

        isReady = false;
        var voiceChannel = message.member.voiceChannel;

        switch(message.content){
            case '.poneilandia': 
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.playFile('./audios/poneilandia.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave();
                    isReady = true;
                });
            }).catch(err => console.log(err));
            break;
            case '.sacanagem': 
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.playFile('./audios/sacanagem.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave();
                    isReady = true;
                });
            }).catch(err => console.log(err));
            break;
            case '.tururu': 
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.playFile('./audios/tururu.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave();
                    isReady = true;
                });
            }).catch(err => console.log(err));
            break;
            case '.grandefamilia': 
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.playFile('./audios/grandefamilia.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave();
                    isReady = true;
                });
            }).catch(err => console.log(err));
            break;
            case '.comandos':
                    message.author.sendMessage("\n.grandefamilia\n.sacanagem\n.tururu\n.poneilandia")
            break;
            

        }
    }
});

bot.login(process.env.BOT_TOKEN);