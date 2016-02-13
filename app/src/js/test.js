window.simpleTest = (function(){
	
	var module = function(){

	};

	module.prototype = {
		addNumbers:function(a,b){
			return a+b;
		}
	};

	document.write("this is a test");

	return module;

})();