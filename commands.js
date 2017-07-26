const Discord = require('discord.js')
const bot = new Discord.Client()
const sendMessage = require('./sendMessage.js')
const sounds = require('./sounds.js')
const command = '$mb'
let flag = false

module.exports = class Commands {
	static match (message) {
		return message.content.startsWith(command)
	}

	static action (message) {
		let args = message.content.split(' ')
		let channel = message.channel
		let id = message.member.voiceChannelID
		let availableSounds = sounds()

		//Add the help command
		availableSounds.push('help')

		args.shift()
		message.delete()

		if (args.length === 0) {
			sendMessage(channel, 'I need a command')
		} else if (args.length === 1) {
			args = args.toString()
			var isAvailable = availableSounds.includes(args)
			if (isAvailable) {
				if (args === 'help') {
					sendMessage(channel, 'The supported commands are :```\n' + availableSounds.join('\n') + '```')
				} else {
					if (!flag) {
						if (typeof id !== 'undefined' && id) {
							flag = true
							let voiceChannel = message.guild.channels
							.filter((chan) => {
								return chan.id === id
							})
							.first()
							voiceChannel.join().then((connection) => {
								connection.playFile(`./sounds/${args}.mp3`).on('end', () => {
									connection.disconnect()
									flag = false
								})
							})
						}
					}
				}
			} else {
				sendMessage(channel, `Wrong command, type ***${command} help*** for more informations`)
			}
		}
	}
}