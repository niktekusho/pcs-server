const mongoose = require('mongoose');

const PC = mongoose.model('pc');

exports.listPCs = (req, res) => {
	PC.find({}, (err, pc) => {
		if (err) {
			res.send(err);
		}
		res.json(pc);
	});
};

exports.uploadPC = (req, res) => {
	const newPC = new PC(req.body);
	newPC.save((err, pc) => {
		if (err) {
			res.send(err);
		}
		res.json(pc);
	});
};

exports.readPCSpec = () => {};

exports.updatePCSpec = () => {};

exports.deletePC = () => {};
