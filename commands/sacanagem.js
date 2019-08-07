const { sendAudio } = require('../functions/sendAudio');

module.exports = {
	name: 'sacanagem',
	description: 'ta de sacanagem comigo?',
	execute(message, args) {
		sendAudio(message,"sacanagem");
	},
};