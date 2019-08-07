const { sendAudio } = require('../functions/sendAudio');

module.exports = {
	name: 'tururu',
	description: 'sad naruto song =c',
	execute(message, args) {
		sendAudio(message,"tururu");
	},
};