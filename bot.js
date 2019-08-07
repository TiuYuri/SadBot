var Discord = require('discord.js');
var logger = require('winston');
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.BOT_TOKEN,
   autorun: true
});

var isReady = true;

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on("message", (message) => {
    if (isReady && message.content.startsWith(".")) {

        isReady = false;

        switch(message.content){
            case '.poneilandia': 
            sendAudio(message,"poneilandia");
            break;
            case '.sacanagem': 
            sendAudio(message,"sacanagem");
            break;
            case '.tururu': 
            sendAudio(message,"tururu");
            break;
            case '.grandefamilia': 
            sendAudio(message,"grandefamilia");
            break;
            case '.comandos':
                    message.author.send("\n.grandefamilia\n.sacanagem\n.tururu\n.poneilandia")
            break;
            

        }
    }
});

function sendAudio(message, audioName){
    var voiceChannel = message.member.voiceChannel;
    voiceChannel.join().then(connection =>{
        const dispatcher = connection.playFile("./audios/" + audioName + ".mp3");
        dispatcher.on("end", end => {
            voiceChannel.leave();
            isReady = true;
        });
    }).catch(err => console.log(err));
}