const { sendAudio } = require('../functions/sendAudio');

module.exports = {
	name: 'babado',
	description: 'babado',
	execute(message, args) {
		sendAudio(message,"babado");
	},
};