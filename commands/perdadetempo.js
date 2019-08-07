const { sendAudio } = require('../functions/sendAudio');

module.exports = {
	name: 'perdadetempo',
	description: 'perdadetempo',
	execute(message, args) {
		sendAudio(message,"perdadetempo");
	},
};