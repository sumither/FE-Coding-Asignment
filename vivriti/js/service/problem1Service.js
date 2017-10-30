var problem1Service = function($http, $q) {

    this.fetchProblem1Data = function() {
        var defer = $q.defer();

        $http.get('csv/problem1Data.csv')
            .success(function(data) {
                defer.resolve(data);
            })
            .error(function() {
                defer.reject('could not find problem1Data.csv');
            });

        return defer.promise;
    }
}