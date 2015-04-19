/**
 * Created by amirrajabi on 13/02/15.
 */

var listControllers = angular.module('listControllers-1', []);

listControllers.controller('MainController-1', ['$scope', function ($scope) {

    $scope.message = 'Good day!';

    $scope.person = {
        firstName : 'Amir',
        lastName : 'Rajabi',
        job : 'Angular Programmer'
    }

}]);