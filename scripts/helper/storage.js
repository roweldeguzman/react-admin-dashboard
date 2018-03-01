var _self = {
	add: function (name, data){
		if (_self.isExist(name)) { _self.remove(name); }
		localStorage.setItem(name, JSON.stringify(data));
	},
	get: function (name){
		try { return JSON.parse(localStorage.getItem(name)); }
		catch (e) { return ''; }
	},
	remove: function (name){
		if (_self.isExist(name)) { localStorage.removeItem(name); }
	},
	isExist: function (name){
		let item = localStorage.getItem(name);
		if (item !== null) { return true; }
		else { return false; }
	}
}

module.exports.storage = _self