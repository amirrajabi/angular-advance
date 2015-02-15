/**
 * Created by amirrajabi on 13/02/15.
 */

var movieControllers = angular.module('movieControllers', []);


movieControllers.controller('ListController',['$scope', '$http', function($scope, $http){

    $http.get('model/data.json').success(function(data){
        $scope.movies = data;
        $scope.sort = 'name';
        $scope.type = 'Sci-Fi';
    });

}]);


movieControllers.controller('DetailsController',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

    $http.get('model/data.json').success(function(data){
        $scope.movies = data;
        $scope.whichItem = $routeParams.itemId;

        if($routeParams.itemId > 0){
            $scope.prevItem = Number($routeParams.itemId)-1;
        }else{
            $scope.prevItem = $scope.movies.length-1;
        }

        if($routeParams.itemId < $scope.movies.length-1){
            $scope.nextItem = Number($routeParams.itemId)+1;
        }else{
            $scope.nextItem = 0;
        }

    });

}]);