const { sendAudio } = require('../functions/sendAudio');

module.exports = {
	name: 'quedemais',
	description: 'que demais, que delicia...',
	execute(message, args) {
		sendAudio(message,"quedemais");
	},
};