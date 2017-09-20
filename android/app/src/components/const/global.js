export default class Global {
	static API_HOST = "http://192.168.1.104:8999";
	static API_CARD_GET_URL = Global.API_HOST + '/api/card/get';
	static LOGIN_URL = Global.API_HOST + '/api/user/login';
};
export var value = {
	API_HOST : "http://192.168.1.104:8999",
	API_CARD_GET_URL : 'http://192.168.1.104:8999/api/card/get',
	LOGIN_URL : 'http://192.168.1.104:8999/api/user/login'
};
/**
global.API_HOST = "http://192.168.1.104:8999";
global.API_CARD_GET = global.API_HOST + '/api/card/get';
global.LOGIN_URL = global.API_HOST + '/api/user/login';
*/