/**
 * 
 */
(function(w){
	"use strict"
	
	var SICORE = function(){
		return SICORE.fn.init.apply(SICORE.fn, arguments);
	};
	
	var EXTEND_LIST;
	
	SICORE.prototype = SICORE.fn = {
		userAgent : function() {
			return navigator.userAgent;
		},
		
		init : function(){
			return this;
		},
		
		extend : function(fnName, obj){
			if(fnName == "constant"){
				this[fnName] = obj;
				EXTEND_LIST = this[fnName].USE;
			}else {
				if(EXTEND_LIST[fnName]){
					this[fnName] = obj;
				}
			}
		}
	};
	
	w.SICORE = SICORE();
	
})(window);