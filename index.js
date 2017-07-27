const Discord = require('discord.js')
const bot = new Discord.Client()
const Commands = require('./commands.js')
const sendMessage = require('./sendMessage.js')

bot.on('message', (message) => {
	if (Commands.match(message)) {
		return Commands.action(message)
	}
})

bot.login(process.env.discord_key)