const { sendAudio } = require('../functions/sendAudio');

module.exports = {
	name: 'comandos',
	description: 'lista todos os comandos',
	execute(message, args) {
		message.author.send(".babado\n.grandefamilia\n.perdadetempo\n.poneilandia\n.quedemais\n.sacanagem\n.tururu")
	},
};