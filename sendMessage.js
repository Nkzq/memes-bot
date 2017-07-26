var sendMessage = function (channel, rep) {
	channel.startTyping(500)
	setTimeout(() => {
		channel.send(rep).then( () => {
			channel.stopTyping(true)
		}).catch(console.error)
	}, 500);
}

module.exports = sendMessage