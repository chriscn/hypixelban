const https = require('https');
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
    fetchPunishment: {
	    mute: (id, playeruuid, callback) => apiRequest(`/api/account/punishment?type=mute&id=${id}&player_uuid=${playeruuid}`, callback),
        ban: (id, playeruuid, callback) => apiRequest(`/api/account/punishment?type=ban&id=${id}&player_uuid=${playeruuid}`, callback),
    },
};
