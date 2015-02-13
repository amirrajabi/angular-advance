/**
 * Created by amirrajabi on 12/02/15.
 */

var AdvanceAngular = angular.module('AdvanceAngular', []);


AdvanceAngular.controller('PersonController', function PersonController($scope){

    $scope.person = {
        'name' : 'Amir',
        'job' : 'JS Engineer',
        'Company' : 'PENSO'
    }

});