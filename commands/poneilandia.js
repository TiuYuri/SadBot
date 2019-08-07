const { sendAudio } = require('../functions/sendAudio');

module.exports = {
	name: 'poneilandia',
	description: 'poneilandia vai secar e explodir',
	execute(message, args) {
		sendAudio(message,"poneilandia");
	},
};