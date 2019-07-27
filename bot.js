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
                const dispatcher = connection.playFile('./audios/sacanagem_comigo.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave();
                    isReady = true;
                });
            }).catch(err => console.log(err));
            break;
        }
    }
});

bot.login(process.env.BOT_TOKEN);