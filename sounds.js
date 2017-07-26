const fs = require('fs')
const folder = './sounds/'

let availableSounds = function () {
	let soundsArr = []
	fs.readdirSync(folder).forEach(file => {
	  file = file.substr(0, file.lastIndexOf('.')) || file
	  soundsArr.push(file)
	})
	return soundsArr
}

module.exports = availableSounds