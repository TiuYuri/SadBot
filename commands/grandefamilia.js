const { sendAudio } = require('../functions/sendAudio');

module.exports = {
	name: 'grandefamilia',
	description: 'essa familia é muito unida...',
	execute(message, args) {
		sendAudio(message,"grandefamilia");
	},
};