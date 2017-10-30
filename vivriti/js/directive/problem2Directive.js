var limitInteger = function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var limit = parseInt(attrs.limitInteger);
            var minValue = parseInt(attrs.minValue);
            var priority = attrs.priority;
            var percentage = attrs.percentage;
            var yeild = attrs.yeild;

            angular.element(elem).on("keypress", function(e) {
            	var available = true,newValue = parseInt(e.key);
            	if(priority) {
            		available = !(scope.priorityIndex.indexOf(e.key)>-1);
            		limit = ((parseInt(scope.investors) + 1)*2)+1;
            	}
            	else if(yeild){
            		newValue = parseInt(this.value+e.key);
            		if (!(newValue > minValue && newValue < limit)) e.preventDefault();
            		return;
            	}
            	else if(percentage){
            		newValue = parseInt(this.value+e.key);
            		existValue = 0;
            		pindex = this.getAttribute('pindex');
            		for(var i=0;i<scope.investorPercentage.length;i++){
            			if(scope.investorPercentage[i] && pindex!=i) existValue += parseInt(scope.investorPercentage[i]);
            		}
            		newValue+=existValue;
            		if (!(newValue > minValue && newValue < limit)) e.preventDefault();
            		return;
            	}
            	else scope.priorityIndex = ['1'];
                if (available && newValue > minValue && newValue < limit) this.value = '';
                else e.preventDefault();
            });
        }
    }
}