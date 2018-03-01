var _self = {
	/**
	 * 
	 * @param needle	string	string to compare
	 * @param haystack 	array	array list
	 * 
	 * @returns boolean
	 */
	in_array: function (needle, haystack) {
		for (var i in haystack) {
			if (haystack[i] == needle) return true;
		}
		return false;
	},
	validate:{
		email: function(email){
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},
		url: function(url){
			var url = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
			return url.test(webUrl);
		},
		password: function(password){
			var pd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/;
			return pd.test(pass);
		}
	},
	/**
	 * @param parentNode	HTML Element Tag Name / class name / id 
	 * @param childNode		HTMLElement Target Element
	 * @param type			string
	 * 
	 * @returns HTML Element
	 */
	parents: function (parentNode, element, type){
		var obj = element.parentNode;
		if (type == 'tag' || type == null) {
			while (obj.tagName != parentNode) {
				obj = obj.parentNode;
			}
		}
		else if (type == 'id') {
			while (obj.id != parentNode) {
				obj = obj.parentNode;
			}
		}
		else if (type == 'class') {
			while (obj.classList.contains(parentNode) === false) {
				obj = obj.parentNode;
			}
		}
		return obj;
	}
}

module.exports.helper = _self