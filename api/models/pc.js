const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ComputerSchema = new Schema({
	version: String,
	cpu: {
		manufacturer: String,
		brand: String,
		vendor: String,
		family: String,
		model: String,
		stepping: String,
		revision: String,
		speed: String,
		speedmin: String,
		speedmax: String,
		cores: Number,
		cache: {
			l1d: Number,
			l1i: Number,
			l2: Number,
			l3: Number
		},
		flags: String
	},
	diskLayout: [
		{
			type: String,
			name: String,
			vendor: String,
			size: Number,
			bytesPerSector: Number,
			totalCylinders: Number,
			totalHeads: Number,
			totalSectors: Number,
			totalTracks: Number,
			tracksPerCylinder: Number,
			sectorsPerTrack: Number,
			firmwareRevision: String,
			serialNum: String,
			interfaceType: String
		}
	],
	graphics: {
		controllers: [
			{
				model: String,
				vendor: String,
				bus: String,
				vram: String,
				vramDynamic: Boolean
			}
		],
		displays: [
			{
				model: String,
				resolutionx: Number,
				resolutiony: Number,
				pixeldepth: Number
			}
		]
	},
	memLayout: [
		{
			size: Number,
			bank: String,
			type: String,
			clockSpeed: Number,
			formFactor: String,
			partNum: String,
			serialNum: String,
			voltageConfigured: Number,
			voltageMin: Number,
			voltageMax: Number
		}
	],
	net: [
		{
			iface: String,
			ip4: String,
			ip6: String,
			mac: String,
			internal: Boolean
		}
	],
	os: {
		platform: String,
		distro: String,
		release: String,
		codename: String,
		kernel: String,
		arch: String,
		hostname: String,
		logofile: String
	},
	system: {
		manufacturer: String,
		model: String,
		serial: String,
		uuid: String
	},
	versions: {
		kernel: String,
		node: String,
		v8: String,
		npm: String,
		pm2: String,
		openssl: String
	},
	date: String
});

module.exports = mongoose.model('pc', ComputerSchema);
