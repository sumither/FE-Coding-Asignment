var problem2Controller = function($scope) {
	$scope.investors = '';
    $scope.priorityIndex = ['1'];
    $scope.investorPercentage = [];

    $scope.getInvestorCount = function(num) {
        return Array.apply(null, {length: parseInt(num)+1}).map(Function.call, Number);
    }
}