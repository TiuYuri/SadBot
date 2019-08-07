function sendAudio(message, audioName){
    var voiceChannel = message.member.voiceChannel;
    voiceChannel.join().then(connection =>{
        const dispatcher = connection.playFile("./audios/" + audioName + ".mp3");
        dispatcher.on("end", end => {
            voiceChannel.leave();
        });
    }).catch(err => console.log(err));
}

module.exports = {sendAudio};