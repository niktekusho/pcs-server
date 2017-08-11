const mongoose = require('mongoose');

const PC = mongoose.model('pc');

exports.listPCs = (req, res) => {
	PC.find({}, (err, pc) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(pc);
	});
};

exports.uploadPC = (req, res) => {
	const newPC = new PC(req.body);
	newPC.save((err, pc) => {
		if (err) {
			// Trying to add a duplicate: 409 Conflict ("The request could not be completed due to a conflict with the current state of the resource.")
			res.status(500).send(err);
		}
		res.json(pc);
	});
};

exports.readPCSpec = (req, res) => {
	const pcUuid = req.params.uuid;
	PC.findOne({'system.uuid': pcUuid}, (err, pc) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(pc);
	});
};

exports.updatePCSpec = (req, res) => {
	const pcUuid = req.params.uuid;
	PC.findOneAndUpdate({'system.uuid': pcUuid}, req.body, {new: true}, (err, pc) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(pc);
	});
};

exports.deletePC = (req, res) => {
	const pcUuid = req.params.uuid;
	PC.remove({'system.uuid': pcUuid}, err => {
		if (err) {
			res.status(500).send(err);
		}
		res.json({message: 'PC deleted successfully'});
	});
};
