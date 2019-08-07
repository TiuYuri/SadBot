const { sendAudio } = require('../functions/sendAudio');

module.exports = {
	name: 'comandos',
	description: 'lista todos os comandos',
	execute(message, args) {
		message.author.send("\n.grandefamilia\n.sacanagem\n.tururu\n.poneilandia")
	},
};