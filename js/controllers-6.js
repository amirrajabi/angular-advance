/**
 * Created by amirrajabi on 13/02/15.
 */

var AdvanceAngular = angular.module('AdvanceAngular', []);


AdvanceAngular.controller('MovieController',['$scope', '$http', function($scope, $http){

    $http.get('model/data.json').success(function(data){
        $scope.movies = data;
    });

}]);