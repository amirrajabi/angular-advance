/**
 * Created by amirrajabi on 22/02/15.
 */

var listControllers = angular.module('listControllers', []);

listControllers.controller('MainController', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {

    var onUserComplete = function(response){
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
            .then(onRepos, onError);
    };

    var onRepos = function(response){
        $scope.repos = response.data;
    };

    var onError = function(){
        $scope.error = 'Could not fetch the data!';
    };

    var decrementCountdown = function(){
        $scope.countdown -= 1;

        if($scope.countdown < 1){
            $scope.search($scope.username)
        }
    };

    var startCountdown = function(){
        $interval(decrementCountdown, 1000, $scope.countdown);
    };

    var getTime = function(){
        $scope.dateTime = new Date();
    };

    var time = function(){
        $interval(getTime, 1000, $scope.dateTime);
    };

    $scope.search = function(username){
        $http.get('https://api.github.com/users/' + username)
            .then(onUserComplete, onError);
    };

    $scope.username = 'Angular';
    $scope.message = 'Github Viewer!';
    $scope.repoSortOrder = '-language';
    $scope.dateTime = '';
    $scope.countdown = 5;

    startCountdown();
    time();

}]);