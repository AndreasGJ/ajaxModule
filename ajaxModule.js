var jQuery;
var ajaxModule = (function(window, $) {
	return {
	  setup: function(beforeFunc, afterFunc){
	    /* IF NO ARGUMENTS IS SET, THEN DO NOTHING */
			if((beforeFunc && typeof beforeFunc === "function") || (afterFunc && typeof afterFunc === "function")){
				var origOpen = XMLHttpRequest.prototype.open;
			    XMLHttpRequest.prototype.open = function() {
			      /* if the beforeFunc variable is set, run it */
				    if(beforeFunc && typeof beforeFunc === "function") beforeFunc(this);
				    
				    /* if the afterFunc variable is set, then hook in the load event and run it. */
				    if(afterFunc && typeof afterFunc === "function"){
					    this.addEventListener('load', function() {
							afterFunc(this);
						});
					}
					origOpen.apply(this, arguments);
				};
				return true;
			}
			return false;
		}
	};
})(this, jQuery);
