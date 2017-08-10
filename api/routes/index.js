const controller = require('../controllers/');

module.exports = function (app) {
	app.route('/pcs')
		.get(controller.listPCs)
		.post(controller.uploadPC);

	app.route('/pcs/:uuid')
		.get(controller.readPCSpec)
		.put(controller.updatePCSpec)
		.delete(controller.deletePC);
};
