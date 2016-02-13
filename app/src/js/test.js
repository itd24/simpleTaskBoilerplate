window.simpleTest = (function(){
	
	var module = function(){

	};

	module.prototype = {
		addNumbers:function(a,b){
			return a+b;
		}
	};

	return module;

})();