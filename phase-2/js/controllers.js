/**
 * Created by amirrajabi on 13/02/15.
 */

var listControllers = angular.module('listControllers', []);

listControllers.controller('MainController', ['$scope', '$http', function ($scope, $http) {

    var onUserComplete = function(response){
        $scope.user = response.data;
    };

    var onError = function(){
        $scope.error = 'Could not fetch the user!';
    };

    $http.get('https://api.github.com/users/amirrajabi')
        .then(onUserComplete, onError);

    $scope.message = 'Good day!';


}]);