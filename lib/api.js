const https = require('https');
const util = require('util');

const API_URL = 'https://hypixel.net/api/account';
const headers = {
	'User-Agent': 'hypixelban',
	'Cookie': '',
};

function login(key) {
	headers.Cookie = key;
}

function apiRequest(endpoint, callback) {
	https.get({ hostname: 'hypixel.net', path: endpoint, headers: headers }, res => {
		let body = '';
		res.on('data', data => {
			body += data;
		});

		res.on('end', () => {
			try {
				const response = JSON.parse(body);
				callback(null, response);
			} catch (err) {
				callback(err);
			}
		});
	});
}

module.exports = {
	login,

	fetchPubishment: (id, playeruuid, callback) => apiRequest(`/api/account/punishment?type=ban&id=${id}&player_uuid=${playeruuid}`, callback),
};
