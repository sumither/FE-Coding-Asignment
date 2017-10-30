var problem1Controller = function($scope, problem1Service) {
	$scope.uniqueList = [];
	$scope.list;

	problem1Service.fetchProblem1Data().then(function(data,err){
		$scope.list = data.split('\n');
		processList();
	}, function(err){
        console.log(err);
    }).catch(function errorHandler2(err){
        console.log(err);
    });

    var processList = function(){
		for(var i=0;i<$scope.list.length;i++){
			var found = checkIndex($scope.list[i].split(','));
			if(found) $scope.uniqueList.push(found);
		}
    };

    var checkIndex = function(items){
    	var itemIndex = $scope.uniqueList.find(function(item){
    		return item.loanPurpose == items[1] && item.industryType == items[2];
    	});
    	if(!itemIndex) return {loanNumber:items[0], loanPurpose:items[1], industryType:items[2]}
    	else return false;
    }
}