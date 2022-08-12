let count = 0;
const messages = [];

module.exports = {
	postMessage: (req, res) => {
		const { text, time } = req.body;
		messages.push({
			id: count,
			text: text,
			time: time
		});
		count += 1;
		res.status(200).send(messages);
	},

	getMessage: (req, res) => {
		res.status(200).send(messages);
	},

	putMessage: (req, res) => {
		const idParam = req.params.id * 1;
		const text = req.body.text;
		const index = messages.findIndex(el => el.id === idParam);
		const message = messages[index];

		messages[index] = {
			id: message.id,
			text: text || message.text,
			time: message.time
		};
		res.status(200).send(messages);
	},

	deleteMessage: (req, res) => {
		const idParam = req.params.id * 1;
		const index = messages.findIndex(el => el.id === idParam);
		messages.splice(index, 1);
		res.status(200).send(messages);
	}
};
